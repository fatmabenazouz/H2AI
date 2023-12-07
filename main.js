// script.js


document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.getElementById("starContainer");

    // Number of stars
    const totalStars = 5;

    // Initialize the star rating
    let currentRating = 0;

    // Generate star icons
    for (let i = 1; i <= totalStars; i++) {
        const star = document.createElement("i");
        star.classList.add("fas", "fa-star");
        star.dataset.ratingValue = i;

        // Add a click event listener to each star
        star.addEventListener("click", function () {
            currentRating = parseInt(star.dataset.ratingValue);
            updateStarRating();
        });

        starContainer.appendChild(star);
    }

    // Function to update star rating based on user interaction
    function updateStarRating() {
        // Reset all stars
        starContainer.querySelectorAll("i").forEach(star => {
            star.classList.remove("fas", "far");
            star.classList.add("far");
        });

        // Fill selected stars
        for (let i = 1; i <= currentRating; i++) {
            starContainer.querySelector(`[data-rating-value="${i}"]`).classList.add("fas");
        }
    }
});


