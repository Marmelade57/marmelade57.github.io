let donneesCertification;

import("../model/certifications.json", { with: { type: "json" } })
    .then((donneesCertification) => {
        traiteDonneesCertification(donneesCertification.default.donnees);
    })
    .catch((erreur) => {
        console.error(erreur);
    });

function traiteDonneesCertification(donnees) { 
    const section = document.querySelector("section#certification");
    section.classList = "grille";
    let h1 = document.createElement("h1");
    h1.innerText = "Certifications";
    section.appendChild(h1);

    let article;
    let h2;
    let small;
    let p;
    let a;
    let button;
    
    for (let index = 0; index < donnees.length; index++) {
        article = document.createElement("article");
        article.id = "certification-"+donnees[index].id;
        switch (donnees[index].statut) {
            case "fini":
                article.style.backgroundColor = "var(--fini)";
                break;
            default:
                break;
        }
        
        h2 = document.createElement("h2");
        h2.innerText = donnees[index].certification + " - " + donnees[index].niveau
        small = document.createElement("small");
        small.innerText = "En "+ donnees[index].annee +" à " + donnees[index].lieu;
        p = document.createElement("p");
        p.id = "tags"
        
        for (let i = 0; i < donnees[index].tags.length; i++) {
            p.innerText += donnees[index].tags[i] + ", ";
        }
        p.innerText = p.innerText.slice(0,-2);

        a = document.createElement("a");
        a.href = "une_certification.html?id="+(index+1);

        button = document.createElement("button");
        button.innerText = "En savoir plus";

        a.appendChild(button);
        
        article.append(h2,small,p,a);
        section.appendChild(article);
    }

}