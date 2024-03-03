
import '../assets/style/App.css'
import Formulario from '../components/Formulario.jsx'
import imagen from '../assets/statics/back.jpg'

function App() {

  return (
    <>
      <section className="form-layout">

        <div className="header">
          <h6>Header</h6>
        </div>

        <div className="main">
          <Formulario></Formulario>
        </div>
        
        <div className="footer">
          <h6>Footer</h6>
        </div>

      </section>
    </>
  )
}

export default App
