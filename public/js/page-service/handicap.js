let services = document.querySelector('#services')
    let lesServices = [
        {
            nom: 'A.A.H',
            lien: './handicap/aah.html',
        },
        {
            nom: 'P.C.H',
            lien: './handicap/pch.html',
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