//gpt4 output
document.querySelectorAll('.menu a').forEach((link, index, links) => {
    const intensity = 250 - Math.floor((index / (links.length - 1)) * 250);
    const color = `rgb(${intensity}, ${intensity}, ${intensity})`;
    link.addEventListener('mouseover', () => link.style.backgroundColor = color);
    link.addEventListener('mouseout', () => link.style.backgroundColor = '');
});