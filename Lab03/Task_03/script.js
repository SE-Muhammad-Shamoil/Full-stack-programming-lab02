// ============================================
// Lab Task 3: Asynchronous Data Loader
// ES6 | Promises | setTimeout | .then .catch
// ============================================

const DELAY_MS = 3000; // 3-second simulated server delay

// ----- Mock user data (resolved by promise) -----
const mockUsers = [
    { id: 1, name: 'Ali Hassan', role: 'Frontend Dev', email: 'ali@campus.edu', dept: 'Computer Science' },
    { id: 2, name: 'Ahmed Raza', role: 'Backend Dev', email: 'ahmed@campus.edu', dept: 'Software Eng.' },
    { id: 3, name: 'Sara Khan', role: 'UI/UX Designer', email: 'sara@campus.edu', dept: 'Graphic Design' },
    { id: 4, name: 'Fatima Malik', role: 'Data Analyst', email: 'fatima@campus.edu', dept: 'Data Science' },
    { id: 5, name: 'Omar Sheikh', role: 'DevOps Eng.', email: 'omar@campus.edu', dept: 'Network Admin' },
    { id: 6, name: 'Zara Butt', role: 'QA Engineer', email: 'zara@campus.edu', dept: 'Software Eng.' },
];

// ---- Promise-based fetchUsers function ----
function fetchUsers(simulateFailure) {
    return new Promise(function (resolve, reject) {

        // Boolean flag controls success or failure
        const success = !simulateFailure;

        setTimeout(function () {
            if (success) {
                resolve(mockUsers);        // Resolve with user array
            } else {
                reject('Network Error: Failed to load users from server.');  // Reject with message
            }
        }, DELAY_MS);
    });
}

// ---- UI helpers ----
const timeline = document.getElementById('timeline');
const outputArea = document.getElementById('output-area');
const fetchBtn = document.getElementById('fetch-btn');
const btnText = document.getElementById('btn-text');
const failToggle = document.getElementById('fail-toggle');

function addTimelineStep(dotClass, icon, title, desc, showConnector = true) {
    const step = document.createElement('div');
    step.style.animationDelay = '0s';

    if (showConnector && timeline.children.length > 0) {
        const connector = document.createElement('div');
        connector.className = 'timeline-connector';
        timeline.appendChild(connector);
    }

    step.className = 'timeline-step';
    step.innerHTML = `
    <div class="timeline-dot ${dotClass}">${icon}</div>
    <div class="step-content">
      <div class="step-title">${title}</div>
      <div class="step-desc">${desc}</div>
    </div>
  `;
    timeline.appendChild(step);
}

function renderUsers(users) {
    const cardsHTML = users.map((user, i) => {
        const initials = user.name.split(' ').map(w => w[0]).join('').toUpperCase();
        return `
      <div class="user-card" style="animation-delay: ${i * 0.08}s;">
        <div class="user-avatar">${initials}</div>
        <div class="user-name">${user.name}</div>
        <div class="user-role">${user.role}</div>
        <div class="user-email">✉ ${user.email}</div>
        <div class="user-dept">🏛 ${user.dept}</div>
      </div>
    `;
    }).join('');

    outputArea.innerHTML = `
    <div class="output-panel">
      <div class="output-title">✅ ${users.length} Users Loaded Successfully</div>
      <div class="users-grid">${cardsHTML}</div>
    </div>
  `;
}

function renderError(message) {
    outputArea.innerHTML = `
    <div class="output-panel">
      <div class="error-box">
        <div class="error-icon">❌</div>
        <div class="error-title">Request Failed</div>
        <div class="error-msg">${message}</div>
      </div>
    </div>
  `;
}

// ---- Progress bar during the 3-second wait ----
function startProgress() {
    outputArea.innerHTML = `
    <div class="progress-wrap">
      <div class="progress-label">⏳ Waiting for server response...</div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" id="pbar"></div>
      </div>
      <div class="progress-time" id="ptime">0.0s / 3.0s</div>
    </div>
  `;

    const pbar = document.getElementById('pbar');
    const ptime = document.getElementById('ptime');
    const startTime = Date.now();

    const interval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        const percent = Math.min((elapsed / 3) * 100, 100);
        if (pbar) pbar.style.width = percent + '%';
        if (ptime) ptime.textContent = `${elapsed.toFixed(1)}s / 3.0s`;
        if (elapsed >= 3) clearInterval(interval);
    }, 80);

    return interval;
}

// ---- Main button handler ----
fetchBtn.addEventListener('click', () => {
    const simulateFailure = failToggle.checked;

    // Reset UI
    timeline.innerHTML = '';
    outputArea.innerHTML = '';
    fetchBtn.disabled = true;
    btnText.innerHTML = '<span class="spinner"></span>&nbsp; Fetching...';

    // Step 1: Initiated
    addTimelineStep('dot-info', '🚀', 'Request Initiated', 'fetchUsers() called — Promise created', false);

    // Step 2: Waiting
    setTimeout(() => {
        addTimelineStep('dot-loading', '<span class="spinner"></span>', 'Awaiting Response', `setTimeout delay: ${DELAY_MS / 1000}s simulating server latency`);
    }, 200);

    const progressInterval = startProgress();

    // Invoke fetchUsers and handle promise with .then() and .catch()
    fetchUsers(simulateFailure)
        .then(function (users) {
            clearInterval(progressInterval);

            // Step 3: Success
            addTimelineStep('dot-success', '✅', 'Promise Resolved', `.then() called — received ${users.length} user objects`);

            renderUsers(users);
        })
        .catch(function (error) {
            clearInterval(progressInterval);

            // Step 3: Error
            addTimelineStep('dot-error', '❌', 'Promise Rejected', `.catch() called — ${error}`);

            renderError(error);
        })
        .finally(function () {
            // Re-enable button
            fetchBtn.disabled = false;
            btnText.innerHTML = '⚡ Fetch Users';
        });
});
