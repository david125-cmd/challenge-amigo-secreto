// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const input_Friend = document.getElementById ("amigo");
const list_Friend = [];
const ul_ListaAmigos = document.getElementById("listaAmigos");
const ul_Resultado = document.getElementById("resultado");




function agregarAmigo(){
    if (input_Friend.value == ""){
        alert("el recuadro no puede estar vacio")
    }
    //console.log("hola")
    list_Friend.push(input_Friend.value)
    ul_ListaAmigos.innerHTML += `<li>${input_Friend.value}</li>` ;
    console.log(list_Friend);
};



function sortearAmigo(){
    if (list_Friend.length === 0) {
        resultado.textContent = 'No hay amigos en la lista';
    }
    else{
    const indice= Math.floor((Math.random() * list_Friend.length));
    const amigo_Secreto = list_Friend[indice];
    ul_Resultado.innerHTML = `<li>El amigo secreto es : ${amigo_Secreto}</li>`
    }
}