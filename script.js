// --- BEGIN ORIGINAL script.js ---

function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isVisible = content.style.display === 'block';
  content.style.display = isVisible ? 'none' : 'block';
}

window.onclick = function(event) {
  const modal = document.getElementById('philosophyModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// --- END ORIGINAL script.js ---


/* Accordion and modal controls added by assistant */
function setArrow(button, isOpen) {
  const arrow = button.querySelector('.arrow');
  if (!arrow) return;
  arrow.textContent = isOpen ? '▼' : '▶';
}

function toggleAccordion(button) {
  const content = button.nextElementSibling;
  if (!content) return;
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  setArrow(button, !isOpen);
}

function toggleSubAccordion(button) {
  const content = button.nextElementSibling;
  if (!content) return;
  const isOpen = content.style.display === 'block';
  content.style.display = isOpen ? 'none' : 'block';
  setArrow(button, !isOpen);
}

document.addEventListener('DOMContentLoaded', function() {
  // Ensure arrow spans exist on all accordion buttons
  document.querySelectorAll('button').forEach(btn => {
    // only for buttons inside accordion areas
    if (btn.closest('.accordion-item') || btn.classList.contains('sub-accordion-btn')) {
      if (!btn.querySelector('.arrow')) {
        const span = document.createElement('span');
        span.className = 'arrow';
        span.textContent = '▶';
        btn.insertBefore(span, btn.firstChild);
      }
    }
  });

});

/* Flyer modal */
function openFlyerModal() {
  const m = document.getElementById('flyerModal');
  if (m) m.style.display = 'block';
}
function closeFlyerModal() {
  const m = document.getElementById('flyerModal');
  if (m) m.style.display = 'none';
}
window.addEventListener('click', function(event) {
  const modal = document.getElementById('flyerModal');
  if (!modal) return;
  if (event.target === modal) modal.style.display = 'none';
});

function openThankYouModal() {
  const modal = document.getElementById('thankYouModal');
  if (modal) modal.style.display = 'block';
}

function closeThankYouModal() {
  const modal = document.getElementById('thankYouModal');
  if (modal) modal.style.display = 'none';
}

// Optional: close when clicking outside
window.addEventListener('click', function (event) {
  const thankYouModal = document.getElementById('thankYouModal');
  if (thankYouModal && event.target === thankYouModal) {
    thankYouModal.style.display = 'none';
  }
});