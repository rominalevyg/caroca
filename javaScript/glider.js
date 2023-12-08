const carruselUniversidad = ()=>{
  new Glider(document.querySelector('.carrusel-lista-universidad'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots-universidad',
    itemWidth: 300,
    arrows: {
      prev: '.carrusel-anterior-universidad',
      next: '.carrusel-siguiente-universidad'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ]


 } );
}

const carruselLucrecia = ()=>{
  new Glider(document.querySelector('.carrusel-lista-lucrecia'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots-lucrecia',
    itemWidth: 300,
    arrows: {
      prev: '.carrusel-anterior-lucrecia',
      next: '.carrusel-siguiente-lucrecia'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ]


 } );
}

const CarruselPersepolis = ()=>{
  new Glider(document.querySelector('.carrusel-lista-persepolis'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots-persepolis',
    itemWidth: 300,
    arrows: {
      prev: '.carrusel-anterior-persepolis',
      next: '.carrusel-siguiente-persepolis'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ]


 } );
}

const carruselAires = ()=>{
  new Glider(document.querySelector('.carrusel-lista-aires'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots-aires',
    arrows: {
      prev: '.carrusel-anterior-aires',
      next: '.carrusel-siguiente-aires'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2 ,
          slidesToScroll: 1,
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ]


 } );
}

const carruselWhales = ()=>{
  new Glider(document.querySelector('.carrusel-lista-wale'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots-wale',
    itemWidth: 300,
    arrows: {
      prev: '.carrusel-anterior-wale',
      next: '.carrusel-siguiente-wale'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 450,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      }
    ]


 } );
}
window.addEventListener('load', function(){
  carruselUniversidad();
  carruselLucrecia();
  CarruselPersepolis();  
  carruselAires();
  carruselWhales(); 
  
  });



