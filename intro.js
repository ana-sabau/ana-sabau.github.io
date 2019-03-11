console.info("my first JS file");
var name = "Ana";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info("Name:");
console.info(name);

name = "Sabau";

console.info("Name:");
console.info(name);

console.log("before inside welcome message");
function getWelcomeMsg() {
    console.log("inside welcome message");
    return "Welcome to my site!";
}

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 20) {
        return "green";
    }
    return "red";
}

var welcome = getWelcomeMsg();
console.log("after inside welcome message");


console.info(welcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);

var color = getColor();
summaryElement.style.color = color;

//first example
function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}

function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}

function clickOnSkills() {
    //hideHomePage();
    //showSkillsPage();
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('about-page');
    showPage('skills-page');
}
//first example end

function hidePage(page) {
    var el = document.getElementById(page);
    el.style.display = 'none';
}

function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function HideAllPages() {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}

