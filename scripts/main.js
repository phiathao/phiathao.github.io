let resume = document.getElementById("resume-id");
let cover = document.getElementById('cover-id');
let portfolio = document.getElementById('portfolio-id');
let contact = document.getElementById('contact-id');
let navResume = document.getElementById('nav-resume');
let navCover = document.getElementById('nav-cover');
let navPortfolio = document.getElementById('nav-portfolio');
let navContact = document.getElementById('nav-contact');

navResume.onclick = function hideAllButResume(){
    navPortfolio.classList.remove("active");
    navContact.classList.remove("active");
    navResume.classList.add("active");
    cover.hidden = true;
    portfolio.hidden = true;
    contact.hidden = true;
    resume.hidden = false;
}

navCover.onclick = function hideAllButCover(){
    resume.hidden = true;
    portfolio.hidden = true;
    contact.hidden = true;
    cover.hidden = false;
    navResume.classList.remove("active");
    navPortfolio.classList.remove("active");
    navContact.classList.remove("active");
}


navPortfolio.onclick = function hideAllButResume(){
    resume.hidden = true;
    cover.hidden = true;
    contact.hidden = true;
    portfolio.hidden = false;
    navResume.classList.remove("active");
    navContact.classList.remove("active");
    navPortfolio.classList.add("active");

}

navContact.onclick = function hideAllButContact(){
    resume.hidden = true;
    portfolio.hidden = true;
    cover.hidden = true;
    contact.hidden = false;
    navResume.classList.remove("active");
    navPortfolio.classList.remove("active");
    navContact.classList.add("active");
}