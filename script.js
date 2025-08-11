
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
