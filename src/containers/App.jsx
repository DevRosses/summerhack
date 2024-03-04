
import '../assets/style/App.css'
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Login from '../containers/login.jsx';
import Bienvenida from '../containers/bienvenida.jsx';
import Registro from '../containers/registro.jsx';
import Principal from './principal.jsx';
import Notfound from './notFound.jsx';

function App() {

  return (
    <>
      <section className="form-layout">

        <Header></Header>

        <div className="main">
          <Bienvenida></Bienvenida>
          <Registro></Registro>
          <Login></Login>
          <Principal></Principal>
          <Notfound></Notfound>
        </div>

        <Footer></Footer>
      </section>
    </>
  )
}

export default App
