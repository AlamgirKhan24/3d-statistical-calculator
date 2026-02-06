//DOM
const input = document.querySelector('input');
const button = document.querySelector('button');
const main = document.querySelector('main');

//CREATING ELEMENT
const section = document.createElement('section');



//  FOR COUNT EVENT
button.addEventListener('click', () => {

    const div = document.createElement('div');

    let numbers = input.value.split(',').map(Number);
    // APPENDING
    main.append(section);
    section.append(div);

    // COUNT
    div.innerText = `Count : ${numbers.length}`
    section.append(div);
});


// SUM EVENT
button.addEventListener('click', () => {

    const div = document.createElement('div');
    let sum = 0;
    let numbers = input.value.split(',').map(Number);
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];

    }
    div.innerText = `Sum : ${sum}`;
    section.append(div)
})

// MAXIMUM EVENT
button.addEventListener('click', () => {

    let numbers = input.value.split(',').map(Number);
    const div = document.createElement('div');
    let maximum = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > maximum) {
            maximum = numbers[index];
        }

    }
    div.innerText = `Maximum : ${maximum}`;
    section.append(div)
})


// MANIMUM EVENT
button.addEventListener('click', () => {

    let numbers = input.value.split(',').map(Number);
    const div = document.createElement('div');
    let manimum = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < manimum) {
            manimum = numbers[index];
        }

    }
    div.innerText = `Manimum : ${manimum}`;
    section.append(div)
})

// AVERAGE EVENT
button.addEventListener('click', () => {

    const div = document.createElement('div');
    let numbers = input.value.split(',').map(Number);

    // SUM
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index]
    }

    // AVERAGE
    div.innerText = `Average : ${sum/numbers.length}`
    section.append(div);
});