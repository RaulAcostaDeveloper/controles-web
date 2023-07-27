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
          let key = event.code || String.fromCharCode(event.keyCode || event.which);
          switchCases(key, true)
        }
        const handleKeyUp = (event) => {
          let key = event.code || String.fromCharCode(event.keyCode || event.which);
          switchCases(key, false)
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
                    <p>Use arrows A← W↑ D→ S↓ to navigate</p>
                    <p>Press space ⎵ to select an element</p>
                    <p>Press enter ↵ to accept in an input element (writing)</p>
                </div>
                    <Selectores/>
                    <Personaje
                        isAActive = { isAActive }
                        isWActive = { isWActive }
                        isDActive = { isDActive }
                        isSActive = { isSActive }
                        isEnterActive = { isEnterActive }
                        isSpaceActive = { isSpaceActive }/>
                </div>
                <div className='interiorControles'>
                    <Tecla 
                        keyword = { 'A←' } 
                        className = { 'AKeyword' } 
                        isActive = { isAActive } 
                        setActive = { setIsLeftArrowActive }/>
                    <Tecla 
                        keyword = { 'W↑' } 
                        className = { 'WKeyword' } 
                        isActive = { isWActive } 
                        setActive = { setIsWActive }/>
                    <Tecla 
                        keyword = { 'D→' } 
                        className = { 'DKeyword' } 
                        isActive = { isDActive }  
                        setActive = { setIsDActive }/>
                    <Tecla 
                        keyword = { '↵' } 
                        className = { 'SKeyword' } 
                        isActive = { isEnterActive }  
                        setActive = { setIsEnterActive }/>
                    <Tecla 
                        keyword = { '⎵' }
                        className = { 'UpArrowKeyword' } 
                        isActive = { isSpaceActive }  
                        setActive = { setIsSpaceActive }/>
                    <Tecla
                        keyword = { 'S↓' }
                        className = { 'DownArrowKeyword' } 
                        isActive = { isSActive }  
                        setActive = { setIsSActive }/>
                </div>
            </div>
        </div>
    )
}
export default CuadroControles;