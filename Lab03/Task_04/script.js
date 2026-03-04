// Create a Set to store registered courses
const registeredCourses = new Set();

const addCourse = () => {
    const inputElement = document.getElementById("course-input");
    const messageElement = document.getElementById("message");
    let courseName = inputElement.value.trim();

    if (!courseName) {
        messageElement.textContent = "Please enter a course name.";
        messageElement.style.color = "var(--accent1)";
        return;
    }

    // Attempt adding duplicate courses
    if (registeredCourses.has(courseName.toLowerCase())) {
        messageElement.textContent = `Course "${courseName}" is already registered!`;
        messageElement.style.color = "#ef4444"; // warning red
    } else {
        registeredCourses.add(courseName.toLowerCase());
        messageElement.textContent = `Successfully added "${courseName}".`;
        messageElement.style.color = "var(--success)";
        inputElement.value = ""; // clear input

        displayCourses();
    }
};

const displayCourses = () => {
    const container = document.getElementById("courses-container");
    const totalElement = document.getElementById("total-courses");

    // Display total unique courses using .size
    totalElement.textContent = registeredCourses.size;

    container.innerHTML = "";

    // Loop through Set using for...of
    for (const course of registeredCourses) {
        // Format string properly for display (capitalize first letter)
        const formattedCourse = course.charAt(0).toUpperCase() + course.slice(1);

        const div = document.createElement("div");
        div.className = "course-card";
        div.textContent = formattedCourse;
        container.appendChild(div);
    }
};

// Add enter key support
document.getElementById("course-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addCourse();
    }
});
