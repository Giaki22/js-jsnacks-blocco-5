const zucchine = [];
let pesoTotale = 0;
for (let i = 0; i < 10; i++){
    zucchine.push({varietà :[i], peso : ((Math.random() * 10) + 1), lunghezza : ((Math.random() * 10) + 1)});
}
console.log(zucchine);
for (let i = 0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}
console.log(pesoTotale);