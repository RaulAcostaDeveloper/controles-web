import '../Styles/CuadroControles.css';
import Personaje from './Personaje';
import Selectores from './Selectores';
import Tecla from './Tecla';
import { useEffect, useState } from 'react';
const CuadroControles = () => {
    const [isSActive, setIsSActive] = useState(false);
    const [isAActive, setIsLeftArrowActive] = useState(false);
    const [isWActive, setIsWActive] = useState(false);
    const [isDActive, setIsDActive] = useState(false);
    const [isEnterActive, setIsEnterActive] = useState(false);
    const [isSpaceActive, setIsSpaceActive] = useState(false);
    useEffect(() => {
        const switchCases = (key, toggle) => {
            switch (key.toLowerCase()) {
                case 'arrowdown':
                    setIsSActive(toggle)
                    break;
                case 'keys':
                    setIsSActive(toggle)
                    break;
                case 'arrowleft':
                    setIsLeftArrowActive(toggle)
                    break;
                case 'keya':
                    setIsLeftArrowActive(toggle)
                    break;
                case 'arrowup':
                    setIsWActive(toggle)
                    break;
                case 'keyw':
                    setIsWActive(toggle)
                    break;
                case 'arrowright':
                    setIsDActive(toggle)
                    break;
                case 'keyd':
                    setIsDActive(toggle)
                    break;
                case 'enter':
                    setIsEnterActive(toggle)
                    break;
                case 'space':

                    setIsSpaceActive(toggle)
                    break;
                default:
                    break;
              }
        }
        const handleKeyDown = (event) => {
            
            console.log(event);
          let key = event.code || String.fromCharCode(event.keyCode || event.which);
          switchCases(key, true);
          if (key.toLowerCase() == 'space') {
            // No permite el scroll por space pero no puedes dejar espacios en inputs.
          }
        }
        const handleKeyUp = (event) => {
          let key = event.code || String.fromCharCode(event.keyCode || event.which);
          switchCases(key, false);
        }
    
        // Agregar el evento 'keydown' al componente montado
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        // Limpiar el evento al desmontar el componente
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    
    return (
        <div className="CuadroControles">
            <div className="interior">
                <div className='interiorEscenario'>
                    <div>
                        <p>Usa las flechas A← W↑ D→ S↓ para <b>viajar</b> entre elementos</p>
                        <p>Presiona espacio ⎵ para <b>seleccionar</b> un elemento</p>
                        <p>Presiona enter ↵ para <b>continuar desde un elemento de escritura</b></p>
                    </div>
                    <Selectores/>
                    <a className='liga' target='_blank' href='https://controles-personaje-web.vercel.app/'>Click aquí para ver al personaje que se mueve con controles</a>
                </div>
            </div>
        </div>
    )
}
export default CuadroControles;