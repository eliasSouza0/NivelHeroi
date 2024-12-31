let nomeDoHeroi = "Aragorn"; 
let nivelDoHeroi = 6000; //nivel demonstrativo para testes, mude o nivel para ver o programa funcionando.
let liga = "";

//Verifica o Nível do herói
if (nivelDoHeroi <= 1000) {
    liga = "Ferro"

} else if (nivelDoHeroi <= 2000) {
    liga = "Bronze"

} else if (nivelDoHeroi <= 5000) {
    liga = "Prata"

} else if (nivelDoHeroi <= 7000) {
    liga = "Ouro"

} else if (nivelDoHeroi <= 8000) {
    liga = "Platina"

} else if (nivelDoHeroi <= 9000) {
    liga = "Ascendente"

} else if (nivelDoHeroi <= 10000) {
    liga = "Imortal"
} else {
    liga = "Radiante"
}

//Saida 
console.log(`O seu herói: ${nomeDoHeroi} está no nivel ${nivelDoHeroi} e a sua liga é: ${liga}`)