let modal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');

abrir.onload = function(){
    modal.style.display = 'block';
    setTimeout(function(){
        modal.style.display = 'none';
    }, 3000);
    
};


window.onload('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});