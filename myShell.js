// TPGGLE: 
const buttonClose = document.querySelector("#myShell>div>div:first-child>ul:last-child>li:last-child");
const buttonMax = document.querySelector("#myShell>div>div:first-child>ul:last-child>li:nth-child(2)");
const buttonMin = document.querySelector("#myShell>div>div:first-child>ul:last-child>li:first-child");
const buttonBar = document.querySelector("#myShell>div>div:first-child>ul:first-child>li:last-child");
const buttonOpacity = document.querySelector("#myShell>div>div:first-child>ul:first-child>li:first-child");

function myMin() {
    var barMenu = document.querySelector("#myShell>div>div:first-child");
    var element = document.querySelector("#myShell>div>div:last-child");

    barMenu.classList.toggle("myBar");
    element.classList.toggle("myDisplayNone");
}

buttonMin.addEventListener("click", () => { myMin(); }, false);

buttonBar.addEventListener("click", () => { myMin(); }, false);

buttonMax.addEventListener('click', {
    handleEvent: function (event) {
        var barMenu = document.querySelector("#myShell>div>div:first-child");
        var element = document.querySelector("#myShell>div>div:last-child");

        barMenu.classList.toggle("myMax");
        element.classList.toggle("myMax");
    }
});

buttonOpacity.addEventListener('click', {
    handleEvent: function (event) {
        var barMenu = document.querySelector("#myShell>div>div:first-child");
        var element = document.querySelector("#myShell>div>div:last-child");

        if (barMenu.getAttribute('class') === 'myBgTransparent') {
            barMenu.setAttribute('class', 'myBarBgColor');
            element.setAttribute('class', 'myShellBgColor'); 
        }
        else {
            barMenu.setAttribute('class', 'myBgTransparent');
            element.setAttribute('class', 'myBgTransparent'); 
        }}
});

buttonClose.addEventListener('click', {
    handleEvent: function (event) {
        var element = document.querySelector("#myShell");
        var myClt = document.querySelector("#myClt");

        myClt.setAttribute('class', 'myDisplayNone');
        myReadMe.setAttribute('class', 'myDisplayNone');
        myShell.setAttribute('class', 'myDisplayNone'); 
    }
});
