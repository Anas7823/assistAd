let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Acte de naissance',
            lien: './etat-civil/naissance.html',
        },
        {
            nom: 'Acte de mariage',
            lien: './etat-civil/acte-de-mariage.html',
        },
        {
            nom: 'Acte de décès',
            lien: './etat-civil/acte-de-deces.html',
        },
        {
            nom: 'Dossier de mariage',
            lien: './etat-civil/dossier-de-mariage.html',
        },
        {
            nom: 'Dossier de pacs',
            lien: './etat-civil/pacs.html',
        },
        {
            nom: 'Concubinage',
            lien: './etat-civil/concubinage.html',
        },
        {
            nom: 'Livret de famille',
            lien: './etat-civil/livret-de-famille.html',
        },
        
        {
            nom: 'Transcription d\'un mariage à Nantes',
            lien: './etat-civil/transcription-mariage-nantes.html',
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