// TOGGLE:
const miniBarMenu = document.querySelector("main>div>section:last-child");
const buttonClose = document.getElementsByClassName("btnClose");
const buttonMax = document.getElementsByClassName("btnMaximize");
const buttonMin = document.getElementsByClassName("btnMinimize");
const buttonBar = document.getElementsByClassName("#myShell>div>div:first-child>ul:first-child>li:last-child");
const buttonOpacity = document.getElementsByClassName("btnCode");
const miniButtonMax = document.getElementsByClassName("miniBtnMaximize");


function myClose() {
    var myInfoClient = document.querySelector("#myInfoClient");

    myInfoClient.setAttribute('class', 'myDisplayNone');
    myReadMe.setAttribute('class', 'myDisplayNone');
    myShell.setAttribute('class', 'myDisplayNone'); 
    myContentClock.style.display = "flex";
    miniBarMenu.style.display = "none";
}

function myMin() {
    var myInfoClient = document.querySelector("#myInfoClient");
    var myMiniBar = document.querySelector("main>div>section:last-child");

    myMiniBar.style.display = "flex";
    myInfoClient.setAttribute('class', 'myDisplayNone');
    myReadMe.setAttribute('class', 'myDisplayNone');
    myShell.setAttribute('class', 'myDisplayNone');
}

function myMax() {
    var myInfoClient = document.querySelector("#myInfoClient");
    var myMiniBar = document.querySelector("main>div>section:last-child");
    var myShell = document.querySelector("#myShell");

    myMiniBar.style.display = "none";
    myInfoClient.setAttribute('class', 'myDisplay');
    myReadMe.setAttribute('class', 'myDisplay');
    myShell.setAttribute('class', 'myDisplay');
    myAncre();
}


for (i = 0; i < buttonClose.length; i++) {
    buttonClose[i].addEventListener("click", function() {myClose();});
}

for (i = 0; i < buttonOpacity.length; i++) {
    buttonOpacity[i].addEventListener('click', {
        handleEvent: function (event) {
            var barMenu = document.querySelector("#myShell>div>div:first-child");
            var myShell = document.querySelector("#myShell>div>div:last-child");

            if (barMenu.getAttribute('class') === 'myBgTransparent') {
                barMenu.setAttribute('class', 'myBarBgColor');
                myShell.setAttribute('class', 'myShellBgColor');
            }
            else {
                barMenu.setAttribute('class', 'myBgTransparent');
                myShell.setAttribute('class', 'myBgTransparent'); 
            }}
    });
}

for (i = 0; i < buttonMin.length; i++) {
    buttonMin[i].addEventListener("click", () => { myMin(); }, false);
}

for (i = 0; i < buttonBar.length; i++) {
    buttonBar[i].addEventListener("click", () => { myMin(); }, false);
}

for (i = 0; i < buttonMax.length; i++) {
    buttonMax[i].addEventListener('click', {
        handleEvent: function (event) {

            if (myContentClock.getAttribute('style') === 'display: none;') {
                myContentClock.style.display = "flex";
            }
            else {
                myContentClock.style.display = "none";
            }

        }
    });
}

for (i = 0; i < miniButtonMax.length; i++) {
    miniButtonMax[i].addEventListener('click', {
        handleEvent: function (event) {myMax();}
    });
}