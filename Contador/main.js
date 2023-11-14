const btnAumentar = document.getElementById("aumentar");
const btnDisminutir = document.getElementById("disminutir");
const resultado =  document.getElementById("contador");
const btnReset = document.getElementById('reset');
let numero = 0;

btnAumentar.addEventListener("click", () => {
    console.log("el valor es " +numero);
    numero++;
    resultado.innerHTML= `<p class="resultado"> ${numero}</p>`;
    if(numero <= 0){
        numero = 0;
    }if(numero >=10){
        alert('Coño dale al paso');
    }
});

btnDisminutir.addEventListener("click", () => {
    console.log("el valor es " +numero);
    numero--;
    resultado.innerHTML= `<p class="resultado"> ${numero}</p>`;
    if(numero <= 0){
        numero = 0 +1;
    }
});

btnReset.addEventListener('click', ()=>{
    console.log("el valor es " +numero);
    numero = 0;
    resultado.innerHTML= `<p class="resultado"> ${numero}</p>`;
})
