let nomeHeroi = "João";
let quantExperienciaXP = 7000;

if (quantExperienciaXP <=1000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Ferro <-.");
} else if (quantExperienciaXP >= 1001 && quantExperienciaXP <= 2000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Bronze <-.");
}else if (quantExperienciaXP >= 2001 && quantExperienciaXP <= 5000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Prata <-.");
}else if (quantExperienciaXP >= 5001 && quantExperienciaXP <= 7000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Ouro <-.");
}else if (quantExperienciaXP >= 7001 && quantExperienciaXP <= 8000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Platina <-.");
}else if (quantExperienciaXP >= 8001 && quantExperienciaXP <= 9000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Ascendente <-.");
}else if (quantExperienciaXP >= 9001 && quantExperienciaXP <= 10000){
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Imortal <-.");
} else {
    console.log("O herói de nome: " + nomeHeroi + " está no nível -> Radiante <-.");

}
