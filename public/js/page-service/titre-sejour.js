let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Première demande',
            lien: './travaux.html',
        },
        {
            nom: 'Renouvellement',
            lien: './travaux.html',
        },
        {
            nom: 'Changement de statut',
            lien: './travaux.html',
        },
        {
            nom: 'Carte de résident (10 ans)',
            lien: './travaux.html',
        },
        {
            nom: 'Modification',
            lien: './travaux.html',
        },
        {
            nom: 'Duplicata',
            lien: './travaux.html',
        },
        {
            nom: 'Changement d\'adresse',
            lien: './travaux.html',
        },
        {
            nom: 'Retrait de titre de séjour',
            lien: './travaux.html',
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