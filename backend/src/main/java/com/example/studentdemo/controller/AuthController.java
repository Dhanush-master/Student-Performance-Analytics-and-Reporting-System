package com.example.studentdemo.controller;

import com.example.studentdemo.model.User;
import com.example.studentdemo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Email already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
        
        // Simple plain-text saving for educational purposes
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        Optional<User> userOptional = userRepository.findByUsername(loginRequest.getUsername());
        
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            // Compare plain text password
            if (user.getPassword().equals(loginRequest.getPassword())) {
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("role", user.getRole());
                response.put("username", user.getUsername());
                return ResponseEntity.ok(response);
            }
        }
        
        Map<String, String> response = new HashMap<>();
        response.put("error", "Invalid email or password");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
    }
}
