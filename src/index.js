import { cube } from './math.js';
import './a.css'
function component() {
    var element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(10)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());