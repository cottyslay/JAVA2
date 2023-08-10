      //inicio Calculos//

      function sumarNumeros() {
        var num1 = parseInt(document.getElementById("num1").value);
        var num2 = parseInt(document.getElementById("num2").value);
        var sumaresultado = num1 + num2;
        console.log("La suma es " + sumaresultado);
        alert("Sumando")
   
    var htmlresultado = document.getElementById("idresultado");
          htmlresultado.innerHTML = "El resultado es: " + sumaresultado;
          htmlresultado.style.color = " #ffa600";
      
      }
  
  
      function restarNumeros() {
          var num1 = parseInt(document.getElementById("num1").value);
          var num2 = parseInt(document.getElementById("num2").value);
          var restresultado = num1 - num2;
          console.log("La resta es " + restresultado);
          alert("Restando")
  
          var htmlresultado = document.getElementById("idresultado");
          htmlresultado.innerHTML = "El resultado es: " + restresultado;
          htmlresultado.style.color = " #ffa600";
          
          
          
          
        }
        function multiplicarNumeros() {
          var num1 = parseInt(document.getElementById("num1").value);
          var num2 = parseInt(document.getElementById("num2").value);
          var multresultado = num1 * num2;
          console.log("La multiplicacion es " + multresultado);
          alert("Multiplicando")
  
          var htmlresultado = document.getElementById("idresultado");
          
            htmlresultado.innerHTML = "El resultado es: " + multresultado;
            htmlresultado.style.color = " #ffa600";
          
        }
  
        //Fin Calculos//
  
  
        //inicio  de comentarios//
        
  
        function agregarComentario() {
    
          var comentarioInput = document.getElementById("comentario").value;
          
           
          
        
          // Verificar si el campo de comentario está vacío
          if (comentarioInput === "") {
            return; 
          }
        
          // Obtener el contenedor de comentarios
          var contenedorComentarios = document.getElementById("contenedor-comentarios");
        
          // Crear un nuevo elemento div para el comentario
          var nuevoComentario = document.createElement("div");
        
          // Establecer el contenido del nuevo comentario con el valor del campo de comentario
          nuevoComentario.innerHTML = comentarioInput;
        
          // Agregar la clase "comentario" al nuevo comentario
          nuevoComentario.classList.add("comentario");
        
          // Agregar el nuevo comentario al contenedor de comentarios
          contenedorComentarios.appendChild(nuevoComentario);
        
          // Limpiar el campo de comentario después de agregar el comentario
          document.getElementById("comentario").value = "";
          var h2Element = document.getElementById("H2coment");
          h2Element.innerHTML = "¡Gracias por tu comentario!";
        }
        
         //fin caja de comentarios//
  
  
       
  
  