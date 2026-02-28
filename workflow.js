// Tab switching functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const workflowSteps = document.querySelectorAll('.workflow-step');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        tabBtns.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked tab
        btn.classList.add('active');
        
        // Get the tab id
        const tabId = btn.getAttribute('data-tab');
        
        // Hide all workflow steps
        workflowSteps.forEach(step => step.classList.remove('active'));
        
        // Show the selected workflow step
        document.getElementById(tabId).classList.add('active');
    });
});

// Add hover effects for cards
const cards = document.querySelectorAll('.workflow-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});