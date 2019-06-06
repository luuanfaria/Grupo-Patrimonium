function submit() {

    console.log("entrei no submit");

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("tel").value;
    var conteudo = document.getElementById("conteudo").value;

    var texto = "Nome: " +nome+ "; Telefone: "+ telefone + "; Email: "+email+ "; Conteudo: "+conteudo ;

    console.log(nome);
}