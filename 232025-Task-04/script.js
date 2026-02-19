/* ============================================================
   Home Task 4: Color Box Generator – script.js
   Muhammad Shamoil – 232025
   ============================================================

   Requirements covered:
   ✔ 3 separate input fields for colors
   ✔ Individual functions handle each color input
   ✔ DOM manipulation (createElement, appendChild) to display boxes
   ✔ Clear all boxes button
   BONUS:
   ✔ Display window width/height & browser info via BOM objects
*/

// ─── Color Input Variables (individual, per lab requirement) ─────────────────
const colorInput1 = document.getElementById('colorInput1');
const colorInput2 = document.getElementById('colorInput2');
const colorInput3 = document.getElementById('colorInput3');

const preview1 = document.getElementById('preview-1');
const preview2 = document.getElementById('preview-2');
const preview3 = document.getElementById('preview-3');

const boxesSection = document.getElementById('boxes-section');
const emptyHint    = document.getElementById('empty-hint');

// ─── Live Color Preview ───────────────────────────────────────────────────────
// Update the small swatch next to each field as the user types
function updatePreview(inputEl, previewEl) {
    const color = inputEl.value.trim();
    // Use a temporary canvas to test if color is valid
    const testDiv = document.createElement('div');
    testDiv.style.color = '';
    testDiv.style.color = color;
    if (testDiv.style.color !== '' || CSS.supports('color', color)) {
        previewEl.style.background = color;
    } else {
        previewEl.style.background = 'rgba(255,255,255,0.08)';
    }
}

colorInput1.addEventListener('input', () => updatePreview(colorInput1, preview1));
colorInput2.addEventListener('input', () => updatePreview(colorInput2, preview2));
colorInput3.addEventListener('input', () => updatePreview(colorInput3, preview3));

// ─── Add Color Box Functions ──────────────────────────────────────────────────
// Separate function per input (per lab requirement: "functions to handle each color input")

/**
 * Handles adding a color box for color input 1.
 */
function handleColor1() {
    const color = colorInput1.value.trim();
    if (!color) { shakeInput(colorInput1); return; }
    if (!isValidColor(color)) { invalidFlash(colorInput1); return; }
    appendColorBox(color, 'Input 1');
    colorInput1.value = '';
    preview1.style.background = 'rgba(255,255,255,0.08)';
}

/**
 * Handles adding a color box for color input 2.
 */
function handleColor2() {
    const color = colorInput2.value.trim();
    if (!color) { shakeInput(colorInput2); return; }
    if (!isValidColor(color)) { invalidFlash(colorInput2); return; }
    appendColorBox(color, 'Input 2');
    colorInput2.value = '';
    preview2.style.background = 'rgba(255,255,255,0.08)';
}

/**
 * Handles adding a color box for color input 3.
 */
function handleColor3() {
    const color = colorInput3.value.trim();
    if (!color) { shakeInput(colorInput3); return; }
    if (!isValidColor(color)) { invalidFlash(colorInput3); return; }
    appendColorBox(color, 'Input 3');
    colorInput3.value = '';
    preview3.style.background = 'rgba(255,255,255,0.08)';
}

/**
 * Dispatcher called by the inline onclick="addColorBox(n)" in HTML.
 * Routes to the correct input handler function.
 */
function addColorBox(inputNumber) {
    if (inputNumber === 1) handleColor1();
    else if (inputNumber === 2) handleColor2();
    else if (inputNumber === 3) handleColor3();
}

// ─── DOM Manipulation ─────────────────────────────────────────────────────────

/**
 * Creates a color box <div> and appends it to the boxes section using DOM manipulation.
 * @param {string} color - CSS color value
 * @param {string} source - Label indicating which input it came from
 */
function appendColorBox(color, source) {
    // Hide the empty hint
    emptyHint.style.display = 'none';

    // Create box element
    const box = document.createElement('div');
    box.classList.add('color-box');
    box.style.backgroundColor = color;

    // Source badge
    const sourceBadge = document.createElement('span');
    sourceBadge.classList.add('box-source');
    sourceBadge.innerText = source;

    // Color label
    const label = document.createElement('span');
    label.classList.add('box-label');
    label.innerText = color;

    // Assemble and append
    box.appendChild(sourceBadge);
    box.appendChild(label);
    boxesSection.appendChild(box);
}

/**
 * Removes all color boxes from the DOM.
 */
function clearAllBoxes() {
    // Select all box elements and remove them
    const boxes = boxesSection.querySelectorAll('.color-box');
    boxes.forEach(box => box.remove());

    // Restore the empty hint
    emptyHint.style.display = '';
}

// ─── Color Validation ─────────────────────────────────────────────────────────

/**
 * Validates whether a string is a recognized CSS color value.
 * Uses CSS.supports() API for robust validation.
 */
function isValidColor(color) {
    return CSS.supports('color', color);
}

// ─── UI Feedback ──────────────────────────────────────────────────────────────

function shakeInput(input) {
    input.style.animation = 'none';
    input.style.borderColor = '#f59e0b';
    setTimeout(() => { input.style.borderColor = ''; }, 600);
}

function invalidFlash(input) {
    input.style.borderColor = '#f87171';
    input.style.boxShadow = '0 0 0 3px rgba(248,113,113,0.25)';
    setTimeout(() => { input.style.borderColor = ''; input.style.boxShadow = ''; }, 700);
}

// ─── BONUS: BOM – Browser & Window Info ──────────────────────────────────────

/**
 * Reads BOM (Browser Object Model) properties from the window, navigator,
 * and screen objects and displays them in the info panel.
 */
function loadBOMInfo() {
    const bomGrid = document.getElementById('bom-grid');

    const bomData = [
        { label: 'Window Width',    value: `${window.innerWidth}px` },
        { label: 'Window Height',   value: `${window.innerHeight}px` },
        { label: 'Screen Width',    value: `${screen.width}px` },
        { label: 'Screen Height',   value: `${screen.height}px` },
        { label: 'Browser',         value: navigator.appName },
        { label: 'Platform',        value: navigator.platform },
        { label: 'Language',        value: navigator.language },
        { label: 'Page URL',        value: location.href.length > 40 ? location.href.substring(0, 40) + '…' : location.href },
    ];

    // Use DOM manipulation to render each BOM item
    for (let i = 0; i < bomData.length; i++) {
        const item = document.createElement('div');
        item.classList.add('bom-item');
        item.innerHTML = `<span>${bomData[i].label}</span><strong>${bomData[i].value}</strong>`;
        bomGrid.appendChild(item);
    }

    // Update window dimensions on resize using BOM event
    window.addEventListener('resize', () => {
        const widthEl  = bomGrid.querySelector('.bom-item:nth-child(1) strong');
        const heightEl = bomGrid.querySelector('.bom-item:nth-child(2) strong');
        if (widthEl)  widthEl.innerText  = `${window.innerWidth}px`;
        if (heightEl) heightEl.innerText = `${window.innerHeight}px`;
    });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
loadBOMInfo();
