let header = document.createElement("header");
let liens = {
    "donnees" : [
        {
            "nom": "Accueil",
            "lien": "accueil.html",
            "style": ""
        },
        {
            "nom": "Projets",
            "lien": "projets.html",
            "style": ""
        },
        {
            "nom": "Parcours",
            "lien": "parcours.html",
            "style": ""
        },
    ]
}

function traitementLien(){
    let getLienSplit = (window.location.href).split("/");
    return getLienSplit[getLienSplit.length -1];
}

let lienActuel = traitementLien();

for (let index = 0; index < liens.donnees.length; index++) {
    header.innerHTML += "<a href='"+liens.donnees[index].lien+"' "+(liens.donnees[index].lien === lienActuel ? "class='selectionne'" : "")+(liens.donnees[index].style.length > 0 ? " style="+liens.donnees[index].style+" >" : " >")+liens.donnees[index].nom+"</a>";
}

document.body.append(header);
