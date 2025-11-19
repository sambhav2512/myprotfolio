
var tabLinks=document.getElementsByClassName("tab-links");
var tabContents=document.getElementsByClassName("tab-content");

function opentab(tabname)
{
    var tab=tabname;
    for(tabLink of tabLinks)
    {
        tabLink.classList.remove("active-links");
    }
    for(tabContent of tabContents)
    {
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu()
{
    sidemenu.style.right='0';
}

function closemenu()
{
     sidemenu.style.right='-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzlB7tMf0ZwKzoqsDivb5yzuIz5T0qzH5FoItkeSgOf1raphhU0FsbnnbMA4dFkdzCiaQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
    msg.innerHTML="Message Sent Sucessfully..."
    setTimeout(function(){
        msg.innerHTML=""
    },5000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})