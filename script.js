function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    /*body.classList.toggle("dark-mode", !body.classList.contains("light-mode"));*/

}

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        const readMoreBtn = card.querySelector('.read-more-btn');
        const hideDescriptionBtn = card.querySelector('.hide-description-btn');
        const fullDescription = card.querySelector('.full-description');

        readMoreBtn.addEventListener('click', () => {
            // Hide descriptions of all cards
            projectCards.forEach(otherCard => {
                const otherMoreBtn = otherCard.querySelector('.read-more-btn');
                const otherHideBtn = otherCard.querySelector('.hide-description-btn');
                const otherFullDescription = otherCard.querySelector('.full-description');
                otherMoreBtn.style.display = 'block'
                otherHideBtn.style.display = 'none';
                otherFullDescription.style.display = 'none';
            });

            // Show description of the clicked card
            fullDescription.style.display = 'block';
            readMoreBtn.style.display = 'none';
            hideDescriptionBtn.style.display = 'block';
        });

        hideDescriptionBtn.addEventListener('click', () => {
            fullDescription.style.display = 'none';
            readMoreBtn.style.display = 'block';
            hideDescriptionBtn.style.display = 'none';
        });
    });
});