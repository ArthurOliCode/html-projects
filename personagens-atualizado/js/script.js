const cards = document.querySelectorAll('.character-card');
const overlay = document.getElementById('characterOverlay');
const overlayImg = document.getElementById('overlayImg');
const overlayName = document.getElementById('overlayName');
const overlayDescription = document.getElementById('overlayDescription');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const imgElement = card.querySelector('img');
    const name = imgElement.alt;
    const imgSrc = imgElement.src;

    overlayImg.src = imgSrc;
    overlayName.textContent = name;
    overlayDescription.textContent = `teste ${name} .`; 

    overlay.style.display = 'flex';
  });
});

function closeOverlay() {
  overlay.style.display = 'none';
}

