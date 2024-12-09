document.addEventListener('DOMContentLoaded', () => {
    const storyCategories = document.querySelectorAll('.category-btn');
    const storyList = document.getElementById('story-list');

    const stories = [
        {
            category: 'Inspiration',
            title: 'Overcoming Adversity',
            content: 'This is a story about a young woman who faced many challenges but persevered to achieve her dreams.'
        },
        {
            category: 'Success',
            title: 'The Journey to Success',
            content: 'A story of a man who started from scratch and built a successful business through hard work and determination.'
        },
        {
            category: 'Failure',
            title: 'Learning from Mistakes',
            content: 'This story tells about a series of failures that eventually led to a breakthrough in a career.'
        },
        {
            category: 'Motivation',
            title: 'Never Give Up',
            content: 'An inspiring tale about a student who overcame all odds to complete their education and find their passion.'
        },
        {
            category: 'Love',
            title: 'Finding True Love',
            content: 'A beautiful story of love that blossomed amidst challenges and hardships.'
        },
        {
            category: 'Inspiration',
            title: 'Breaking Free',
            content: 'An inspiring journey of a person breaking free from societal norms to find their true calling.'
        },
        {
            category: 'Success',
            title: 'From Dreams to Reality',
            content: 'A story about a person who turned their passion into a thriving career and never looked back.'
        },
        {
            category: 'Failure',
            title: 'Learning from Loss',
            content: 'A deeply moving story about overcoming personal loss and finding strength in adversity.'
        },
        {
            category: 'Motivation',
            title: 'Pushing Through',
            content: 'A tale of persistence and the power of never giving up on your dreams.'
        },
        {
            category: 'Love',
            title: 'Love Against All Odds',
            content: 'A romantic story of two people who found love despite the challenges they faced.'
        }
    ];

    // Function to display stories based on selected category
    function displayStories(category) {
        storyList.innerHTML = ''; // Clear previous stories
        stories
            .filter(story => story.category === category)
            .forEach(story => {
                const storyElement = document.createElement('div');
                storyElement.classList.add('story-item');
                storyElement.innerHTML = `
                    <h3>${story.title}</h3>
                    <p>${story.content}</p>
                `;
                storyList.appendChild(storyElement);
            });
    }

    // Event listeners for category buttons
    storyCategories.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            displayStories(category);
        });
    });

    // Display all stories by default
    displayStories('Inspiration');
});
