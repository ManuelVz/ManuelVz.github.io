/*Esta parte del codigo, queda demasiado larga y repetitiva, seguramente haya una manera mejor de hacerlo.*/


/*Funciones asociadas a los botones: Al pulsar el boton, muestro el promedio, oculto el boton para mostrar, y muestro el boton para ocultar.*/
var btn_mostrar_promedios = document.getElementById('boton_mostrar_promedios');
var btn_ocultar_promedios = document.getElementById('boton_ocultar_promedios');


function mostrar_boton_promedios () {
    if (btn_mostrar_promedios.style.display = 'inline') {       //Si esta visible btn_mostrar_promedios.
        btn_ocultar_promedios.style.display = 'inline';         //Mostrar btn_ocultar_promedios.
        btn_mostrar_promedios.style.display = 'none'            //Ocultar btn_mostrar_promedios.
        var auxiliar=document.getElementsByClassName('promedios')  
        for (var i=0;i<auxiliar.length;i++) 
        {
            auxiliar[i].style.display="inline" //Elimina el atributo que oculta el texto por defecto.
        }
    }    
    
}

function ocultar_boton_promedios () {
    if (btn_ocultar_promedios.style.display = 'inline') {   //Si esta visible btn_ocultar_promedios.
        btn_mostrar_promedios.style.display = 'inline';     //Mostrar btn_mostrar_promedios.
        btn_ocultar_promedios.style.display = 'none'        //Ocultar btn_ocultar_promedios.
        
        var auxiliar=document.getElementsByClassName('promedios') //Desactivar el atributo que oculta el texto por defecto.
        for (var i=0;i<auxiliar.length;i++) 
        {
            auxiliar[i].style.display="none"
        }
    }    
    
          
    }    
    
var btn_mostrar_periodos = document.getElementById('boton_mostrar_periodos');
var btn_ocultar_periodos = document.getElementById('boton_ocultar_periodos');


function mostrar_boton_periodos () {
    if (btn_mostrar_periodos.style.display = 'inline') {      
        btn_ocultar_periodos.style.display = 'inline';
        btn_mostrar_periodos.style.display = 'none'   
        var auxiliar=document.getElementsByClassName('periodos')  
        for (var i=0;i<auxiliar.length;i++) 
        {
            auxiliar[i].style.display="inline"
        }
    }    
    
}

function ocultar_boton_periodos () {
    if (btn_ocultar_periodos.style.display = 'inline') {  
        btn_mostrar_periodos.style.display = 'inline'; 
        btn_ocultar_periodos.style.display = 'none'    
        
        
        var auxiliar=document.getElementsByClassName('periodos') 
        for (var i=0;i<auxiliar.length;i++) 
        {
            auxiliar[i].style.display="none"
        }
    }    
    
          
    }    

var btn_mostrar_detalles = document.getElementById('boton_mostrar_detalles');
var btn_ocultar_detalles = document.getElementById('boton_ocultar_detalles');


function mostrar_boton_detalles () {
    if (btn_mostrar_detalles.style.display = 'inline') {      
        btn_ocultar_detalles.style.display = 'inline';
        btn_mostrar_detalles.style.display = 'none'   
        var auxiliar=document.getElementsByClassName('detalles')  
        for (var i=0;i<auxiliar.length;i++) 
        {
            auxiliar[i].style.display="inline"
        }
    }    
    
}

function ocultar_boton_detalles () {
    if (btn_ocultar_detalles.style.display = 'inline') {  
        btn_mostrar_detalles.style.display = 'inline'; 
        btn_ocultar_detalles.style.display = 'none'    
        
        
        var auxiliar=document.getElementsByClassName('detalles') 
        for (var i=0;i<auxiliar.length;i++) 
        {
            auxiliar[i].style.display="none"
        }
    }    
    
          
    }    
    




/*Para incorporar WPA.*/
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("Service worker registrado."))
        .catch(err => console.log("Service worker no registrado.", err))
    })
  }