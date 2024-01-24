function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
  
}
const castellani = document.querySelector('.castellani');
const titulo = document.querySelector('.titulo');
const titulo2 = document.querySelector('.titulo2');
    const textocastellani = castellani.innerHTML.split('');
    castellani.innerHTML = ' ';
typeWrite(titulo);

setTimeout(()=>{
    titulo.classList.remove("titulo")
    castellani.classList.add("titulo")
    textocastellani.forEach(function(letra, i){   
        setTimeout(function(){
            castellani.innerHTML += letra;
        }, 75 * i)
    
      });
}, 1000)

typeWrite(titulo2)