function mostrarAlerta() {
  alert("Hola!");
}
    
    const divElement = document.getElementById("div");
    document.body.appendChild(divElement);
    
    divElement.addEventListener("click", function() {
      alert("Hola! Soy el div");
    });  

    const saludar = document.getElementById("saludar");

    saludar.addEventListener("click", function(event) {
      event.stopPropagation()
});