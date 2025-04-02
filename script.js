document.addEventListener("DOMContentLoaded", function () {

    // 🔍 Search Bar Functionality
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("input", function () {
        let query = searchBar.value.toLowerCase();
        let properties = document.querySelectorAll(".property-card");

        properties.forEach(card => {
            let title = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = title.includes(query) ? "block" : "none";
        });
    });

    // 📝 Registration Form Validation
    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let username = this.querySelector("input[type='text']").value.trim();
        let email = this.querySelector("input[type='email']").value.trim();
        let password = this.querySelector("input[type='password']").value.trim();

        if (username === "" || email === "" || password === "") {
            alert("Please fill out all fields!");
        } else {
            alert("Registration Successful!");
            this.reset();
        }
    });

    // 🔐 Login Form Validation
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let username = this.querySelector("input[type='text']").value.trim();
        let password = this.querySelector("input[type='password']").value.trim();

        if (username === "" || password === "") {
            alert("Username and Password are required!");
        } else {
            alert("Login Successful!");
            this.reset();
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        fetch("http://localhost:8080/api/properties")
            .then(response => response.json())
            .then(properties => {
                const container = document.getElementById("property-list");
                container.innerHTML = ""; // Clear existing content
                properties.forEach(property => {
                    const div = document.createElement("div");
                    div.classList.add("property");
                    div.innerHTML = `
                        <h3>${property.name}</h3>
                        <p>${property.description}</p>
                        <p><strong>Price:</strong> ${property.price}</p>
                    `;
                    container.appendChild(div);
                });
            })
            .catch(error => console.error("Error loading properties:", error));
    });
    
    // 🎯 Intent Selection
    document.getElementById("submitIntent").addEventListener("click", function () {
        let selectedIntent = document.querySelector("input[name='intent']:checked");
        if (selectedIntent) {
            alert(`You selected: ${selectedIntent.value}`);
        } else {
            alert("Please select an intent!");
        }
    });

    // ⭐ Rating System
    let stars = document.querySelectorAll(".star");
    let ratingMessage = document.getElementById("ratingMessage");
    let ratingValue = 0;

    stars.forEach(star => {
        star.addEventListener("click", function () {
            ratingValue = this.getAttribute("data-value");
            stars.forEach(s => s.style.color = s.getAttribute("data-value") <= ratingValue ? "gold" : "gray");
            ratingMessage.textContent = `You rated ${ratingValue} stars. Thank you!`;
        });
    });

    document.getElementById("submitRating").addEventListener("click", function () {
        if (ratingValue > 0) {
            alert(`You rated ${ratingValue} stars!`);
        } else {
            alert("Please select a rating!");
        }
    });

    // 💬 Comment Submission
    document.getElementById("submitComment").addEventListener("click", function () {
        let comment = document.getElementById("commentInput").value.trim();
        let commentMessage = document.getElementById("commentMessage");

        if (comment === "") {
            commentMessage.textContent = "Please enter a comment!";
            commentMessage.style.color = "red";
        } else {
            commentMessage.textContent = "Comment Submitted!";
            commentMessage.style.color = "green";
            document.getElementById("commentInput").value = "";
        }
    });

    
});
