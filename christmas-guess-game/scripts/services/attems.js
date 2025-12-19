import { secret } from "./random.js"
let attemps = 10

export function showAttemps(value){
    if(value === secret) return
    
    const button = document.getElementById('tries')
    button.textContent = `Tus intentos: ${attemps}`

    if(attemps >= 0) attemps--

    return attemps
}