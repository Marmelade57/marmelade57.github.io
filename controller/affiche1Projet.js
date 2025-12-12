import("../model/projets.json", { with: { type: "json" } }).then((donnees) => { traiteDonnees(donnees.default.donnees) }).catch((erreur) => { console.error(erreur) });

function traiteDonnees(donnees) {    
    let idProjet = window.location.href.split("id=")[1] - 1;

    let article = document.createElement("article");
    article.id = donnees[idProjet].id;
    let couleurFond = ""
    switch (donnees[idProjet].statut) {
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

    let titre = document.createElement("h1");
    titre.innerText = donnees[idProjet].titre;
    article.appendChild(titre);

    let listetags = document.createElement("p");
    listetags.id = "listeTags"
    let tag;
    donnees[idProjet].tags.forEach((unTag) => {
        tag = document.createElement("a");
        tag.innerText = unTag;
        listetags.append(tag);
    });
    article.appendChild(listetags);
    
    let infos = document.createElement("p");
    infos.innerText = "Fait à " + donnees[idProjet].lieu + " durant la période " + donnees[idProjet].date;
    article.appendChild(infos);

    
    let statut = document.createElement("p");
    statut.id = "statut";
    statut.innerHTML = "Statut : " + donnees[idProjet].statut + (donnees[idProjet].statut === 'fini' ? "<img src='media/icons/crees/check.svg' style='height:16px; margin:0; vertical-align: middle;' />" : "");
    article.appendChild(statut);

    let description = document.createElement("p");
    description.innerText = donnees[idProjet].description;
    article.appendChild(description);

    /* let lien = document.createElement("a");
    lien.style = "display: grid; justify-items: end;"
    lien.href = "un_projet.html?id=" + donnees[idProjet].id;

    let boutonLien = document.createElement("button");
    boutonLien.innerText = "En savoir plus";
    lien.appendChild(boutonLien);

    article.appendChild(lien); */

    const section = document.createElement("section");
    section.appendChild(article);

    const main = document.querySelector("main");
    main.appendChild(section);
}