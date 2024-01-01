let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Première demande',
            lien: './titre-sejour/premiere-demande.html',
        },
        {
            nom: 'Renouvellement',
            lien: './titre-sejour/renouvellement.html',
        },
        {
            nom: 'Changement de statut',
            lien: './titre-sejour/changement-de-statut.html',
        },
        {
            nom: 'Carte de résident (10 ans)',
            lien: './titre-sejour/carte-de-resident.html',
        },
        {
            nom: 'Modification',
            lien: './titre-sejour/modification.html',
        },
        {
            nom: 'Duplicata',
            lien: './titre-sejour/duplicata.html',
        },
        {
            nom: 'Changement d\'adresse',
            lien: './titre-sejour/changement-dadresse.html',
        },
        {
            nom: 'Retrait de titre de séjour',
            lien: './titre-sejour/retrait.html',
        },
        {
            nom: 'Visa long séjour valant titre de séjour (VLS-TS)',
            lien: './travaux.html',
        },
        {
            nom: 'Renouvellement de Récépissé',
            lien: './travaux.html',
        },
        {
            nom: 'Renouvellement d\'autorisation provisoire de séjour',
            lien: './travaux.html',
        },
        {
            nom: 'Renouvellement d\'attestation d\'asile',
            lien: './travaux.html',
        },
        {
            nom: 'Renouvellement d\'attestation de dépôt',
            lien: './travaux.html',
        },

    ]


    for (let i = 0; i < lesServices.length; i++) {
        services.innerHTML += `
            <div class="col-3 card text-white bg-dark mb-3 le-service" style="max-width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${lesServices[i].nom}</h5>
                    <a href="${lesServices[i].lien}" class="btn btn-light">Accéder</a>
                </div>
            </div>
        `
    }