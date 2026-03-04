# Full Stack Programming Lab 02

**Name:** Muhammad Shamoil  
**Registration ID:** 232025  
**Course:** Full Stack Development (FSD)

---

## 📂 Project Structure

This lab contains all five tasks (2 Lab Tasks + 3 Home Tasks), each implemented with a focus on clean code and unique, impressive UI design (glassmorphism theme, Outfit font, animated floating globes).

---

### 1️⃣ Task 01 – Lab Task: Interactive Quiz App

A dynamic quiz application built with JavaScript variables, functions, and DOM manipulation.

- **Path:** `./232025-Task-01/index.html`
- **Features:**
  - 4 multiple-choice questions stored in JavaScript variables.
  - Individual answer checking with functions.
  - Real-time score calculation and feedback messages.
  - "Reset Quiz" button to clear state without reloading.
  - Animated floating background globes and translucent glass cards.

---

### 2️⃣ Task 02 – Lab Task: Basic Calculator

A stylish calculator supporting the four arithmetic operations.

- **Path:** `./232025-Task-02/index.html`
- **Features:**
  - Addition, Subtraction, Multiplication, Division via dropdown select.
  - Input validation (empty inputs, division-by-zero guard).
  - **Bonus:** Result box turns green (positive) or red (negative).
  - Glassmorphism design with smooth transitions.

---

### 3️⃣ Task 03 – Home Task: Simple To-Do List

A to-do list app with 3 pre-set tasks using DOM manipulation and loops.

- **Path:** `./232025-Task-03/index.html`
- **Features:**
  - 3 fixed tasks stored in individual JavaScript variables (`task1`, `task2`, `task3`).
  - **Mark Complete** button: applies strike-through styling and disables the button.
  - **Remove** button: animates the card out and removes it from the DOM.
  - Loops used to iterate over tasks for rendering and summary calculation.
  - Live summary bar showing completion progress.

---

### 4️⃣ Task 04 – Home Task: Color Box Generator

A color generator tool with 3 separate input fields and a BOM info panel.

- **Path:** `./232025-Task-04/index.html`
- **Features:**
  - 3 individual color input fields, each handled by a dedicated function (`handleColor1`, `handleColor2`, `handleColor3`).
  - Live color swatch preview updates as user types.
  - `appendColorBox()` uses `createElement` and `appendChild` for DOM manipulation.
  - **Clear All** button removes all boxes using `querySelectorAll` + `forEach`.
  - Input validation using `CSS.supports('color', ...)`.
  - **Bonus:** BOM panel displays `window.innerWidth/Height`, `screen`, `navigator`, and `location` info, updating live on resize.

---

### 5️⃣ Task 05 – Home Task: Form Validation

A registration form with full client-side validation and DOM feedback.

- **Path:** `./232025-Task-05/index.html`
- **Fields:** Name, Email, Age, Password
- **Validation Functions (per field):**
  - `validateName()` — must not be empty, min 2 chars
  - `validateEmail()` — must contain `@` and valid domain
  - `validateAge()` — must be integer between 18 – 60
  - `validatePassword()` — minimum 6 characters; strength bar updates live
- **DOM Manipulation:** Error messages shown/hidden dynamically; `valid`/`invalid` CSS classes toggle on field groups.
- **Bonus:** `confirm()` shows a details summary before submitting; `alert()` greets user; `prompt()` collects optional feedback.
- Password visibility toggle button included.

---

## 🚀 How to Run

1. **Clone/Download** the repository.
2. Navigate to any task folder (e.g. `232025-Task-03`).
3. Open `index.html` in any modern web browser.
4. No build step or server required — plain HTML/CSS/JS.

---

_Created for Lab 02 Submission — Muhammad Shamoil (232025)_
