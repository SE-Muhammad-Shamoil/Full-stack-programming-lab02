// Create 3 student objects with name, age, semester, and courses (array)
const students = [
    { name: "Alice Johnson", age: 20, semester: 4, courses: ["Mathematics", "Physics", "Computer Science"] },
    { name: "Bob Smith", age: 22, semester: 6, courses: ["Data Structures", "Algorithms", "Databases"] },
    { name: "Charlie Brown", age: 21, semester: 5, courses: ["Software Engineering", "Web Development", "AI"] }
];

window.processData = () => {
    // Convert objects to JSON using JSON.stringify()
    const jsonString = JSON.stringify(students, null, 2);

    // Show JSON in UI
    const jsonSchemaEl = document.getElementById("json-schema");
    jsonSchemaEl.textContent = jsonString;

    // Convert JSON back to objects using JSON.parse()
    const parsedStudents = JSON.parse(jsonString);

    const container = document.getElementById("students-container");
    container.innerHTML = "";

    // Loop through students using forEach
    parsedStudents.forEach(student => {
        // Use destructuring to extract properties
        const { name, age, semester, courses } = student;

        // Display all student info in HTML using innerHTML
        const card = document.createElement("div");
        card.className = "student-item";

        const coursesHtml = courses.map(course => `<span class="course-tag">${course}</span>`).join("");

        card.innerHTML = `
            <div class="info-row">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
            </div>
            <div class="info-row">
                <div class="label">Age:</div>
                <div class="value">${age} years</div>
            </div>
            <div class="info-row">
                <div class="label">Semester:</div>
                <div class="value">${semester}th</div>
            </div>
            <div class="label" style="margin-top: 16px;">Registered Courses:</div>
            <div class="courses-list">
                ${coursesHtml}
            </div>
        `;

        container.appendChild(card);
    });
};
