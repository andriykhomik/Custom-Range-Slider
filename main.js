const rangeContainer = document.querySelector('.range-container');
const range = document.querySelector('#range');
const label = document.querySelector('.range-container label');


range.addEventListener('input', (e)=> {

    const value = +e.target.value;
    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width');
    const labelWidth = getComputedStyle(label).getPropertyValue('width');

    const numWidth = +rangeWidth.substring(0, rangeWidth.length-2);
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length-2);

    const min = +e.target.min;
    const max = +e.target.max;

    const result = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10);
    label.style.left = `${result}px`;

    label.innerText = value;
})

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
