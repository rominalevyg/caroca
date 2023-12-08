const botonToggle = document.getElementById('hamburguesa');
const botonClose = document.getElementById('close');
const divNavegacion = document.getElementById('navegacion');

botonToggle.addEventListener('click', () => {

    botonToggle.style.display = 'none';
    botonClose.style.display = 'block';
    setTimeout(() => {
        divNavegacion.style.transform = 'translateY(459px)';
        divNavegacion.style.transition = '1.5s';

    }, 200);
});

botonClose.addEventListener('click' , ()=>{
   
    botonClose.style.display = 'none'; 
    botonToggle.style.display = 'block';
    setTimeout(()=>{
        divNavegacion.style.transform = 'translateY(-400px)';
    divNavegacion.style.transition = '2.5s';
    },300)
    
});

