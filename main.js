const img = document.querySelector('img');

img.addEventListener('click', () => 
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