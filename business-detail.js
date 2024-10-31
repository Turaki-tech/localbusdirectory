document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const businessIndex = urlParams.get('index');
    const businesses = JSON.parse(localStorage.getItem('businesses')) || [];
    
    if (businesses[businessIndex]) {
        const business = businesses[businessIndex];
        document.getElementById('business-detail').innerHTML = `
            <h2>${business.name}</h2>
            <p><strong>Category:</strong> ${business.category}</p>
            <p><strong>Description:</strong> ${business.description}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <a href="${business.mapLink}" target="_blank">View on Map</a>
        `;
    }
});

// Check login status on page load
window.onload = function() {
    loadUserData();
    displayBusinessListings();
    updateProfileIcon();
};

// Function to set login status
function setLoginStatus(isLoggedIn) {
    localStorage.setItem("isLoggedIn", isLoggedIn);
}

// Function to update the login button to user icon if logged in
function updateProfileIcon() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const loginButton = document.querySelector('.login-button');
    
    if (isLoggedIn === "true" && loginButton) {
        // Change login button to user icon
        loginButton.innerHTML = '<img src="user-icon.png" alt="User Icon">';
        
        // Add event listener to navigate to profile
        loginButton.addEventListener('click', () => window.location.href = 'Userprofile.html');
    }
}

// Simulate user login (This would be replaced by actual registration/login code)
function simulateLogin() {
    // Example function to simulate a login (replace with real login code)
    const userName = "John Doe";
    const userEmail = "johndoe@example.com";
    saveUserData(userName, userEmail);
    setLoginStatus("true");
    updateProfileIcon();
}

// Uncomment this line to simulate a login for testing purposes
// simulateLogin();