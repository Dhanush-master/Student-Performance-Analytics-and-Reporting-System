# User Guide - New Features

## 👨‍🏫 Teacher Guide

### 📚 Student Details Management

#### **Adding a New Student**
1. Navigate to **"Student Details"** from the sidebar
2. Click **"➕ Add New Student"** button
3. Fill in all required fields:
   - Student Name
   - Roll Number (e.g., A001)
   - Class (9, 10, 11, or 12)
   - Section (A, B, C, or D)
   - Semester (1 or 2)
   - Contact Number (10 digits)
4. Optionally fill optional fields:
   - Email Address
   - Date of Birth
   - Address
5. Click **"Add Student"** button
6. See success message confirming addition

#### **Editing Student Information**
1. Go to **"Student Details"** page
2. Find the student in the table
3. Click **"✏️ Edit"** button in the Actions column
4. Modify the desired fields
5. Click **"Update Student"** button
6. See success message confirming update

#### **Deleting a Student**
1. Go to **"Student Details"** page
2. Find the student in the table
3. Click **"🗑️ Delete"** button in the Actions column
4. Confirm the deletion in the popup
5. Student is removed from the list

#### **Searching Students**
1. Go to **"Student Details"** page
2. Use the **"Search by Name/Roll No."** field at the top
3. Type student name or roll number
4. Results filter in real-time

#### **Filtering Students**
1. Go to **"Student Details"** page
2. Use **"Filter by Class"** dropdown to show only a specific class
3. Use **"Filter by Section"** dropdown to show only a specific section
4. Combine filters to narrow down results
5. Click **"Clear Filters"** to reset

---

### ⏰ Timetable Management

#### **Creating a Timetable Entry**
1. Navigate to **"Timetable"** from the sidebar
2. Click **"⏰ Add New Entry"** button
3. Fill in all required fields:
   - Day of Week (Monday to Saturday)
   - Subject (from the list of 12 subjects)
   - Time Slot (select from available slots)
   - Classroom/Lab (e.g., Room 101, Lab 1)
4. Optionally enter Teacher Name
5. Click **"Create Entry"** button
6. Entry appears in the grid view

#### **Viewing the Weekly Schedule**
1. Go to **"Timetable"** page
2. The grid shows:
   - **Rows**: Time slots (08:00 - 15:15)
   - **Columns**: Days of week (Monday - Saturday)
   - **Cards**: Class information with subject, room, and teacher
3. Color-coded subjects for quick identification

#### **Editing a Timetable Entry**
1. Go to **"Timetable"** page
2. Find the class in the grid
3. Click **"✏️"** button on the class card
4. Modify the details in the form
5. Click **"Update Entry"** button

#### **Deleting a Timetable Entry**
1. Go to **"Timetable"** page
2. Find the class in the grid
3. Click **"🗑️"** button on the class card
4. Confirm deletion
5. Entry is removed from the schedule

#### **Filtering by Day**
1. Go to **"Timetable"** page
2. Use **"Filter by Day"** dropdown above the grid
3. Select a specific day to see only that day's classes
4. Click **"Clear Filter"** to see all days

#### **Managing Conflicts**
- The system prevents double-booking in the same time slot and day
- If a slot is already filled, a new entry cannot be added to that slot

---

## 👨‍🎓 Student Guide

### 📅 Viewing Your Timetable

#### **Accessing Your Timetable**
1. Log in as a student
2. Click **"⏰ Timetable"** from the sidebar
3. Your complete weekly schedule is displayed

#### **Understanding the Timetable**

**Color Codes:**
- **Blue**: Regular class
- **Green**: Regular subject
- **Purple**: Science class
- **Yellow**: Regular subject
- **Highlighted Yellow**: Your current class (🔴 ONGOING)
- **Gray**: Free slot
- **Red**: Break or Lunch time

#### **Current Class Indicator**
- The system automatically highlights your current class
- Shows **🔴 ONGOING** badge during the class time
- Updates based on the system time

#### **Class Information Displayed**
For each class, you can see:
- 📚 **Subject Name** (e.g., Mathematics)
- 📍 **Classroom/Lab Location** (e.g., Room 101, Lab 1)
- 👨‍🏫 **Teacher Name** (if available)

