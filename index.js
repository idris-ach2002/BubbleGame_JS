let compteur = 0;

const bubbleMaker = () => {
    const bubble = document.createElement("span");

    bubble.classList.add("bubble");
    document.body.appendChild(bubble);

    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random()*100 + 50 + "%";
    bubble.style.left = Math.random()*100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty('--left',plusMinus * Math.random() * 100 + "%")
    //filter hue-rotate(Xdeg)
    //on lui dit de passer toutes les couleurs
    //de 0 à 720 deg
    //c'est un cercle trigonométrique coloré
    
    document.querySelector('h1').textContent = compteur;
    setTimeout(() => {bubble.remove();}, 8000);
    bubble.addEventListener("click", () => {
        compteur++;
        bubble.remove();
    })


};

setInterval(bubbleMaker, 300);
//on lui dit toutes les 3 dixième de secondes
//te joues la fonction
