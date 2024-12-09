document.addEventListener('DOMContentLoaded', () => {
    // Login Form Functionality
    const loginForm = document.getElementById('login-form');
    const signOutButton = document.getElementById('sign-out');
    const googleLoginButton = document.getElementById('google-login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert(`Welcome, ${username}!`);
            signOutButton.classList.remove('hidden');
        } else {
            alert('Please enter valid credentials.');
        }
    });

    googleLoginButton.addEventListener('click', () => {
        alert('Google Login not yet implemented!');
    });

    signOutButton.addEventListener('click', () => {
        alert('You have successfully signed out.');
        signOutButton.classList.add('hidden');
    });

    // Story Sharing Functionality
    const shareStoryBtn = document.getElementById('share-story-btn');
    const exploreStoriesBtn = document.getElementById('explore-stories-btn'); // Unused but kept for future functionality
    const submitStorySection = document.getElementById('submit-story');
    const storyForm = document.getElementById('story-form');
    const storyList = document.getElementById('story-list');

    shareStoryBtn.addEventListener('click', () => {
        submitStorySection.classList.toggle('hidden');
    });

    storyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const storyType = document.getElementById('story-type').value;
        const storyTitle = document.getElementById('story-title').value;
        const storyContent = document.getElementById('story-content').value;

        const storyElement = document.createElement('div');
        storyElement.innerHTML = `
            <h3>${storyTitle} (${storyType})</h3>
            <p>${storyContent}</p>
        `;
        storyList.appendChild(storyElement);
        storyForm.reset();
        submitStorySection.classList.add('hidden');
    });
});
