let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Rendez-vous préfecture',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Titre de séjour',
            lien: './page-service/titre-sejour.html',
        },
        {
            nom: 'DCEM',
            lien: './page-service/dcem.html',
        },
        {
            nom: 'Naturalisation',
            lien: './page-service/naturalisation.html',
        },
        {
            nom: 'Regroupement et reunification familiale',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Timbre fiscale',
            lien: 'https://timbres.impots.gouv.fr/index.jsp',
        },
        {
            nom: 'Autorisation de travail',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Visa pour la France',
            lien: './page-service/visa-pour-la-france.html',
        },
        {
            nom: 'Etat-civil',
            lien: './page-service/etat-civil.html',
        },
        {
            nom: 'Carte nationale d\'identité française',
            lien: './page-service/carte-nationale-identité-fr.html',
        },
        {
            nom: 'Passeport',
            lien: './page-service/passeport.html',
        },
        {
            nom: 'Permis de conduire',
            lien: './page-service/permis.html',
        },
        {
            nom: 'Consulats',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Assurance maladie',
            lien: './page-service/assurance-maladie.html',
        },
        {
            nom: 'CAF',
            lien: './page-service/caf.html',
        },
        {
            nom: 'Logement',
            lien: './page-service/logement.html',
        },
        {
            nom: 'Retraite',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Handicap',
            lien: './page-service/handicap.html',
        },
        {
            nom: 'Allocations chômage',
            lien: './page-service/allocations-chomages.html',
        },
        {
            nom: 'Impôts',
            lien: './page-service/impots.html',
        },
        {
            nom: 'Carte électorale',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'KBIS (UBER - Deliveroo - Just Eat)',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Casier judiciaire',
            lien: './page-service/casier-judiciaire.html',
        },
        {
            nom: 'Autres démarches administratives',
            lien: './page-service/travaux.html',
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