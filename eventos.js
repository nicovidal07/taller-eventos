function mostrarAlerta() {
  alert("Hola!");
}
    
    const divElement = document.getElementById("div");
    divElement.textContent = "Click aquí";
    document.body.appendChild(divElement);
    
    divElement.addEventListener("click", function() {
      alert("Hola! Soy el div");
    });  