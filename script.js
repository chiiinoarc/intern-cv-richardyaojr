// Welcome alert
alert("Welcome to my personal portfolio!");

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Show / Hide Skills Section
const toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
const skillsSection = document.getElementById("skills");

toggleSkillsBtn.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});
