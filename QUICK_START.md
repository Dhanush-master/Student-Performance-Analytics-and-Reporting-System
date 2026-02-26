# 🚀 Quick Start Guide - SPARS v1.1

## ⚡ Get Started in 5 Minutes

### **Step 1: Start the Development Server**
```bash
npm run dev
```
The app will open at `http://localhost:5173`

### **Step 2: Login**
- **Teacher Mode**: 
  - Username: Use "teacher" 
  - Any password works (dev mode)
  
- **Student Mode**: 
  - Username: Use "student"
  - Any password works (dev mode)

### **Step 3: Explore the New Features**

#### **For Teachers:**

**📚 Add First Student**
1. Click "Student Details" in sidebar
2. Click "➕ Add New Student"
3. Fill the form (name, roll #, class, section, semester, contact)
4. Click "Add Student"
5. Success! ✅

**⏰ Create Timetable**
1. Click "Timetable" in sidebar
2. Click "⏰ Add New Entry"
3. Select day, subject, time, classroom
4. Click "Create Entry"
5. View in grid! 📅

#### **For Students:**

**📅 View Your Timetable**
1. Click "⏰ Timetable" in sidebar
2. See your weekly schedule
3. Current class is highlighted in yellow
4. Check room locations and teachers

---

## 🎨 UI Highlights

✨ **Modern Design**
- Poppins font throughout
- Blue gradient colors
- Soft card shadows
- Professional buttons

📱 **Mobile-Friendly**
- Responsive on all devices
- Touch-optimized buttons
- Horizontal scrolling for tables

🎯 **Intuitive**
- Clear error messages
- Success notifications
- Helpful tool tips
- Empty state guides

---

## 🔄 Common Tasks

### **Add a Student**
```
Sidebar → Student Details → ➕ Add New Student → Fill Form → Add Student
```

### **Create Timetable Entry**
```
Sidebar → Timetable → ⏰ Add New Entry → Fill Form → Create Entry
```

### **Search Student**
```
Student Details → Search Box → Type Name/Roll # → Auto Filter
```

### **Filter Timetable**
```
Timetable → Filter by Day Dropdown → Select Day → Grid Updates
```

### **Edit Student**
```
Student Details → Find Student → ✏️ Edit → Update → Student Updated
```

### **Delete Entry**
```
Student Details/Timetable → 🗑️ Delete → Confirm → Entry Removed
```

---

## 💾 Your Data

**Storage**: Browser LocalStorage
- ✅ Data persists between sessions
- ✅ No server needed
- ✅ Private to your device
- ⚠️ Clears if you clear browser cache

**To Backup**: Open browser console and copy JSON from:
```javascript
localStorage.getItem('studentDetails')
localStorage.getItem('teacherTimetable')
```

---

## 🎯 Feature Overview

| Feature | Location | Access |
|---------|----------|--------|
| Student Details | Teacher → Student Details | CRUD |
| Timetable | Teacher → Timetable | CRUD |
| Student Timetable | Student → Timetable | Read-Only |
| Dashboard | Both → Dashboard | View |
| Reports | Both → Reports | View |

---

## 🔍 Current Class Indicator

The system auto-highlights your current class:
- 📍 Yellow background
- 🔴 **ONGOING** badge
- Time-based (updates every minute)
- Shows subject & room

*Note: based on system time*

---

## 🎨 Color Meanings

| Color | Meaning |
|-------|---------|
| 🔵 Blue | Primary action |
| 🟢 Green | Success/Approval |
| 🟡 Yellow | Current/Warning |
| 🔴 Red | Danger/Delete |
| ⚪ Gray | Secondary/Inactive |

---

## ⌨️ Form Tips

**Required Fields** (marked with *)
- Name, Roll #, Class, Section, Semester, Contact

**Validation Rules**
- Phone: exactly 10 digits
- Roll #: letters and numbers only
- Class: 9, 10, 11, or 12
- Section: A, B, C, or D

**Error Messages**
- Red text below field = Error
- Yellow box at top = General info
- Green box = Success notification

---

## 📊 Sample Data

The system includes sample timetable data:
- 7 pre-loaded classes
- Monday-Wednesday examples
- Different subjects and times
- Ready to edit/delete

**To Use Sample Data**
- Just view Timetable page
- Data auto-loads on first visit

---

## 🐛 Troubleshooting

**"Data Not Saving?"**
- Check form for red error messages
- Ensure all required fields (*) are filled
- Try refreshing page

**"Can't See Current Class?"**
- Check system time is correct
- Class only highlights within time slot
- Refresh page to update

**"Search Not Working?"**
- Type student name or roll number exactly
- Check spelling
- Clear filters on the page

**"Timetable Grid Looks Wrong?"**
- Try refreshing the page
- Check browser zoom level
- Ensure window is wide enough

---

## 🌟 Pro Tips

1. **Use Search**: Quick find students by name/roll
2. **Filter Daily**: Filter timetable by specific day
3. **Edit Quick**: Double-click to edit
4. **Confirm Deletes**: Always confirm before deleting
5. **Check Time**: Current class based on system time
6. **Mobile Mode**: Press F12 → Toggle Device Toolbar
7. **Save Timetable**: Screenshot for offline access
8. **Review Changes**: Always check after adding new entries

---

## 📱 Mobile Testing

**Check on Mobile:**
1. Open in browser on phone
2. Or use DevTools (F12) → Toggle Device Toolbar
3. Test all buttons and forms
4. Scroll tables horizontally

---

## 🔐 Beta Features Coming Soon

🚀 Features planned for next version:
- Database integration
- Email notifications
- File uploads
- Attendance tracking
- Parent portal
- Mobile app

---

## 📞 Need Help?

**Check These:**
1. [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md) - Technical details
2. [USER_GUIDE.md](USER_GUIDE.md) - Detailed instructions
3. [UPDATES_SUMMARY.md](UPDATES_SUMMARY.md) - Complete changelog
4. Code comments (JSDoc) - In source files

---

## ✅ Checklist - First Time Setup

- [ ] Started dev server (`npm run dev`)
- [ ] Logged in as teacher/student
- [ ] Added first student
- [ ] Created first timetable entry
- [ ] Viewed student timetable
- [ ] Tested search/filter
- [ ] Checked mobile responsiveness
- [ ] Read the guide files
- [ ] Explored all menu options
- [ ] Tested edit/delete functions

---

## 🎓 Learning Path

**Beginners:**
1. Start with this Quick Start
2. Log in and explore
3. Add a student
4. Create a timetable

**Intermediate:**
1. Read USER_GUIDE.md
2. Try advanced filters
3. Edit and delete entries
4. Understand data structure

**Advanced:**
1. Read IMPLEMENTATION_GUIDE.md
2. Review component code
3. Check validation logic
4. Understand LocalStorage

---

## 🎯 Next Steps

1. **Test Thoroughly**
   - Add multiple students
   - Create full week timetable
   - Test all filters and searches

2. **Customize**
   - Add your own subjects
   - Adjust colors/fonts if needed
   - Modify validation rules

3. **Deploy**
   - Build for production (`npm run build`)
   - Deploy to hosting
   - Share with users

4. **Maintain**
   - Regular backups of data
   - Monitor user feedback
   - Plan future features

---

## 📊 Performance Tips

- Use search/filter instead of scrolling long lists
- Close browser tabs to free memory
- Clear cache monthly for best performance
- Use latest browser version

---

## 🎉 Congratulations!

You're all set! Start using SPARS v1.1 with:
- ✅ Modern design
- ✅ Full timetable management
- ✅ Student detail tracking
- ✅ Current class highlighting
- ✅ Complete documentation

**Happy Teaching & Learning!** 🎓

---

**Questions?** Check the documentation files or review inline code comments.

**Version**: 1.1.0  
**Last Updated**: February 25, 2026
