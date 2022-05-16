const zucchine = [];
const zucchineGrandi = [];
const zucchinePiccole = [];
let pesoTotalePiccole = 0;
let pesoTotaleGrandi = 0;
for (let i = 0; i < 10; i++){
    zucchine.push({varietà :[i], peso : ((Math.random() * 10) + 1), lunghezza : ((Math.random() * 20) + 5)});
}
console.log(zucchine);
for (let i = 0; i < zucchine.length; i++){
    if (zucchine[i].lunghezza > 15){
        zucchineGrandi.push(zucchine[i]);
    } else {
        zucchinePiccole.push(zucchine[i]);
    }
}
for (let i = 0; i < zucchineGrandi.length; i++){
    pesoTotaleGrandi += zucchineGrandi[i].peso;
}
for (let i = 0; i < zucchinePiccole.length; i++){
    pesoTotalePiccole += zucchinePiccole[i].peso;
}
console.log(`Le Grandi pesano: ${pesoTotaleGrandi}gr, mentre le piccole pesano: ${pesoTotalePiccole}gr`);