#### **Break and Lunch Times**
- **10:00 - 10:15**: Morning Break (30 minutes)
- **12:15 - 01:15**: Lunch Break (1 hour)
These are shown in red on the timetable

#### **Weekly Statistics**
The page shows:
- Total classes per week
- Number of different subjects
- Number of classrooms/labs used

### 💡 Tips for Students

1. **Check Daily**: Review your timetable every morning
2. **Note Locations**: Remember where each class is held
3. **Plan Breaks**: Use break times productively
4. **Arrive Early**: Come 5 minutes before class time
5. **Follow Changes**: Teachers may update the timetable
6. **Take Screenshots**: Bookmark or save the page for offline reference

---

## 🎨 UI Features Explanation

### **Cards with Shadows**
- Modern look with subtle shadows
- Hover effects for better interactivity
- Organized information display

### **Responsive Design**
- Works on desktop, tablet, and mobile
- Grid layouts adapt to screen size
- Touch-friendly buttons on mobile

### **Color System**
- **Blue**: Primary actions and information
- **Green**: Success messages and approval
- **Yellow**: Warnings and highlights
- **Red**: Danger actions and errors
- **Gray**: Secondary information

### **Form Validation**
- Red borders indicate errors
- Clear error messages below fields
- Asterisks (*) mark required fields
- Validation happens on form submission

### **Status Indicators**
- ✅ Green badges for success
- ⚠️ Yellow badges for warnings
- ❌ Red badges for errors/dangers
- ℹ️ Blue badges for information

---

## ⌨️ Keyboard Shortcuts (Future Enhancement)

*Coming in next version:*
- Tab: Navigate between fields
- Enter: Submit form
- Escape: Close dialog/cancel

---

## 📱 Mobile Experience

### **Responsive Features**
- Sidebar collapses on small screens
- Tables scroll horizontally if needed
- Forms stack vertically on mobile
- Touch-optimized buttons (larger tap targets)
- Mobile-friendly grid layout

### **Using on Mobile Device**
1. Access the app via browser
2. Interface adapts automatically
3. Use landscape mode for better table view
4. Touch buttons are properly sized

---

## 🔐 Data Security Notes

### **LocalStorage Data**
- All data is stored locally in your browser
- Data persists between sessions
- *Not* shared across browsers or devices
- Clear browser cache to reset data

### **Best Practices**
1. Use a secure device for sensitive data
2. Keep your browser updated
3. Don't share login credentials
4. Log out when done using shared computers

---

## 🆘 Troubleshooting

### **Issue: Form shows validation errors**
- **Solution**: Check that all required fields (marked with *) are filled
- **Solution**: Ensure phone number is exactly 10 digits
- **Solution**: Roll number should contain only letters and numbers

### **Issue: Data not saving**
- **Solution**: Check browser console for errors
- **Solution**: Ensure LocalStorage is enabled in browser
- **Solution**: Try refreshing the page

### **Issue: Timetable not showing current class**
- **Solution**: Check system time is correct
- **Solution**: Current class only highlights during that time slot
- **Solution**: Refresh page to sync with current time

### **Issue: Search/Filter not working**
- **Solution**: Clear filters and try again
- **Solution**: Check spelling of search term
- **Solution**: Use different filter combinations

---

## 📊 Data Export (Future Feature)

*Coming soon:*
- Export student list to CSV
- Export timetable to PDF
- Print-friendly timetable format
- Email timetable notifications

---

## 🔔 Important Reminders

### **For Teachers:**
- ✅ Keep student information updated
- ✅ Publish timetable at the start of semester
- ✅ Notify students of any changes
- ✅ Use consistent classroom naming

### **For Students:**
- ✅ Check timetable regularly
- ✅ Arrive on time for classes
- ✅ Note down locations
- ✅ Report any errors to your teacher

---

## 📞 Getting Help

If you encounter issues:

1. **Check this guide** - Most common questions are answered here
2. **Review validation messages** - They explain what's wrong
3. **Contact your administrator** - For system-level issues
4. **Check browser console** - Technical details of errors

---

**Version**: 1.1.0  
**Last Updated**: February 25, 2026

For implementation details, see `IMPLEMENTATION_GUIDE.md`
