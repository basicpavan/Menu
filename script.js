function ex1(){
    var nota = parseInt(prompt("Digite o número"));

    while(nota < 0 || nota > 10){
        nota = parseInt(prompt("Digite novamente a nota"));
    }

    document.getElementById("root").style.display = "block"
    document.getElementById("root").innerHTML = `
        <p> Sua nota: ${nota}</p>
    `
}
function ex2(){
    var tempo = 10

    while(tempo > 0){
        tempo --
        alert (tempo)
    }
}