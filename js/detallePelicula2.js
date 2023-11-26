  
           function mostrar(){
            document.getElementById('trailer').style.display ='block';
          }

          function ocultar(){
            document.getElementById('trailer').style.display ='none';
            
          }

 
                   
     

        function add3(){

          let content = `<div class="publicacion-realizada mb-5 mt-5">
          <div class="usuario-publico">
              <div class="avatar">
                  <img src="../img/bruno.png" alt="foto perfil">
              </div>
              <div class="contenido-publicacion">
                  <h4>Bruno</h4>
                  <ul>
                      <li>Hace 3 min</li>
                  </ul>
              </div>
              <div class="menu-comentario">
                  <i class="fas fa-pen"></i>
                  <ul class="menu">
                      
                      <li><a href="">Eliminar</a></li>
                  </ul>
              </div>
          </div>
          <p>${product.value}</p>
          
          <div class="botones-comentario">
              <button type="" class="boton-puntuar">
                  <i class="fas fa-thumbs-up" id="mg"></i>
                  45
              </button>
              
          </div>
      </div>`;
      
          list.innerHTML += content;
      }

      