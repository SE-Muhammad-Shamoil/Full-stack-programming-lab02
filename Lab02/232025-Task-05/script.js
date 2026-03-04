/* ============================================================
   Home Task 5: Form Validation – script.js
   Muhammad Shamoil – 232025
   ============================================================

   Requirements covered:
   ✔ Individual validation functions for each field
   ✔ Conditional statements in each function (name not empty,
     age 18-60, email contains @, password min 6 chars)
   ✔ DOM manipulation: show/hide error messages, toggle CSS classes
   ✔ confirm() on successful validation (per lab requirement)
   BONUS:
   ✔ alert() for additional interaction after submission
   ✔ prompt() used for additional user interaction
   ✔ Password strength indicator
*/

// ─── DOM Element References ───────────────────────────────────────────────────
const form         = document.getElementById('reg-form');

const fieldName    = document.getElementById('field-name');
const fieldEmail   = document.getElementById('field-email');
const fieldAge     = document.getElementById('field-age');
const fieldPw      = document.getElementById('field-password');

const errorName    = document.getElementById('error-name');
const errorEmail   = document.getElementById('error-email');
const errorAge     = document.getElementById('error-age');
const errorPw      = document.getElementById('error-password');

const groupName    = document.getElementById('group-name');
const groupEmail   = document.getElementById('group-email');
const groupAge     = document.getElementById('group-age');
const groupPw      = document.getElementById('group-password');

const strengthBar  = document.getElementById('strength-bar');
const togglePwBtn  = document.getElementById('toggle-pw');
const successCard  = document.getElementById('success-card');
const successMsg   = document.getElementById('success-message');

// ─── Helper: Display / Clear Error Messages via DOM ──────────────────────────

/**
 * Marks a field group as invalid and shows an error message using DOM manipulation.
 * @param {HTMLElement} group     - The field group div wrapping the input
 * @param {HTMLElement} errorEl   - The <p> element for the error message
 * @param {string}      message   - The error message text
 */
function showError(group, errorEl, message) {
    group.classList.remove('valid');
    group.classList.add('invalid');
    errorEl.innerText = message;  // DOM manipulation: update text content
}

/**
 * Marks a field group as valid and clears the error message.
 */
function clearError(group, errorEl) {
    group.classList.remove('invalid');
    group.classList.add('valid');
    errorEl.innerText = '';
}

// ─── Individual Validation Functions ─────────────────────────────────────────

/**
 * Validates the Full Name field.
 * Condition: Name must not be empty.
 * @returns {boolean}
 */
function validateName() {
    const value = fieldName.value.trim();

    if (value === '') {
        showError(groupName, errorName, '⚠ Name cannot be empty.');
        return false;
    } else if (value.length < 2) {
        showError(groupName, errorName, '⚠ Name must be at least 2 characters.');
        return false;
    } else {
        clearError(groupName, errorName);
        return true;
    }
}

/**
 * Validates the Email field.
 * Condition: Email must contain the '@' character and a dot in the domain.
 * @returns {boolean}
 */
function validateEmail() {
    const value = fieldEmail.value.trim();

    if (value === '') {
        showError(groupEmail, errorEmail, '⚠ Email cannot be empty.');
        return false;
    } else if (!value.includes('@')) {
        showError(groupEmail, errorEmail, '⚠ Email must contain "@".');
        return false;
    } else if (!value.includes('.') || value.indexOf('.') < value.indexOf('@')) {
        showError(groupEmail, errorEmail, '⚠ Enter a valid email domain (e.g. user@domain.com).');
        return false;
    } else {
        clearError(groupEmail, errorEmail);
        return true;
    }
}

/**
 * Validates the Age field.
 * Condition: Age must be a number between 18 and 60 (inclusive).
 * @returns {boolean}
 */
function validateAge() {
    const value = fieldAge.value.trim();
    const age   = Number(value);

    if (value === '') {
        showError(groupAge, errorAge, '⚠ Age cannot be empty.');
        return false;
    } else if (isNaN(age) || !Number.isInteger(age)) {
        showError(groupAge, errorAge, '⚠ Age must be a whole number.');
        return false;
    } else if (age < 18) {
        showError(groupAge, errorAge, '⚠ Age must be at least 18.');
        return false;
    } else if (age > 60) {
        showError(groupAge, errorAge, '⚠ Age must be 60 or below.');
        return false;
    } else {
        clearError(groupAge, errorAge);
        return true;
    }
}

