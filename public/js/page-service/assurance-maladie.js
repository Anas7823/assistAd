let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'AME',
            lien: './assurance-maladie/ame.html',
        },
        {
            nom: 'Carte vitale',
            lien: './assurance-maladie/carte-vitale.html',
        },
        {
            nom: 'CSS (CMU)',
            lien: './assurance-maladie/css.html',
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