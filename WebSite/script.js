//MyProfile, Resumes, Portfolio and About functio are for changing pages.
function Home() {
    window.location.href = "HomePage.html";
}

function Resumes() {
    window.location.href = "WebDevResumePage.html";
}

function Portfolio() {
    window.location.href = "WebPageSamplePortfolio.html";
}

function About() {
    window.location.href = "About.html";
}

function WebDevelopment() {
    window.location.href = "WebPageSamplePortfolio.html";
}

function AppDevelopment() {
    window.location.href = "AppPageSamplePortfolio.html";
}

function ModelingResume() {
    window.location.href = "3DModels and Animation SamplePortfolio.html";
}


//Typing Animation Function
const element = document.getElementById('apply-typing-animation');
let index = 0;

function typing() {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
    }

    else {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(typing, delay);

