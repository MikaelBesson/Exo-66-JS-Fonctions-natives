

let p1 = document.getElementById("entier");
let p2 = document.getElementById("flottant");
let par = document.getElementById("non-numerique");
let p4 = document.getElementById("random");
let p5 = document.getElementById("trunc");
let p6 = document.getElementById("replace");

let operande = 10;

 p1.innerHTML = (p1.innerHTML * operande);

p2.innerHTML = ((parseFloat(p2.innerHTML) * operande) + parseFloat(p1.innerHTML));


if (isNaN(par)){
    par.innerHTML = "0";
}

let aleatoire;
for (let i = 0; i < 2; i+=1){
    aleatoire = Math.trunc(Math.random() * 100);
    p4.innerHTML = aleatoire;
}

p5.innerHTML = Math.trunc(p5.innerHTML);


p6.innerHTML = p6.innerHTML.replace("world","Mika.B");








