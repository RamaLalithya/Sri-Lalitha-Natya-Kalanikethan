// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Registration form validation
    document.getElementById("registrationForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        
        if (name && email && phone) {
            document.getElementById("successMessage").style.display = "block";
            setTimeout(() => {
                document.getElementById("successMessage").style.display = "none";
                document.getElementById("registrationForm").reset();
            }, 3000);
        } else {
            alert("Please fill in all fields correctly.");
        }
    });
 // Define faculty details globally
const faculties = {
    babu: "Babu Balaji Duttaluri",
    kamala: "Kamala Balaji Duttaluri",
    rama: "Rama Lalithya Duttaluri",
    harsharee: "Harsharee Duttaluri"
};

// Function to update faculty details
function showFaculty(facultyKey) {
    if (faculties[facultyKey]) {
        document.getElementById("facultyImage").src = `${facultyKey}.jpg`; // Assuming images are named as "babu.jpg", "kamala.jpg", etc.
        document.getElementById("facultyName").innerText = faculties[facultyKey];

        // Update the description manually
        let description = "";
        switch (facultyKey) {
            case "babu":
                description = "Guru Duttaluri Babu Balaji is a renowned classical dance exponent, known for his contributions to Kuchipudi and Bharatanatyam.";
                break;
            case "kamala":
                description = "Kamala Balaji Duttaluri is an esteemed dance teacher with a passion for nurturing young artists in classical and folk dance.";
                break;
            case "rama":
                description = "Rama Lalithya Duttaluri is a dedicated classical dancer and instructor, inspiring students with her expertise in Kuchipudi.";
                break;
            case "harsharee":
                description = "Harsharee Duttaluri is a skilled dancer and choreographer, bringing creativity and innovation to classical dance.";
                break;
            default:
                description = "No description available.";
        }
        document.getElementById("facultyDescription").innerText = description;
    } else {
        console.error("Faculty not found:", facultyKey);
    }
}

        // Attach event listeners dynamically
        document.querySelectorAll(".faculty-list li").forEach(item => {
            item.addEventListener("click", function () {
                const facultyKey = this.getAttribute("onclick").match(/'([^']+)'/)[1];
                showFaculty(facultyKey);
            });
        });
    });
    

    // Interactive hover effect for gallery images
    document.querySelectorAll(".image-container img").forEach(img => {
        img.addEventListener("mouseover", function() {
            this.style.border = "3px solid #ff9a9e";
        });
        img.addEventListener("mouseout", function() {
            this.style.border = "none";
        });
    });
});
