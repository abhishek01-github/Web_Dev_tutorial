document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100vh';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.transition = 'background-color 0.5s';

const heading = document.querySelector('.heading');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

container.style.textAlign = 'center';
btn.style.padding = '10px 20px';
btn.style.fontSize = '18px';
btn.style.cursor = 'pointer'

btn.addEventListener('click', () => {
    const newColor = randColorGenerate();
    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;
    heading.style.color = isDarkColor(newColor) ? 'white' : 'black';
});

function randColorGenerate() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function isDarkColor(color) {
    const rgb = color.match(/\d+/g);
    const brightness = Math.round(((parseInt(rgb[0]) * 299) +
                                   (parseInt(rgb[1]) * 587) +
                                   (parseInt(rgb[2]) * 114)) / 1000);
    return brightness < 128;
}
