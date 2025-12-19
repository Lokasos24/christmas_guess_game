import { secret } from "./random.js"

export function sendNumber (input, divMessage){
    const div = document.getElementById('clue')
    const span = div.lastElementChild

    if(input.value < secret){
        span.textContent = `Sube 🎄`
    }else if(input.value > secret){
        span.textContent = `Baja ❄️`
    }else if(input.value === secret){
        divMessage.querySelector('span').textContent = `¡Correcto! 🎉`
    }

}