let slideIndex = 0; // Starting index for slides
const slides = document.getElementsByClassName("carousel-slide");
const totalSlides = slides.length; // Total number of slides

// Function to show slides automatically every 6 seconds
function showSlides() {
    // Hide all slides initially
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    // Increment the slide index
    slideIndex++;
    
    // If slideIndex exceeds totalSlides, reset it to 1
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Call the function again after 6 seconds
    setTimeout(showSlides, 6000); // Change to adjust timing
}

// Function to move the slides manually using buttons
function moveSlide(n) {
    // Increment or decrement slide index based on the button clicked
    slideIndex += n;

    // If slideIndex exceeds the number of slides, loop back to the first
    if (slideIndex > totalSlides) {
        slideIndex = 1;
    }

    // If slideIndex is less than 1, loop back to the last slide
    if (slideIndex < 1) {
        slideIndex = totalSlides;
    }

    updateSlides(); // Call function to update the visible slide
}

// Function to update the currently visible slide
function updateSlides() {
    // Hide all slides initially
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Start the automatic slideshow
showSlides();

