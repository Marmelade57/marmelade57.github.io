export function creeStructureProjet(donnees) {
    let article = document.createElement("article");
    article.id = donnees.id;
    let couleurFond = ""
    switch (donnees.statut) {
        case "fini":
            couleurFond = "var(--fini)"
            break;
        case "idee":
            couleurFond = "white"
            break;
        default:
            couleurFond = ""
            break;
    }
    article.style = 'background-color:' + couleurFond;

    let titre = document.createElement("h1");
    titre.innerText = donnees.titre;
    article.appendChild(titre);
    
    let small = document.createElement("small");
    small.innerText = donnees.lieu + " ; " + donnees.date;
    article.appendChild(small);

    let listetags = document.createElement("p");
    donnees.tags.forEach((unTag) => {
        listetags.innerText += "#" + unTag + ", ";
    });
    listetags.innerText = listetags.innerText.slice(0, -2)
    article.appendChild(listetags);
    
    let lien = document.createElement("a");
    lien.href = "un_projet.html?id=" + donnees.id;
    
    let boutonLien = document.createElement("button");
    boutonLien.innerText = "En savoir plus";
    lien.appendChild(boutonLien);
    article.appendChild(lien);

    return article;
}