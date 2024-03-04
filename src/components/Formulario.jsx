import '../assets/style/formulario.css'
import { useState } from "react"

function Formulario() {
  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")

  const handleChange = (e) => {
    if (e.target.name === "usuario") {
      setUsuario(e.target.value)
    } else {
      setContrasena(e.target.value)
      console.log(`La contraseña es ${e.target.value}`)
    }
  }

  const handleClick = () => {
    if( usuario == 'rosario' && contrasena == '1'){
      txt2.innerHTML = `Bienvenido ${usuario} a nuestro sitio web.`
  } else{
    alert('Acceso denegado ¡ Intenta de nuevo !')}
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

      </div>

      <div className="txt" >
        <h1 id="txt2"></h1>
      </div>
    </>
  );
}

export default Formulario;