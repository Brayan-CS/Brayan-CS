
var rootRef = firebase.database().ref();

const form = document.getElementById('contactForm').addEventListener('submit', guardarForm);


function guardarForm(e){

    e.preventDefault();
    let nombre = document.getElementById("fname").value;
    let apellidos = document.getElementById("lname").value;
    let codigo = document.getElementById("cod").value;
    let facultad = document.getElementById("fac").value;
    let direccion = document.getElementById("dir").value;
    let beneficio = document.getElementById("ben").value;
    let novedad = document.getElementById("nov").value;
    let data ={

            nombre: nombre,
            apellidos: apellidos,
            codigo: codigo,
            facultad: facultad,
            direccion: direccion,
            beneficio: beneficio,
            novedad: novedad
    };
    saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
      form.reset(); // borramos todos los campos. 
    }

    function saveContactForm(data) {
        rootRef.push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
          .then(function(){
            alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
          })
          .catch(function(){
            alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
          });
      };


            




  
