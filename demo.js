
const wildColleagues = [
    { name: 'Victor', cssColor: 'red' },
    { name: 'Camélia', cssColor: 'blue' },
    { name: 'Karim', cssColor: 'green' },
    { name: 'Stacy', cssColor: 'magenta' }
];

function showDemo() {
    let container = document.getElementById('demo-output');
    if (!container) {
        container = document.createElement('div');
        container.id = 'demo-output';
        container.style.marginTop = '1rem';
        document.body.appendChild(container);
    }

    container.innerHTML = '';

    wildColleagues.forEach(col => {
        const span = document.createElement('span');
        span.textContent = col.name;
        span.style.color = col.cssColor;
        span.style.fontWeight = 'bold';
        span.style.marginRight = '1rem';
        container.appendChild(span);
    });
}