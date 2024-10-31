document.addEventListener('DOMContentLoaded', () => {
    // Display existing businesses from local storage
    displayBusinessListings();

    // Event listener for search functionality
    document.getElementById("search-input").addEventListener("input", searchBusinesses);
});

// Function to save a new business listing
document.getElementById("business-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get business details from form fields
    const business = {
        name: document.getElementById("business-name").value,
        description: document.getElementById("business-description").value,
        phone: document.getElementById("business-phone").value,
        address: document.getElementById("business-address").value,
        category: document.getElementById("business-category").value,
        image: document.getElementById("business-image").files[0]
            ? URL.createObjectURL(document.getElementById("business-image").files[0])
            : ""
    };

    // Retrieve, update, and save businesses in localStorage
    const businesses = JSON.parse(localStorage.getItem("businesses")) || [];
    businesses.push(business);
    localStorage.setItem("businesses", JSON.stringify(businesses));

    // Reset form and reload listings
    event.target.reset();
    displayBusinessListings();
});

// Function to display business listings
function displayBusinessListings() {
    const listingsContainer = document.getElementById('business-listings');
    listingsContainer.innerHTML = ''; // Clear existing content

    const businesses = JSON.parse(localStorage.getItem("businesses")) || [];
    if (businesses.length > 0) {
        businesses.forEach((business) => {
            const businessItem = document.createElement("div");
            businessItem.classList.add("business-item");
            businessItem.innerHTML = `
                <h4>${business.name}</h4>
                <img src="${business.image}" alt="${business.name}" style="width:100px; height:auto;">
                <p><strong>Description:</strong> ${business.description}</p>
                <p><strong>Phone:</strong> ${business.phone}</p>
                <p><strong>Address:</strong> ${business.address}</p>
                <p><strong>Category:</strong> ${business.category}</p>
            `;
            listingsContainer.appendChild(businessItem);
        });
    } else {
        listingsContainer.innerHTML = '<p>No businesses added yet.</p>';
    }
}

// Function to search businesses by name
function searchBusinesses() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const businesses = JSON.parse(localStorage.getItem("businesses")) || [];

    const filteredBusinesses = businesses.filter(business =>
        business.name.toLowerCase().includes(searchTerm)
    );

    // Display filtered results
    const listingsContainer = document.getElementById("business-listings");
    listingsContainer.innerHTML = ""; // Clear existing content
    filteredBusinesses.forEach(business => {
        const businessItem = document.createElement("div");
        businessItem.classList.add("business-item");
        businessItem.innerHTML = `
            <h4>${business.name}</h4>
            <img src="${business.image}" alt="${business.name}" style="width:100px; height:auto;">
            <p><strong>Description:</strong> ${business.description}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Category:</strong> ${business.category}</p>
        `;
        listingsContainer.appendChild(businessItem);
    });
}