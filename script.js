// script.js
document.getElementById("donorForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Get form data
    const formData = new FormData(e.target);
    const jsonData = {};
    formData.forEach((value, key) => (jsonData[key] = value));
  
    // Send data to Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbwKA4_uQjDh38b6bL6sZ7KjZYLZMZIxVd_3FqyH4oiuHepruAsnb-xrtxhMqKSceTGRjg/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responseMessage").textContent = "Registration successful!";
        e.target.reset(); // Clear the form
      })
      .catch((err) => {
        document.getElementById("responseMessage").textContent = "Error: " + err.message;
      });
  });