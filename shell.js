  var scri = document.createElement("script");
  var html = document.querySelector("html");
  var shel = document.querySelectorAll("shell");
  var codigo = "";
  var comands = [];
  var cont = 0;
  var simnot = false;
  shel.forEach( f => {
      f.style.display = "none";
      codigo += f.innerHTML;
  });
  var codi = (codigo.trim()).split(";");
  var xmlrequest = new XMLHttpRequest();
  xmlrequest.onreadystatechange = function (){
    if(xmlrequest.readyState == 4 && xmlrequest.status == 200){
      scri.innerHTML += (xmlrequest.responseText).trim();
    } else {
     // alert(request.status)
    }
  };
  function request(link){
    xmlrequest.open('GET', 'http://localhost:8000/exec.sh?' + link.trim(), false);
    xmlrequest.send();
  }
  codi.map(e => {
    if(e.trim() == "" || e.length == 0){
      
    } else {
      var linha = (e.trim()).replaceAll("\n","").replaceAll("  ","").replaceAll("    ","").replaceAll(":",";");
      request(linha);
    }
  });
  alert(scri.innerHTML)
  html.append(scri);
