package com.example.studentdemo;

import com.example.studentdemo.model.Student;
import com.example.studentdemo.model.SubjectScore;
import com.example.studentdemo.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void run(String... args) throws Exception {
        if (studentRepository.count() == 0) {
            // Rahul
            Student rahul = new Student(null, "Rahul", "10A", 82, null);
            rahul.setSubjects(Arrays.asList(
                    new SubjectScore(null, "Math", 85, rahul),
                    new SubjectScore(null, "Science", 72, rahul),
                    new SubjectScore(null, "English", 60, rahul)
            ));

            // Aisha
            Student aisha = new Student(null, "Aisha", "10A", 90, null);
            aisha.setSubjects(Arrays.asList(
                    new SubjectScore(null, "Math", 55, aisha),
                    new SubjectScore(null, "Science", 48, aisha),
                    new SubjectScore(null, "English", 68, aisha)
            ));

            // Vikram
            Student vikram = new Student(null, "Vikram", "9B", 95, null);
            vikram.setSubjects(Arrays.asList(
                    new SubjectScore(null, "Math", 92, vikram),
                    new SubjectScore(null, "Science", 88, vikram),
                    new SubjectScore(null, "English", 79, vikram)
            ));

            studentRepository.saveAll(Arrays.asList(rahul, aisha, vikram));
            System.out.println("Database seeded with sample students!");
        }
    }
}
