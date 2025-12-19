import { secret } from "./random.js"

let cluesToUse = 3

export function useClues(cluesButton){
    if(cluesToUse < 0) return cluesButton.disabled = true
    const clueSpan = document.getElementById('clue')
    const input = document.getElementById('random_number').value
    cluesButton.textContent = `Pistas: ${cluesToUse}`

    if(input.trim() === '') return 

    if(input < secret || cluesToUse <= 0){
        clueSpan.firstChild.textContent = `Sube 🎄`
        cluesButton.textContent = `Pistas: ${cluesToUse}`
    }else if(input > secret || cluesToUse <= 0) {
        clueSpan.firstChild.textContent = `Baja ❄️`
        cluesButton.textContent = `Pistas: ${cluesToUse}`
    }
    cluesToUse--
}