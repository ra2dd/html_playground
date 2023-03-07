const output = document.querySelector("#output");
const alarmButton = document.querySelector("#set-alarm");
const name = document.querySelector("#alarm-name");
const delay = document.querySelector("#alarm-delay");


/*
function setAlarm()
{
    setTimeout(() => 
    {
        output.textContent += "\nWake up!";
    }, 1000);
}

alarmButton.addEventListener('click', setAlarm);

*/

function alarm(person, delay)
{
    return new Promise((resolve, reject) => 
    {
        if(delay < 0)
        {
            throw new Error('Alarm delay must be positive');
        }
        setTimeout( () =>
        {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

alarmButton.addEventListener('click', async () =>
{
    try
    {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    }
    catch (error)
    {
        output.textContent = `Couldn't set alarm ${error}`;
    }
});