const botonToggle = document.getElementById('hamburguesa');
const botonClose = document.getElementById('close');
const divNavegacion = document.getElementById('navegacion');



const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`);
    const texts = await requestJson.json();
    
    for(const textToChange of textsToChange) {
        const section=textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});



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

