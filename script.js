function searchBusinesses() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let businessItems = document.querySelectorAll('.slider');

    businessItems.forEach(item => {
        let businessName = item.querySelector('h3').textContent.toLowerCase();
        if (businessName.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}



// Expand Event Details
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const eventCard = button.closest('.class-card');
        eventCard.classList.toggle('expanded');
        const eventDetails = eventCard.querySelector('.class-details');
        if (eventCard.classList.contains('expanded')) {
            eventDetails.style.display = 'block';
            button.textContent = 'See Less Info';
        } else {
            eventDetails.style.display = 'none';
            button.textContent = 'See More Info';
        }
    });
});

// Expand Event Details
document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const classCard = button.closest('.class-card');
        classCard.classList.toggle('expanded');
        const classDetails = classCard.querySelector('.class-details');
        if (classCard.classList.contains('expanded')) {
            classDetails.style.display = 'block';
            button.textContent = 'See Less Info';
        } else {
            eventDetails.style.display = 'none';
            button.textContent = 'See More Info';
        }
    });
});



//nav bar

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

//blur

window.addEventListener('scroll', function() {
  var header = document.getElementById('sticky-header');
  if (window.scrollY > 50) { // Trigger blur after scrolling 50px
    header.classList.add('blurred');
  } else {
    header.classList.remove('blurred');
  }
});



//user profile

let favorites = [];
let recentlyViewed = [];

function toggleFavorite(businessName) {
  const index = favorites.indexOf(businessName);
  
  if (index > -1) {
    favorites.splice(index, 1);
    alert(`${businessName} removed from favorites`);
  } else {
    favorites.push(businessName);
    alert(`${businessName} added to favorites`);
  }

  updateFavoritesList();
}

function updateFavoritesList() {
  const favoritesList = document.getElementById('favorites-list');
  favoritesList.innerHTML = '';

  favorites.forEach((favorite) => {
    const li = document.createElement('li');
    li.textContent = favorite;
    favoritesList.appendChild(li);
  });
}

function viewBusiness(businessName) {
  if (!recentlyViewed.includes(businessName)) {
    recentlyViewed.push(businessName);
    if (recentlyViewed.length > 5) recentlyViewed.shift();
    updateRecentlyViewed();
  }
}

function updateRecentlyViewed() {
  const recentlyViewedList = document.getElementById('recently-viewed');
  recentlyViewedList.innerHTML = '';

  recentlyViewed.forEach((business) => {
    const li = document.createElement('li');
    li.textContent = business;
    recentlyViewedList.appendChild(li);
  });
}

function uploadProfilePic(event) {
  const profilePic = document.getElementById('profile-pic');
  profilePic.src = URL.createObjectURL(event.target.files[0]);
}

function saveProfile() {
  const userName = document.getElementById('user-name').value;
  const userEmail = document.getElementById('user-email').value;
  alert(`Profile updated for ${userName} (${userEmail})`);
}

function toggleNotifications() {
  alert("Notifications settings updated");
}

function changePassword() {
  alert("Password change functionality coming soon!");
}

// Initial call to display favorites and recently viewed lists if they have items
updateFavoritesList();
updateRecentlyViewed();


///sopport package

function toggleSupportBox() {
  const supportBox = document.getElementById('supportBox');
  supportBox.classList.toggle('open');
}

function sendSupportMessage() {
  const message = document.getElementById('supportMessage').value.trim();
  if (message) {
    alert("Your message has been sent! We’ll get back to you soon.");
    document.getElementById('supportMessage').value = ""; // Clear the textarea
  } else {
    alert("Please type a message before sending.");
  }
}


//submit buttom



const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_form', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // Here, you would typically handle user authentication
    console.log(`Email: ${email}, Password: ${password}`);

    // Redirect to the user profile page or send a success response
    res.redirect('User profile.html'); // Redirecting after successful submission
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
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