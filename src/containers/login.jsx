import '../assets/style/login.css'
import { useState } from "react"

function login() {

  let caja = [{nombre:"rosario", contrasena:'pepe'+1 }, {nombre:"pepeloco", contrasena:'loco'}, {nombre:"jony", contrasena: "codeamos"}, {nombre:"peperina", contrasena: 'manzanilla'}]

  const [usuario, setUsuario] = useState("")
  const [clave, setClave] = useState(null)

  const handleChange = (e) => {
    if (e.target.name === "usuario") {
      setUsuario(e.target.value)
      console.log(`El usuario es ${e.target.value}`)
    } else {
      setClave(e.target.value)
      console.log(`La clave es ${e.target.value}`)
    }
  }

  let encontrar = () => {
    console.log('1 Se ha pulsado el boton de inicio de sesion')
    let posicionUsuario = caja.find((item) => item.nombre === usuario);
    let posicionClave = caja.find((item) => item.contrasena === clave);

    if  (!posicionUsuario || !posicionClave) {
        alert("NO TE DOY ACCESO, NO TENES ALGUN DATO!!");
        txt2.innerHTML +=  `<strong>¡ Intenta de nuevo ${usuario} !</strong>`;
  } else { alert('ENTRASTE!!')
  txt2.innerHTML +=  `Bienvenido <strong>${usuario}</strong>, te esperabamos!`;
}
}

  const handleClick = () => {
    console.log('1 Se ha pulsado el boton de inicio de sesion')
    console.log('2 encontrar se ejecuta: ', encontrar(usuario, clave))
    console.log('3 que hay en la caja: ', caja)
    console.warn(encontrar(usuario, clave))
  }


  return (
    <>
      <div className="txt">
        <h1>¡ Hola {usuario} ! </h1>
      </div>

      <div className='form-contenedor'>

        <h3 className="inicia-txt">Inicia sesión</h3>

        <div className="form-floating mb-3">
        <input type="text" className="form-control" id="usuario" placeholder="usuario" onChange={handleChange} name='usuario' />
          <label htmlFor="usuario" className='label-txt'>Usuario</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" onChange={handleChange} name='clave' />
          <label htmlFor="contraseña" className='label-txt'>Contraseña</label>
        </div>

        <div className="d-grid">
          <button className="btn btn-danger" type="submit" onClick={encontrar}>ENTRAR</button>
        </div>

        <p className="registrate">Registrate</p>

      </div>

      <div className="txt" >
        <h1 id="txt2"></h1>
      </div>
    </>
  )
}
export default login;