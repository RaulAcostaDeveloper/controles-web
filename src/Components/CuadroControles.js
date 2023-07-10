import '../Styles/CuadroControles.css';
import Personaje from './Personaje2';
import Tecla from './Tecla';
import { useEffect, useState } from 'react';
const CuadroControles = () => {
    const [isAActive, setIsAActive] = useState(false);
    const [isWActive, setIsWActive] = useState(false);
    const [isDActive, setIsDActive] = useState(false);
    const [isSActive, setIsSActive] = useState(false);
    const [isUpArrowActive, setIsUpArrowActive] = useState(false);
    useEffect(() => {
        const switchCases = (key, toggle) => {
            switch (key.toLowerCase()) {
                case 'a':
                    setIsAActive(toggle)
                    break;
                case 'w':
                    setIsWActive(toggle)
                    break;
                case 'd':
                    setIsDActive(toggle)
                    break;
                case 's':
                    setIsSActive(toggle)
                    break;
                case 'arrowup':
                    setIsUpArrowActive(toggle)
                    break;
                default:
                    break;
              }
        }
        const handleKeyDown = (event) => {
          let key = event.key || String.fromCharCode(event.keyCode || event.which);
          switchCases(key, true)
        }
        const handleKeyUp = (event) => {
          let key = event.key || String.fromCharCode(event.keyCode || event.which);
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
                    <Personaje
                        isAActive = { isAActive }
                        isWActive = { isWActive }
                        isDActive = { isDActive }
                        isSActive = { isSActive }
                        isUpArrowActive = { isUpArrowActive }
                    />
                </div>
                <div className='interiorControles'>
                    <Tecla 
                        keyword = { 'A' } 
                        className = { 'AKeyword' } 
                        isActive = { isAActive } 
                        setActive = { setIsAActive }/>
                    <Tecla 
                        keyword = { 'W' } 
                        className = { 'WKeyword' } 
                        isActive = { isWActive } 
                        setActive = { setIsWActive }/>
                    <Tecla 
                        keyword = { 'D' } 
                        className = { 'DKeyword' } 
                        isActive = { isDActive }  
                        setActive = { setIsDActive }/>
                    <Tecla 
                        keyword = { 'S' } 
                        className = { 'SKeyword' } 
                        isActive = { isSActive }  
                        setActive = { setIsSActive }/>
                    <Tecla 
                        keyword = { '↑' }
                        className = { 'UpArrowKeyword' } 
                        isActive = { isUpArrowActive }  
                        setActive = { setIsUpArrowActive }/>
                </div>
            </div>
        </div>
    )
}
export default CuadroControles;