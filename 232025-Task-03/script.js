/* ==========================================
   Home Task 3: Simple To-Do List – script.js
   Muhammad Shamoil – 232025
   ==========================================

   DOM Manipulation used:
   - document.getElementById() to get wrapper & summary elements
   - createElement() to dynamically build task card HTML
   - appendChild() / removeChild() to add/remove nodes
   - classList.add/remove to toggle visual states
   - innerText / style updates for live feedback
   - for loop to apply loop-driven logic across task objects
*/

// ─── Data ───────────────────────────────────────────────────────────────────
// Each task stored as an individual variable (per lab requirement)
const task1 = {
  id: 1,
  text: "Read the JavaScript chapter on DOM manipulation",
};
const task2 = { id: 2, text: "Complete Lab 02 home tasks and push to GitHub" };
const task3 = { id: 3, text: "Review notes and prepare for next week's class" };

// Collect tasks into an array so we can loop over them
const tasks = [task1, task2, task3];

// State tracking (individual variables per task)
let task1Completed = false;
let task2Completed = false;
let task3Completed = false;
let task1Visible = true;
let task2Visible = true;
let task3Visible = true;

// Helper: get completion/visibility state by task id
function getState(id) {
  if (id === 1) return { completed: task1Completed, visible: task1Visible };
  if (id === 2) return { completed: task2Completed, visible: task2Visible };
  if (id === 3) return { completed: task3Completed, visible: task3Visible };
}

function setCompleted(id, val) {
  if (id === 1) task1Completed = val;
  if (id === 2) task2Completed = val;
  if (id === 3) task3Completed = val;
}

function setVisible(id, val) {
  if (id === 1) task1Visible = val;
  if (id === 2) task2Visible = val;
  if (id === 3) task3Visible = val;
}

// ─── DOM Rendering ──────────────────────────────────────────────────────────
const wrapper = document.getElementById("todo-wrapper");
const summaryEl = document.getElementById("summary");
const summaryText = document.getElementById("summary-text");

/**
 * Builds and appends a task card DOM element for the given task object.
 * Uses DOM manipulation (createElement, appendChild, setAttribute) to
 * construct the card dynamically rather than hard-coding HTML.
 */
function createTaskCard(task) {
  // Outer card
  const card = document.createElement("div");
  card.classList.add("task-card");
  card.id = `task-card-${task.id}`;

  // Number badge
  const num = document.createElement("div");
  num.classList.add("task-num");
  num.innerText = task.id;

  // Task text
  const text = document.createElement("span");
  text.classList.add("task-text");
  text.id = `task-text-${task.id}`;
  text.innerText = task.text;

  // Actions wrapper
  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("btn", "btn-complete");
  completeBtn.id = `complete-btn-${task.id}`;
  completeBtn.innerText = "✔ Complete";
  completeBtn.setAttribute("aria-label", `Mark task ${task.id} as complete`);
  completeBtn.addEventListener("click", () => markComplete(task.id));

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "btn-remove");
  removeBtn.id = `remove-btn-${task.id}`;
  removeBtn.innerText = "✕ Remove";
  removeBtn.setAttribute("aria-label", `Remove task ${task.id}`);
  removeBtn.addEventListener("click", () => removeTask(task.id));

  // Assemble
  actions.appendChild(completeBtn);
  actions.appendChild(removeBtn);
  card.appendChild(num);
  card.appendChild(text);
  card.appendChild(actions);

  return card;
}

/**
 * Renders all visible task cards.
 * Uses a for loop to iterate over tasks and apply uniform styling logic
 * (per lab requirement: "use loops to style all tasks the same way").
 */
function renderTasks() {
  wrapper.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const state = getState(task.id);

    // Skip hidden tasks
    if (!state.visible) continue;

    const card = createTaskCard(task);

    // Apply completed styles if task is already done
    if (state.completed) {
      card.classList.add("completed");
      card.querySelector(`#complete-btn-${task.id}`).disabled = true;
      card.querySelector(`#complete-btn-${task.id}`).innerText = "✔ Done";
    }

    wrapper.appendChild(card);
  }

  updateSummary();
}

// ─── Actions ─────────────────────────────────────────────────────────────────

/**
 * Marks a task as complete using DOM manipulation:
 * - Adds 'completed' CSS class to the card
 * - Disables the Complete button
 */
function markComplete(taskId) {
  setCompleted(taskId, true);

  const card = document.getElementById(`task-card-${taskId}`);
  const btn = document.getElementById(`complete-btn-${taskId}`);

  if (card) card.classList.add("completed");
  if (btn) {
    btn.disabled = true;
    btn.innerText = "✔ Done";
  }

  updateSummary();
}

/**
 * Removes a task from the DOM with a CSS transition animation,
 * then re-renders the list.
 */
function removeTask(taskId) {
  setVisible(taskId, false);

  const card = document.getElementById(`task-card-${taskId}`);
  if (card) {
    card.classList.add("removing");
    // Wait for CSS transition to finish before removing from DOM
    card.addEventListener(
      "transitionend",
      () => {
        renderTasks();
      },
      { once: true },
    );
  }
}

/**
 * Updates the summary bar at the bottom.
 * Counts completed tasks using a for loop (loop-driven logic per lab requirement).
 */
function updateSummary() {
  let completed = 0;
  let visible = 0;

  for (let i = 0; i < tasks.length; i++) {
    const state = getState(tasks[i].id);
    if (state.visible) {
      visible++;
      if (state.completed) completed++;
    }
  }

  if (visible === 0) {
    summaryText.innerText = "All tasks removed.";
    summaryEl.classList.remove("all-done");
  } else if (completed === visible) {
    summaryText.innerText = `🎉 All ${visible} task${visible > 1 ? "s" : ""} completed!`;
    summaryEl.classList.add("all-done");
  } else {
    summaryText.innerText = `${completed} of ${visible} task${visible > 1 ? "s" : ""} completed`;
    summaryEl.classList.remove("all-done");
  }
}

// ─── Init ────────────────────────────────────────────────────────────────────
renderTasks();
