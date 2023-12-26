let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'Par le droit du sol',
            lien: './travaux.html',
        },
        {
            nom: 'Par le double droit du sol',
            lien: './travaux.html',
        },
        {
            nom: 'Par decret ou réintégration',
            lien: './travaux.html',
        },
        {
            nom: 'Par mariage',
            lien: './travaux.html',
        },
        {
            nom: 'Par ascendant de français',
            lien: './travaux.html',
        },
        {
            nom: 'Par frère et soeur de français',
            lien: './travaux.html',
        },
        {
            nom: 'Stage de culture générale',
            lien: './travaux.html',
        }
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