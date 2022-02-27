console.log('funcionando')

var ObtenerFormulario = document.querySelector("#Formulario");
var repuesta = document.querySelector("#respuesta");

ObtenerFormulario.addEventListener('submit', function(e){

     //console.log('me  diste un click')
    
    e.preventDefault();

    var datos= new FormData(ObtenerFormulario);
    console.log(datos);
   console.log(datos.get('usuario'));
   console.log(datos.get('Password'));

   fetch('post.php', {
       method: 'POST',

       body:datos
       
   })
   .then(res => res.json())
   .then(datos =>{

       console.log(datos);
       if(datos =='error'){
        repuesta.innerHTML = `
        <div class="alert alert-warning" role="alert">
            llena todos los campos
    
       </div>
       `
       }else {
        repuesta.innerHTML = `
        <div class="alert alert-danger" role="alert">
            ${datos}
    
       </div>
       `
       }
   
   })
   
})