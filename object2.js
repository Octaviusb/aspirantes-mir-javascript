
var persona = {
    nombre: "Eva",
    edad: 58,
    ciudad: "Villavicencio",
    profesion: "Hogar"
  };
  
  console.log(persona);
  
  function presentacion(obj) {
    return "Hola, me llamo " + obj.nombre + ", tengo " + obj.edad + " años y vivo en " + obj.ciudad + ".";
  }
  
  var mensaje = presentacion(persona);
  
  console.log(mensaje);
  
  persona.hobbies = ["facebook", "visitar vecinas", "hablar"];
  
  console.log(persona.hobbies);
  
  for (var i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
  }