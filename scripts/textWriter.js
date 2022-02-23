const items = document.querySelectorAll('[data-textWriter]');

function textWriter(element, speed)
{
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';

    speed == 'slow' ? speed = 120 : speed = 20;

    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, speed * i);
    });
};

items.forEach((element, i) =>
{
    let writingSpeed = items[i].getAttribute('data-textWriter');
    textWriter(element, writingSpeed);
});
