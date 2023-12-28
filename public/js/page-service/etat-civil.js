let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Acte de naissance',
            lien: './travaux.html',
        },
        {
            nom: 'Acte de mariage',
            lien: './travaux.html',
        },
        {
            nom: 'Acte de décès',
            lien: './travaux.html',
        },
        {
            nom: 'Dossier de mariage',
            lien: './travaux.html',
        },
        {
            nom: 'Dossier de pacs',
            lien: './travaux.html',
        },
        {
            nom: 'Concubinage',
            lien: './travaux.html',
        },
        {
            nom: 'Livret de famille',
            lien: './travaux.html',
        },
        
        {
            nom: 'Transcription d\'un mariage à Nantes',
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