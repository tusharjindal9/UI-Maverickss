document.addEventListener("DOMContentLoaded", function() {
    const words = ["HERITAGE", "CRAFT", "LEGACY", "CULTURE"]; // Array of words to type
    const typedWordElement = document.getElementById("typed-word");

    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            typedWordElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 300); // Typing speed
        } else {
            setTimeout(deleteWord, 1000); // Pause before deleting
        }
    }

    function deleteWord() {
        if (charIndex > 0) {
            typedWordElement.textContent = typedWordElement.textContent.slice(0, -1);
            charIndex--;
            setTimeout(deleteWord, 150); // Deleting speed
        } else {
            // Move to the next word
            wordIndex = (wordIndex + 1) % words.length; // Loop back to the start
            setTimeout(type, 500); // Pause before starting to type the next word
        }
    }

    type(); // Start typing
});



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.cta-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const source = document.getElementById('select-where').value;

        // Create an object to store the data
        const userData = {
            fullName: fullName,
            email: email,
            source: source
        };

        // Store the data in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        // Optionally, you can provide feedback to the user or redirect them
        alert('Thank you for signing up! Your information has been saved.');
        form.reset(); // Reset the form
    });
});
const galleryImages = document.querySelector('.gallery-images');

galleryImages.addEventListener('mouseenter', () => {
    galleryImages.style.animationPlayState = 'paused'; // Pause scrolling on hover
});

galleryImages.addEventListener('mouseleave', () => {
    galleryImages.style.animationPlayState = 'running'; // Resume scrolling
});
