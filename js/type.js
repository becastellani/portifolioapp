function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
  
}
const ritzel = document.querySelector('.castellani');
const titulo = document.querySelector('.titulo');
const titulo2 = document.querySelector('.titulo2');
    const textoritzel = ritzel.innerHTML.split('');
    ritzel.innerHTML = ' ';
typeWrite(titulo);

setTimeout(()=>{
    titulo.classList.remove("titulo")
    ritzel.classList.add("titulo")
    textoritzel.forEach(function(letra, i){   
        setTimeout(function(){
            ritzel.innerHTML += letra;
        }, 75 * i)
    
      });
}, 700)

typeWrite(titulo2)