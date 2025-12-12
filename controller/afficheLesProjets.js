import { creeStructureProjet } from "./creeStructureArticle.js";

import("../model/projets.json", { with: { type: "json" } })
    .then((donnees) => {
        traiteDonnees(donnees.default.donnees);
    })
    .catch((erreur) => {
        console.error(erreur);
    });

function traiteDonnees(donnees) {
    const main = document.querySelector("main");

    const section = document.createElement("section");
    section.id = "projets";

    for (let index = 0; index < donnees.length; index++) {
        section.appendChild(creeStructureProjet(donnees[index]));
    }
    main.appendChild(section);
}