/**
 * Validates the Password field.
 * Condition: Minimum length of 6 characters.
 * Also updates the strength indicator bar.
 * @returns {boolean}
 */
function validatePassword() {
    const value = fieldPw.value;

    if (value === '') {
        showError(groupPw, errorPw, '⚠ Password cannot be empty.');
        updateStrengthBar(0);
        return false;
    } else if (value.length < 6) {
        showError(groupPw, errorPw, `⚠ Password must be at least 6 characters (${value.length}/6).`);
        updateStrengthBar(value.length / 6);
        return false;
    } else {
        clearError(groupPw, errorPw);
        updateStrengthBar(Math.min(value.length / 12, 1));
        return true;
    }
}

// ─── Password Strength Bar ────────────────────────────────────────────────────

/**
 * Updates the strength bar width and color using DOM style manipulation.
 * @param {number} ratio - 0 (empty) to 1 (very strong)
 */
function updateStrengthBar(ratio) {
    const pct = Math.round(ratio * 100);
    strengthBar.style.width = pct + '%';

    // Conditional coloring based on strength level
    if (ratio < 0.4) {
        strengthBar.style.background = '#f87171'; // weak → red
    } else if (ratio < 0.7) {
        strengthBar.style.background = '#fbbf24'; // medium → amber
    } else {
        strengthBar.style.background = '#34d399'; // strong → green
    }
}

// ─── Real-time Validation (on input event) ────────────────────────────────────
// Validate each field live as user types using DOM event listeners

fieldName.addEventListener('input',  validateName);
fieldEmail.addEventListener('input', validateEmail);
fieldAge.addEventListener('input',   validateAge);
fieldPw.addEventListener('input',    validatePassword);

// ─── Password Toggle (Show/Hide) ──────────────────────────────────────────────
togglePwBtn.addEventListener('click', () => {
    if (fieldPw.type === 'password') {
        fieldPw.type = 'text';
        togglePwBtn.innerText = '🙈';
    } else {
        fieldPw.type = 'password';
        togglePwBtn.innerText = '👁';
    }
});

// ─── Form Submission ──────────────────────────────────────────────────────────

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    // Run all individual validation functions using conditional statements
    const nameOk  = validateName();
    const emailOk = validateEmail();
    const ageOk   = validateAge();
    const pwOk    = validatePassword();

    // Only proceed if ALL fields pass validation
    if (nameOk && emailOk && ageOk && pwOk) {

        // BONUS: Use confirm() as required by the lab
        const confirmed = confirm(
            `✅ Please confirm your details:\n\n` +
            `Name:  ${fieldName.value.trim()}\n` +
            `Email: ${fieldEmail.value.trim()}\n` +
            `Age:   ${fieldAge.value}\n\n` +
            `Submit registration?`
        );

        if (confirmed) {
            // Show success using DOM manipulation (hide form, show success card)
            form.classList.add('hidden');

            // DOM: Set the success message text dynamically
            successMsg.innerText =
                `Welcome, ${fieldName.value.trim()}! ` +
                `A confirmation has been sent to ${fieldEmail.value.trim()}.`;

            // DOM: Show the success card
            successCard.classList.remove('hidden');

            // BONUS: Use alert() for additional post-submission interaction
            alert(`🎉 Registration successful!\nHello ${fieldName.value.trim()}, you're all set!`);

            // BONUS: Use prompt() for additional interaction
            const feedback = prompt('How did you find the registration experience? (Optional)');
            if (feedback && feedback.trim() !== '') {
                alert(`Thanks for your feedback: "${feedback.trim()}"`);
            }
        }
    }
});

// ─── Reset Form ───────────────────────────────────────────────────────────────

/**
 * Resets all fields and returns to the form view via DOM manipulation.
 */
function resetForm() {
    form.reset();                               // clear all inputs

    // Remove valid/invalid classes from all field groups
    const groups = [groupName, groupEmail, groupAge, groupPw];
    for (let i = 0; i < groups.length; i++) {
        groups[i].classList.remove('valid', 'invalid');
    }

    // Clear all error messages
    [errorName, errorEmail, errorAge, errorPw].forEach(el => { el.innerText = ''; });

    // Reset strength bar
    updateStrengthBar(0);

    // Show form, hide success card
    form.classList.remove('hidden');
    successCard.classList.add('hidden');
}
