// Add students using Class
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Register courses using Set
        this.courses = new Set();
    }

    addCourse(courseName) {
        if (this.courses.has(courseName.toLowerCase())) {
            return false; // course already exists
        }
        this.courses.add(courseName.toLowerCase());
        return true;
    }
}

// Store students in Map
const studentMap = new Map();

// UI Elements
const statusMsg = document.getElementById("status-msg");
const container = document.getElementById("students-container");
const loadingOverlay = document.getElementById("loading");

const showStatus = (msg, color) => {
    statusMsg.textContent = msg;
    statusMsg.style.color = color;
    setTimeout(() => { statusMsg.textContent = ""; }, 3000);
};

// Simulate saving data using Promise
const saveDataAsync = () => {
    return new Promise((resolve, reject) => {
        loadingOverlay.style.display = "flex";
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            loadingOverlay.style.display = "none";
            if (success) {
                resolve("Data saved successfully!");
            } else {
                reject(new Error("Database connection timeout."));
            }
        }, 1500); // simulate 1.5s delay
    });
};

const handleSave = () => {
    saveDataAsync()
        .then((message) => {
            alert(message); // Using alert for better visibility
        })
        .catch((err) => {
            alert("Error: " + err.message);
        });
};

const renderStudents = () => {
    container.innerHTML = "";

    if (studentMap.size === 0) {
        container.innerHTML = `<p style="color: var(--muted); text-align: center;">No students registered yet.</p>`;
        return;
    }

    studentMap.forEach((student, id) => {
        const div = document.createElement("div");
        div.className = "student-item";

        const coursesList = Array.from(student.courses)
            .map(c => `<span class="course-tag">${c.charAt(0).toUpperCase() + c.slice(1)}</span>`)
            .join("");

        div.innerHTML = `
            <header>
                <div>
                    <div class="student-name">${student.name}</div>
                    <div class="student-id">ID: ${id}</div>
                </div>
                <button class="save-btn" onclick="handleSave()">Save to DB</button>
            </header>
            
            <div class="courses-title">Registered Courses (<span id="count-${id}">${student.courses.size}</span>)</div>
            <div class="courses-list" id="list-${id}">
                ${coursesList || '<span style="color:var(--muted);font-size:12px;">No courses</span>'}
            </div>
            
            <div class="add-course-form">
                <input type="text" id="course-input-${id}" placeholder="Enter course name" />
                <button onclick="registerCourse('${id}')">Add Course</button>
            </div>
            <div id="course-msg-${id}" style="color:red; font-size:12px; margin-top:4px;"></div>
        `;
        container.appendChild(div);
    });
};

window.registerStudent = () => {
    const id = document.getElementById("reg-id").value.trim().toUpperCase();
    const name = document.getElementById("reg-name").value.trim();

    if (!id || !name) {
        showStatus("Please enter both ID and Name.", "#ef4444");
        return;
    }

    if (studentMap.has(id)) {
        showStatus(`Student ID ${id} already exists.`, "#ef4444");
        return;
    }

    const newStudent = new Student(id, name);
    studentMap.set(id, newStudent);

    document.getElementById("reg-id").value = "";
    document.getElementById("reg-name").value = "";

    showStatus(`Student ${name} registered.`, "var(--success)");
    renderStudents();
};

window.registerCourse = (studentId) => {
    const input = document.getElementById(`course-input-${studentId}`);
    const msgEl = document.getElementById(`course-msg-${studentId}`);
    const courseName = input.value.trim();

    if (!courseName) return;

    const student = studentMap.get(studentId);
    if (!student) return;

    if (student.addCourse(courseName)) {
        input.value = "";
        msgEl.textContent = "";
        renderStudents(); // Re-render to show updated courses
    } else {
        msgEl.textContent = `Course "${courseName}" is already registered!`;
        msgEl.style.color = "#ef4444";
        setTimeout(() => { msgEl.textContent = ""; }, 2500);
    }
};

// Initial render
renderStudents();
