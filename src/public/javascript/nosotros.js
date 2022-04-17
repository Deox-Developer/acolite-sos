//animación Abajo

let animadoA = document.querySelectorAll(".animadoAbajo");

function mostrarScrollA(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0 ; i < animadoA.length; i++) {
        let alturaAnimado = animadoA[i].offsetTop;
        if (alturaAnimado - 500 < window.scrollY){
            animadoA[i].style.opacity = 1;
            animadoA[i].classList.add("mostrarAbajo");
        }
    }
}

window.addEventListener('scroll', mostrarScrollA);

//animación Derecha

let animadoDerecha = document.querySelectorAll(".animadoDerecha");

function mostrarScrollD(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0 ; i < animadoDerecha.length; i++) {
        let alturaAnimado = animadoDerecha[i].offsetTop;
        if (alturaAnimado - 500 < window.scrollY){
            animadoDerecha[i].style.opacity = 1;
            animadoDerecha[i].classList.add("mostrarDerecha");
        }
    }
}

window.addEventListener('scroll', mostrarScrollD);

//animación Izquierda

let animadoI = document.querySelectorAll(".animadoIzquierda");

function mostrarScrollI(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0 ; i < animadoI.length; i++) {
        let alturaAnimado = animadoI[i].offsetTop;
        if (alturaAnimado - 500 < window.scrollY){
            animadoI[i].style.opacity = 1;
            animadoI[i].classList.add("mostrarIzquierda");
        }
    }
}

window.addEventListener('scroll', mostrarScrollI);

//animación sin efecto

let animadosE = document.querySelectorAll(".animadosinanimacion");

function mostrarScrollsE(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0 ; i < animadoI.length; i++) {
        let alturaAnimado = animadosE[i].offsetTop;
        if (alturaAnimado - 500 < window.scrollY){
            animadosE[i].style.opacity = 1;
            animadosE[i].classList.add("mostrarsinanimacion");
        }
    }
}

window.addEventListener('scroll', mostrarScrollsE);