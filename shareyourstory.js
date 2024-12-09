document.addEventListener('DOMContentLoaded', () => {
    const storyForm = document.getElementById('story-form');

    // Handle form submission
    storyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const storyType = document.getElementById('story-type').value;
        const storyTitle = document.getElementById('story-title').value;
        const storyContent = document.getElementById('story-content').value;

        if (storyType && storyTitle && storyContent) {
            alert(`Your story has been submitted successfully!\n\nType: ${storyType}\nTitle: ${storyTitle}`);
            storyForm.reset();
        } else {
            alert('Please fill out all the fields.');
        }
    });
});
