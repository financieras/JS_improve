function sumar(){
    let uno=document.getElementById("n1");
    let dos=document.getElementById("n2");
    let myTotal=document.getElementById("total");
    let laSuma=parseInt(uno.value) + parseInt(dos.value);
    myTotal.innerText="El Resultado es: "+ laSuma;
}