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



function typeWrite2(elemento, textArray = null, i = 0) {
    const textoArray = textArray ? textArray[i].split('') : elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 75 * i);
    });

    // Se textArray for fornecido, comece a próxima string quando terminar esta
    if (textArray) {
        setTimeout(function(){
            typeWrite2(elemento, textArray, (i + 1) % textArray.length);
        }, 100 * textoArray.length);
    }
}

const titulo2 = document.querySelector('.titulo2');

const textosTitulo2 = ['Desenvolvedor Web','Estudante de Engenharia de Software'];
typeWrite2(titulo2, textosTitulo2);