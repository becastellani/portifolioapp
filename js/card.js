const URL =
"https://xe39o55f.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27card%27%5D+%7B%0A++titulo%2C%0A++caracteristicas%2C%0A++%27imagem%27%3A+imagem.asset-%3Eurl%2C%0A++botao%0A%7D";

async function card(){
var dados = await fetch(URL, {
method: "GET"
})

var dadosJS = await dados.json();

dadosJS.result.forEach(element => {
var all = document.querySelector(".all-projects")
var card = document.createElement("div");
card.className = "card";
var content = document.createElement("div");
content.className = "content";
var front = document.createElement("div");
front.className = "front";



var titulo = document.createElement("p")
titulo.innerText = element.titulo
var hr = document.createElement("hr")
hr.setAttribute("width", "90%");
hr.setAttribute("align", "center");
var title_cara = document.createElement("p")
title_cara.className = "card_cara"
title_cara.innerText = "Caracteristicas: "

var lista = document.createElement("div")
lista.className = "list"
element.caracteristicas.forEach(element2 => {
var li = document.createElement("li")
li.innerText = element2
lista.appendChild(li);
});


if (element.imagem) {
    var img = document.createElement("img");
    img.setAttribute("src", element.imagem);
    img.style.width = "60%";
    img.style.height = "auto";
    front.appendChild(img);
}

front.appendChild(titulo)
front.appendChild(hr)
front.appendChild(title_cara)
front.appendChild(lista)

var back = document.createElement("div")
back.className = "back"

var p_back = document.createElement("p")
p_back.innerHTML = "Acesse o <br> código"
back.appendChild(p_back)
element.botao.forEach(element3 => {
    var a_back = document.createElement("a");
    a_back.setAttribute("href", element3.Link);
    a_back.className = "btn btn-primary";
    a_back.setAttribute("target", "_blank");
    a_back.innerText = element3.titulo;
    a_back.style.color = "white"; 
    a_back.style.backgroundColor = "black"; 
    a_back.style.borderRadius = "5px"; 
    a_back.style.textDecoration = "none"; 
    a_back.style.padding = "20px 40px"; 
a_back.style.fontSize = "20px"; 
    back.appendChild(a_back);
});


content.appendChild(front)
content.appendChild(back)
card.appendChild(content)
all.appendChild(card)
});
}

card()
