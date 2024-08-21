function superDigit(a,b){
    if(a.length===1){
        return parseInt(a);
    }
    var p=""
    for (let result=0;result<b;result++){
        p+=a
    }
    console.log((p));
    
    let suma=0
    for (let i = 0;i < a.length;i++){
        suma += parseInt(a[i]);
    }
    suma *=b;
    console.log(suma);
    return superDigit(suma.toString(),1);
    
}


let a=String(prompt("ingrese el numero que desea :"));
let b=parseInt(prompt("ingrese el numero por el cual desea repetir:"))
console.log("veces repetidas");

console.log(superDigit(a,b));


