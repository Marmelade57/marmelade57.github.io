let erreurs = {
    "données": [
        {
            "code" : 404,
            "message" : "La page demandée n'existe pas"
        }
    ]
}

"<article style='display: block; width: 100%;'><div style='display: flex; gap: 16px;'><div><h1>Une erreur est survenue</h1><p>Code d'erreur : <span id='codeErreur'>"+code+"</span></p><p>Détails : <span id='explicationErreur'>"+message+"</span></p></div><img src='media/icons/crees/erreur.svg' alt='image erreur' style='height: 250px; width: 250px; aspect-ratio: 4/3;' /></div></article>";