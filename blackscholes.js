function Normal(z) {
    var j, k, kMax, m, values, total, subtotal, item, z2, z4, a, b;
    if (z < -6) { return 0; }
    if (z >  6) { return 1; }
    m      = 1;
    b      = z;
    z2     = z * z;
    z4     = z2 * z2;
    values = [];
    for (k=0; k<100; k+=2) {
        a = 2*k + 1;
        item = b / (a*m);
        item *= (1 - (a*z2)/((a+1)*(a+2)));
        values.push(item);
        m *= (4*(k+1)*(k+2));
        b *= z4;
    }
    total = 0;
    for (k=49; k>=0; k--) {
        total += values[k];
    }
    return 0.5 + 0.3989422804014327 * total;
}

function CALLeuropea(){
    let S=parseFloat(document.getElementById("S").value);
    let E=parseFloat(document.getElementById("E").value);
    let sigma=parseFloat(document.getElementById("sigma").value);
    let tanto=parseFloat(document.getElementById("tanto").value);
    let T=parseFloat(document.getElementById("T").value);
    let myTotal=document.getElementById("total");
    //Primero convertimos el tanto efectivo anual en un tanto instantáneo
    let r= Math.log(1+tanto); //log es el neperiano
    console.log("r=",r)
    //Calculamos d1, d2, y la prima
    let d1 = (Math.log(S/E)+(r+sigma**2/2)*T)/(sigma*Math.sqrt(T));
    let d2 = (Math.log(S/E)+(r-sigma**2/2)*T)/(sigma*Math.sqrt(T));
    let primaCALL=S*Normal(d1)-E*Math.E**(-r*T)*Normal(d2);
    myTotal.innerText="La prima estimada del CALL es: "+ primaCALL;
}