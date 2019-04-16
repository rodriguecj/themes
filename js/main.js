'use strict'

window.addEventListener('load',function(){

  /*Slider*/
  if(window.location.href.indexOf('index')>-1){
    $('.bxslider').bxSlider({
      auto: true,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      responsive: true,
      speed: 700,
      pause: 4000
      //slideWidth: 645
    });
  }
  //Post
  if(window.location.href.indexOf('index')>-1){
    var post = [
      {
        title: 'Titulo 1',
        publicacion: 'Fecha de publicacion: '+moment().subtract(10, 'days').calendar(),
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
      },
      {
        title: 'Titulo 2',
        publicacion: 'Fecha de publicacion: '+moment().subtract(10, 'days').calendar(),
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
      },
      {
        title: 'Titulo 3',
        publicacion: 'Fecha de publicacion: '+moment().subtract(10, 'days').calendar(),
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
      },
      {
        title: 'Titulo 4',
        publicacion: 'Fecha de publicacion: '+moment().subtract(10, 'days').calendar(),
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen'
      }


    ]
  

  post.map( item => {
    var posts =
      `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.publicacion}</span>
        <p>${item.content}</p>
        <div class="boton"><a  class="button-more fondo">Leer mas</a></div>       
      </article>
    `
    $('#posts').append(posts);
  })
}
  //themes
  var cambiarTheme = document.getElementById('theme');
  $('#to-red').click(function(){
    cambiarTheme.setAttribute("href", "css/red.css");
  })
  $('#to-blue').click(function(){
    cambiarTheme.setAttribute("href", "css/blue.css");
  })
  $('#to-green').click(function(){
    cambiarTheme.setAttribute("href", "css/green.css");
  })

  //scroll subir

  $('.subir').click(function(){
    $('html, body').animate({
      scrollTop: 0 
    }, 1000)
  })

  //Guardar Usuario en el localStorage
  
  
      $('.login form input#boton-enviar').click(function(){
        var form_nombre = document.querySelector('#form_nombre').value;
          localStorage.setItem('form_nombre', form_nombre);
          location.reload();
          //console.log(localStorage);
      })
      var nombre_localStorage = localStorage.getItem('form_nombre');
      if(nombre_localStorage != null && nombre_localStorage != undefined && nombre_localStorage.length>0){
          $('.login').hide();
          var usuarioParrafo = $('.about p');
          usuarioParrafo.html('<br><strong>Bienvenido, '+nombre_localStorage+'</strong><br>');
          usuarioParrafo.append('<a href="#" id="logout">Cerrar sesion</a>');
          $('#logout').click(function(){
            localStorage.removeItem('form_nombre');
            location.reload();
          })
      }
  //Acordeon
  if(window.location.href.indexOf('presentacion')>-1){
    var cajaAcordeon = $('#acordeon');
    cajaAcordeon.accordion({
      
    });
  }
  if(window.location.href.indexOf('reloj')>-1){
    setInterval(function(){
      var reloj = moment().format('h:mm:ss');
      $('#reloj-1').html(reloj);
    },1000)
    
  }
  //console.log(posts);

  //Validaciones de formulario
  if(window.location.href.indexOf('contacto')>-1){
   $("#nacimiento").datepicker();
    $.validate({
      lang: 'es'
    });
  }
})