import './index.css';
import './App.css';
import {Header} from './components/Header';
import {Inicio} from './sections/Inicio';
import {Experiencia} from './sections/Experiencia';
import { Habilidades } from './sections/Habilidades';
import { Proyectos } from './sections/Proyectos';
import { Contacto } from './sections/Contacto';


function App() {
  return (
    <div class="App w-full h-full bg-black flex items-center flex-col">
      <Header />
      <main class="w-full h-full flex justify-center items-center flex-col"> 
        <Inicio />
        <Experiencia />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      
    </div>
  );
}

export default App;
