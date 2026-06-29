const imagem = document.getElementById("imagem");
const curiosidade = document.getElementById("curiosidade");

imagem.onclick = () =>{
    console.log("Clique!");
    curiosidade.classList.toggle("ativo");
}