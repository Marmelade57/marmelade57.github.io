let donneesEtudes;

import("../model/etudes.json", { with: { type: "json" } })
    .then((donneesEtudes) => {
        traiteDonneesEtudes(donneesEtudes.default.donnees);
    })
    .catch((erreur) => {
        console.error(erreur);
    });

function traiteDonneesEtudes(donnees) { 
    const section = document.querySelector("section#scolaire");
    section.classList = "grille";
    let h1 = document.createElement("h1");
    h1.innerText = "Parcours scolaire";
    section.appendChild(h1);

    let div = document.createElement("div");
    let article;
    let h2;
    let small;
    let parcours;
    let p;
    let a;
    let button;
    
    for (let index = 0; index < donnees.length; index++) {
        article = document.createElement("article");
        article.id = "scolaire-"+(donnees[index].id+1);
        switch (donnees[index].statut) {
            case "fini":
                article.style.backgroundColor = "var(--fini)";
                break;
            case "plus tard":
                article.style.borderStyle = "dashed";
                break;
            default:
                break;
        }
        
        h2 = document.createElement("h2");
        h2.innerText = donnees[index].diplome + " - " + donnees[index].niveau
        parcours = document.createElement("small");
        parcours.innerHTML = donnees[index].specialisation
        small = document.createElement("small");
        small.innerText = "À "+ donnees[index].lieu +" sur la période " + donnees[index].date;
        p = document.createElement("p");
        p.id = "tags"
        
        for (let i = 0; i < donnees[index].tags.length; i++) {
            p.innerText += donnees[index].tags[i] + ", ";
        }
        p.innerText = p.innerText.slice(0,-2);

        a = document.createElement("a");
        a.href = "un_diplome.html?id="+(index+1);

        button = document.createElement("button");
        button.innerText = "En savoir plus";

        a.appendChild(button);
        
        article.append(h2,parcours,small,p,a);
        div.appendChild(article)
        section.appendChild(div);
    }

}