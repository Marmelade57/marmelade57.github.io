import { donnees } from "../model/projets.json";

console.info(donnees)

let section = document.querySelector("section");
let article = document.createElement("article");

for (const donnee of donnees) {
    console.info(donnee);
    article.innerHTML = "<h1>"+donnee.titre+"</h1><small>"+donnee.lieu+"</small><p>"+donnee.date+"</p>";
    section.appendChild(article);
}