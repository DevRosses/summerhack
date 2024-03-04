
import '../assets/style/App.css'
import Formulario from '../components/Formulario.jsx';
import Logo from '../assets/statics/POPCORN.svg'

function App() {

  return (
    <>
      <section className="form-layout">

        <div className="header">
          <img src={Logo} alt='popcorn logo' className='logo'/>
        </div>

        <div className="main">
          <Formulario></Formulario>
        </div>
        
        <div className="footer">
          <p>Rosario Ramos 2024 | SummerHack</p>
        </div>

      </section>
    </>
  )
}

export default App
