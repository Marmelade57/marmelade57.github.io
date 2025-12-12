let donneesTravail;

import("../model/travail.json", { with: { type: "json" } })
    .then((donneesTravail) => {
        traiteDonneesTravail(donneesTravail.default.donnees);
    })
    .catch((erreur) => {
        console.error(erreur);
    });

function traiteDonneesTravail(donnees) { 
    const section = document.querySelector("section#profession");
    section.className = "grille";
    let h1 = document.createElement("h1");
    h1.innerText = "Parcours professionnel";
    section.appendChild(h1);

    let article;
    let h2;
    let small;
    let p;
    let a;
    let button;
    
    for (let index = 0; index < donnees.length; index++) {
        article = document.createElement("article");
        article.id = "profession-"+donnees[index].id;
        
        h2 = document.createElement("h2");
        h2.innerText = donnees[index].profession
        small = document.createElement("small");
        small.innerText = "En "+ donnees[index].dates +" pour " + donnees[index].lieu;
        p = document.createElement("p");
        p.id = "missions"
        
        for (let i = 0; i < donnees[index].missions.length; i++) {
            p.innerText += donnees[index].missions[i] + ", ";
        }
        p.innerText = p.innerText.slice(0,-2);

        a = document.createElement("a");
        a.href = "un_travail.html?id="+(index+1);

        button = document.createElement("button");
        button.innerText = "En savoir plus";

        a.appendChild(button);
        
        article.append(h2,small,p,a);
        section.appendChild(article);
    }
}