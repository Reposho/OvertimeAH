const correctAnswers0 = ["an","any","a","some","any","any","some","any","some","any","some","some","some","any"];
const correctAnswers1 = ["How much","How many","How much","How many","How many","How much","How much","How many","How much","How much","How much"];
const correctAnswers2 = ["How many eggs are there","How much salt is there","How much pizza is there","How many beans are there","How many red peppers are there","How much pasta is there","How much tomato juice is there"];
const correctAnswers3 = ["are","isn't","a","an","any","isn't","many","is","some","much","any","some"];
const correctAnswers4 = ["U","U","U/C","C","U","C","U","U","U","U/C","U","U","U","C","C","C","C","U","C","C","C","C","C","U","C","U"];

const errors = [0, 0, 0, 0];

Reveal.on('slidechanged', function(event){
    const slideToCheck = Reveal.getIndices(Reveal.getPreviousSlide()).h;
    console.log(event);

    if(event.previousSlide.className !== 'future'){
        if(slideToCheck == 0 ) {
            errors[0] = checkForm0(slideToCheck);
        }
        if(slideToCheck == 1) {
            errors[1] = checkForm1(slideToCheck);
        }
        if(slideToCheck == 2) {
            errors[2] = checkForm2(slideToCheck);
        }
        if(slideToCheck == 3) {
            errors[3] = checkForm3(slideToCheck);
        }
        if(slideToCheck == 4) {
            errors[4] = checkForm4(slideToCheck);
        }
    
        if(event.indexh == 5) {
            const totalErrors = errors.reduce((prev, current) => prev + current);
            if(totalErrors > 0) {
                document.getElementById('errorText').innerHTML = `¡There are ${totalErrors} errors!`
            }else{
                document.getElementById('errorText').innerHTML = `¡Excellent, no errors!`
            }
        }
    }
});

function checkForm0(slideToCheck){
    const form = document.getElementById('form-0');
    let incorrectAnswers = 0;

    for(let i = 0 ; i < 14 ; i++) {
        if(form.querySelector(`#form0-${i+1}`).value !== correctAnswers0[i]){
            form.querySelector(`#form0-${i+1}`).style.backgroundColor = '#F7E2DE';
            incorrectAnswers++;
        }else{
            form.querySelector(`#form0-${i+1}`).style.backgroundColor = '#E2F7DE';
        }
    }

    if(incorrectAnswers > 0){
        if(!confirm(`Hay ${incorrectAnswers} respuestas incorrectas. Deseas continuar con otro ejercicio?`)){
            Reveal.slide(slideToCheck);
        }
    }

    return incorrectAnswers;
}

function checkForm1(slideToCheck){
    const form = document.getElementById('form-1');
    let incorrectAnswers = 0;

    for(let i = 0 ; i < 11 ; i++) {
        if(form.querySelector(`#form1-${i+1}`).value !== correctAnswers1[i]){
            form.querySelector(`#form1-${i+1}`).style.backgroundColor = '#F7E2DE';
            incorrectAnswers++;
        }else{
            form.querySelector(`#form1-${i+1}`).style.backgroundColor = '#E2F7DE';
        }
    }

    if(incorrectAnswers > 0){
        if(!confirm(`Hay ${incorrectAnswers} respuestas incorrectas. Deseas continuar con otro ejercicio?`)){
            Reveal.slide(slideToCheck);
        }
    }

    return incorrectAnswers;
}

function checkForm2(slideToCheck){
    const form = document.getElementById('form-2');
    let incorrectAnswers = 0;

    for(let i = 0 ; i < 7 ; i++) {
        if(form.querySelector(`#form2-${i+1}`).value.replace('?', '').toLowerCase() !== correctAnswers2[i].toLowerCase()){
            form.querySelector(`#form2-${i+1}`).style.backgroundColor = '#F7E2DE';
            incorrectAnswers++;
        }else{
            form.querySelector(`#form2-${i+1}`).style.backgroundColor = '#E2F7DE';
        }
    }

    if(incorrectAnswers > 0){
        if(!confirm(`Hay ${incorrectAnswers} respuestas incorrectas. Deseas continuar con otro ejercicio?`)){
            Reveal.slide(slideToCheck);
        }
    }

    return incorrectAnswers;
}

function checkForm3(slideToCheck){
    const form = document.getElementById('form-3');
    let incorrectAnswers = 0;

    for(let i = 0 ; i < 12 ; i++) {
        if(form.querySelector(`#form3-${i+1}`).value.replace('?', '').toLowerCase() !== correctAnswers3[i]){
            form.querySelector(`#form3-${i+1}`).style.backgroundColor = '#F7E2DE';
            incorrectAnswers++;
        }else{
            form.querySelector(`#form3-${i+1}`).style.backgroundColor = '#E2F7DE';
        }
    }

    if(incorrectAnswers > 0){
        if(!confirm(`Hay ${incorrectAnswers} respuestas incorrectas. Deseas continuar con otro ejercicio?`)){
            Reveal.slide(slideToCheck);
        }
    }

    return incorrectAnswers;
}

function checkForm4(slideToCheck){
    const form = document.getElementById('form-4');
    let incorrectAnswers = 0;

    for(let i = 0 ; i < 26 ; i++) {
        if(form.querySelector(`input[name="${i+1}"]:checked`)){
            let isCorrect = false;

            correctAnswers4[i].split('/').forEach((answer) => {
                if(form.querySelector(`input[name="${i+1}"]:checked`).value === answer) {
                    form.querySelectorAll(`input[name="${i+1}"]`).forEach((element) => {
                        element.disabled = true;
                    });

                    isCorrect = true;
                }
            });
            if(!isCorrect) {
                incorrectAnswers++;
            }
        }else{
            incorrectAnswers++;
        }
    }

    if(incorrectAnswers > 0){
        if(!confirm(`Hay ${incorrectAnswers} respuestas incorrectas. Deseas continuar con otro ejercicio?`)){
            Reveal.slide(slideToCheck);
        }
    }

    return incorrectAnswers;
}

document.getElementById('toFirst').addEventListener('click', function(){
    Reveal.slide(0);
});
document.getElementById('reload').addEventListener('click', function(){
    Reveal.slide(0);
    location.reload();
});