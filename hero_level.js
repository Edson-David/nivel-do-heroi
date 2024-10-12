console.log("Hero Level")

let hero = "Edson"
let xp = 2024
let level = "Iniciante"

if (xp <= 1000){
    level = "Ferro"   
}
else if (xp > 1000 && xp <= 2000) {
    level = "Bronze"
}
else if (xp > 2000 && xp <= 5000) {
    level = "Prata"
}
else if (xp > 5000 && xp <= 7000) {
    level = "Ouro"
}
else if (xp > 7000 && xp <= 8000) {
    level = "Platina"
}
else if (xp > 8000 && xp <= 9000) {
    level = "Ascendente"
}
else if (xp > 9000 && xp <= 10000) {
    level = "Imortal"
}
else {
    level = "Radiante"
}

console.log("O Herói " + hero + " está no nível " + level)