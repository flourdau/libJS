// TPGGLE: 

const buttonClose = document.querySelector("#myShell>div>div:first-child>ul:last-child>li:last-child");
const buttonMax = document.querySelector("#myShell>div>div:first-child>ul:last-child>li:nth-child(2)");
const buttonMin = document.querySelector("#myShell>div>div:first-child>ul:last-child >li:first-child");
const buttonBar = document.querySelector("#myShell>div>div:first-child>ul:first-child");

function myMin() {
    var barMenu = document.querySelector("#myShell>div>div:first-child");
    var element = document.querySelector("#myShell>div>div:last-child");

    buttonMax.classList.toggle("myDisplayNone");
    barMenu.classList.toggle("myBar");
    barMenu.style.height = "5%"
    element.classList.toggle("myDisplayNone");
}


buttonClose.addEventListener('click', {
    handleEvent: function (event) {
        var element = document.querySelector("#myShell");
        console.log(element);
        element.classList.toggle("myDisplayNone")
    }
});

buttonMax.addEventListener('click', {
    handleEvent: function (event) {
        var element = document.querySelector("#myShell");
        console.log(element);
        element.classList.toggle("myMax")
    }
});

buttonMin.addEventListener("click", () => { myMin(); }, false);

buttonBar.addEventListener("click", () => { myMin(); }, false);