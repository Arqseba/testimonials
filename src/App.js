
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros clientes acerca de nuestros productos:</h1>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='chica1'
          cargo='Ingeniero de Software'
          empresa='Spotify'
          testimonio='Me encanto todo muy bueno deberia completar un poco mas el texto para ver si sale completo o no, jajaja' />
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='hombre1'
          cargo='Ingeniero de Software'
          empresa='Spotify'
          testimonio='Me encanto todo muy bueno deberia completar un poco mas el texto para ver si sale completo o no, jajaja' />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='chica2'
          cargo='Ingeniero de Software'
          empresa='Chatdesk'
          testimonio='Me encanto todo muy bueno deberia completar un poco mas el texto para ver si sale completo o no, jajaja' />
        
      </div>
    </div>
  );
}

export default App;
