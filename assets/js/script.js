window.onload = function() {
    document.getElementById("theform").onsubmit = function(e) {
      e.preventDefault();

      console.log(document.getElementById("nome").value);
      console.log(document.getElementById("email").value);
      console.log(document.getElementById("tel").value);
      console.log(document.getElementById("conteudo").value);
      return false;
    };
    document.getElementById("theform2").onsubmit = function(e) {
        e.preventDefault();
    
  
        console.log(document.getElementById("nome2").value);
        console.log(document.getElementById("email2").value);
        console.log(document.getElementById("tel2").value);
        console.log(document.getElementById("conteudo2").value);

        /* document.getElementById('theform2').style.display = 'none'; */

        return false;
    
      };
  };
