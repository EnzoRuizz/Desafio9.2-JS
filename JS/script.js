const arrayPersonas = [
    {img: 'https://via.placeholder.com/200', nombre: "Homero", edad: 36},
    {img: 'https://via.placeholder.com/200', nombre: "Marge", edad: 34},
    {img: 'https://via.placeholder.com/200', nombre: "Bart", edad: 10},
    {img: 'https://via.placeholder.com/200', nombre: "Lisa  ", edad: 8},
    {img: 'https://via.placeholder.com/200', nombre: "Maggie", edad: 1},
]

const contenedorPersonas = document.getElementById('container-familia')

arrayPersonas.forEach((persona) => {
    const div = document.createElement('div')
    div.className = "card-img-top text-center m-4"
    div.style = "width: 18rem"
    
    div.innerHTML = `
                    <img src=${persona.img} class="card-img-top" alt="lorem">
                    <div class="card-body">
                        <h5 class="card-title">${persona.nombre}</h5>
                        <p class="card-text">edad: ${persona.edad}</p>
                    </div>
                `
    
    contenedorPersonas.appendChild(div)
})