
let tituloPrincipal = document.getElementById('tituloPrincipal')
tituloPrincipal.innerHTML = "<h2> ¡Bienvenidos! Ingrese sus datos por favor y producto que adquiere"
console.log(tituloPrincipal)

let buttonEnviar = document.getElementById('boton')

const swalBtn = document.getElementById('boton')

swalBtn.addEventListener('click', () => {
    Swal.fire({
        title: '¡Muchas gracias por ingresar los datos!',
        icon:'Success',
        confirmButtonText: "¡De nada!",
        timer:2000
    })
})

buttonEnviar.onclick = () => {

    let inputNombre = document.getElementById('nombre').value
    let inputApellido = document.getElementById('apellido').value
    let inputEmail = document.getElementById('email').value
    let inputContraseña = document.getElementById('password').value
    let inputProducto = document.getElementById('producto').value

    let div2 = document.getElementById('div2')
    div2.innerHTML = `<h1> Bienvenido ${inputNombre} ${inputApellido}</h1>
                <h2> Tu correo es ${inputEmail} y tu contraseña es ${inputContraseña}</h2>
                <h3> Su producto es ${inputProducto}</h3>`

    console.log(inputApellido, inputContraseña, inputEmail, inputNombre, inputProducto)

}

const formulario = document.getElementById('form1')
formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event.target.children[6].value)
}

let tituloColor = document.getElementById('imagen1')
tituloColor.onclick = () => {
    tituloColor.setAttribute("src", "https://jumpseller.s3.eu-west-1.amazonaws.com/store/sigad/assets/gracias-por-tu-compra.png")
}

const div2 = document.getElementById('div2')

div2.onmousedown = () => {
    console.log("Aca...")
}

div2.onmouseup = () => {
    console.log('Aca tambien...')
}

const formulario1 = document.getElementById('form1')

formulario.onclick = (e) => {
    e.preventDefault()
    if (e.target.children.length > 0) {
        for (const elemento of e.target.children) {
            if (
                elemento.tagName === 'INPUT' &&
                elemento.value &&
                elemento.type !== 'submit'
            ) {
                const obj = {}
                obj['nombre'] = elemento.name
                obj['valor'] = elemento.value
                localStorage.setItem(obj.nombre, obj.valor)
            }
        }
    }
}

const nombre = localStorage.getItem('name')
const apellido = localStorage.getItem('apellido')


// PROMESA // 
const clickeame = document.getElementById('clickeame')
const div8 = document.getElementById('div8')
let agradecer = {agradecer: '¡Que tengas un lindo dia!'}

function promesa(info){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(agradecer)
        }, 2000)
    })
}

clickeame.onclick = (e) => {
    e.preventDefault
    promesa()
    .then((respuesta)=> {
        let lindoDia = document.createElement('lindoDia')
        lindoDia.innerText=`${respuesta.agradecer}`
        div8.appendChild(lindoDia)
        
    })
}
