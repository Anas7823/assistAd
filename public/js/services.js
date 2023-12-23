let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Rendez-vous préfecture',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Titre de séjour',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'DCEM',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Naturalisation',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Regroupement et reunification familiale',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Timbre fiscale',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Autorisation de travail',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Visa pour la France',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Etat-civil',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Carte nationale d\'identité française',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Passeport',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Permis de conduire',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Consulats',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Assurance maladie',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'CAF',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Logement',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Retraite',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Handicap',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Allocations chômage',
            lien: './page-service/travaux.html',
        },
        {
            nom: 'Impôts',
            lien: './page-service/travaux.html',
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
            lien: './page-service/travaux.html',
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