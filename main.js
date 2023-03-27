const img = document.querySelector('img');
const overlay = document.querySelector('#overlay');

overlay.addEventListener('click', () => 
{
    if(img.getAttribute('src') === 'firefox-icon.jpg')
    {
        img.setAttribute('src', 'firefox.jpg');
    }
    else
    {
        img.setAttribute('src', 'firefox-icon.jpg');
    }
});

overlay.addEventListener('mouseover', (event) =>
{
    event.target.style.backgroundColor = `rgb(0,0,0,0.5)`;
});

overlay.addEventListener('mouseout', (event) =>
{
    event.target.style.backgroundColor = `rgb(0,0,0,0)`;
});

const button = document.querySelector('button');
const para = document.querySelectorAll('p');

function setUserName()
{
    const myName = prompt("Please enter your name.");
    if(!myName)
    {
        alert("You didn't provide an username, please try again.");
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        changePara(myName);
    }
}

function changePara(name)
{
    para[1].textContent = `This is a second paragraph made by ${name[0].toUpperCase() + name.slice(1)}.`;
}

if(!localStorage.getItem("name"))
{
    setUserName();
}
else
{
    changePara(localStorage.getItem("name"));
}

button.addEventListener('click', () => setUserName());