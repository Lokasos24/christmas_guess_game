import { secret } from "../services/random.js"
import { sendNumber } from '../services/verifynumber.js'
import { showAttemps } from "../services/attems.js";
import { useClues } from "../services/clues.js";

export function gameStart(){
    const input = document.getElementById('random_number')
    const send = document.getElementById('start');
    const divMessage = document.getElementById('mesage')

    showAttemps()

    send.addEventListener('click', event => {
        event.preventDefault()
        if(input.value.trim() === '') return
        if(input.value >= 26 || input.value <= 0) return

        if(Number(input.value) === secret) {
            divMessage.textContent = `¡Correcto! 🎉`
            send.disabled = true
            return
        }

        if(showAttemps(input.value) < 0) {
            divMessage.textContent = `Perdiste 🎅`
            return send.disabled = true
        }
        
        sendNumber(input)
    })
}

export function clues(){
    const cluesButton = document.getElementById('give_clue')
    const input = document.getElementById('random_number')
    useClues(cluesButton)
    cluesButton.addEventListener('click', event => {
        if(secret === input.value) return cluesButton.disabled = true
        useClues(cluesButton)
    })
}