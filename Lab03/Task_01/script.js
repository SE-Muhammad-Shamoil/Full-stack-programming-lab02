// ============================================
// Lab Task 1: Student Management System
// ES6 Classes | constructor | template literals
// ============================================

// --- ES6 Class Definition ---
class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses; // array
    }

    // Returns initials for avatar
    getInitials() {
        return this.name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    }

    // Render a single card using template literals
    toCardHTML(delay = 0) {
        const courseTagsHTML = this.courses
            .map(course => `<span class="course-tag">${course}</span>`)
            .join('');

        return `
      <div class="student-card" style="animation-delay: ${delay}s;">
        <div class="card-header">
          <div class="avatar">${this.getInitials()}</div>
          <div class="card-title">
            <div class="student-name">${this.name}</div>
            <div class="student-id">ID: ${this.id}</div>
          </div>
        </div>

        <div class="info-row">
          <span class="info-icon">🎓</span>
          <span class="info-label">Semester</span>
          <span class="info-value">${this.semester}</span>
        </div>

        <div class="info-row">
          <span class="info-icon">📚</span>
          <span class="info-label">Courses</span>
          <span class="info-value">${this.courses.length} enrolled</span>
        </div>

        <div class="courses-label">Enrolled Courses</div>
        <div class="courses-list">${courseTagsHTML}</div>
      </div>
    `;
    }
}

// --- Create Student Objects ---
const students = [
    new Student('STD-001', 'Ali Hassan', 'Semester 3', ['JavaScript', 'HTML & CSS', 'Python Basics']),
    new Student('STD-002', 'Ahmed Raza', 'Semester 5', ['React.js', 'Node.js', 'MongoDB', 'REST APIs']),
    new Student('STD-003', 'Sara Khan', 'Semester 1', ['Web Fundamentals', 'Computer Science 101']),
    new Student('STD-004', 'Fatima Malik', 'Semester 7', ['Machine Learning', 'Data Structures', 'Algorithms', 'Cloud Computing']),
];

// --- Render Stats Bar ---
const statsBar = document.getElementById('stats-bar');
const totalCourses = students.reduce((sum, s) => sum + s.courses.length, 0);

statsBar.innerHTML = `
  <div class="stat-item">
    <div class="stat-value">${students.length}</div>
    <div class="stat-label">Students</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">${totalCourses}</div>
    <div class="stat-label">Total Courses</div>
  </div>
  <div class="stat-item">
    <div class="stat-value">${Math.max(...students.map(s => s.courses.length))}</div>
    <div class="stat-label">Max Courses</div>
  </div>
`;

// --- Render Student Cards ---
const container = document.getElementById('students-container');

let allCardsHTML = '';
students.forEach((student, index) => {
    allCardsHTML += student.toCardHTML(index * 0.12);
});

container.innerHTML = allCardsHTML;
