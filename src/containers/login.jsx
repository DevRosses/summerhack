import '../assets/style/login.css'
import { useState } from "react"

function login() {

  let caja = [{usuario:"rosario", clave:1}, {usuario:"jony", clave:2}, {usuario:"pepeloco", clave:3}, {usuario:"peperina", clave:4}]

  const [usuario, setUsuario] = useState("")
  const [clave, setClave] = useState("")

  const handleChange = (e) => {
    if (e.target.name === "usuario") {
      setUsuario(e.target.value)
      console.log(`El usuario es ${e.target.value}`)
    } else {
      setClave(e.target.value)
      console.log(`La clave es ${e.target.value}`)
    }
  }

  const handleClick = () => {
    // Aquí va el código para validar    
      if (caja.findIndex((item) => item.usuario === usuario && item.clave === clave)) {
        txt2.innerHTML = `Bienvenido ${usuario} a nuestro sitio web.`
        console.log(`2El usuario es ${usuario}`)
        console.log(`2La clave es ${clave}`)
    } else {
      alert('Acceso denegado ¡ Intenta de nuevo !')
    }
  }

  const handleCheck = () => {
    // registro.style.display = "block";
    // login.style.display = "none";
  }

  return (
    <>
      <div className="txt">
        <h1>¡ Hola {usuario} ! </h1>
      </div>

      <div className='form-contenedor'>

        <h3 className="inicia-txt">Inicia sesión</h3>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="usuario" placeholder="Usuario" onChange={handleChange} name='usuario' />
          <label htmlFor="usuario" className='label-txt'>Usuario</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="contraseña" placeholder="Contraseña" onChange={handleChange} name='contraseña' />
          <label htmlFor="contraseña" className='label-txt'>Contraseña</label>
        </div>

        <div className="d-grid">
          <button className="btn btn-danger" type="submit" onClick={handleClick}>ENTRAR</button>
        </div>

        <p className="registrate" onClick={handleCheck}>Registrate</p>

      </div>

      <div className="txt" >
        <h1 id="txt2"></h1>
      </div>
    </>
  );
}

export default login;