import { useEffect } from 'react';
import '../Styles/Tecla.css';
const Tecla = ({ keyword, className, isActive, setActive }) => {
    useEffect(()=>{
        const element = document.getElementById(className + 'id');
        element.addEventListener("touchstart", () => setActive(true));
        element.addEventListener("touchend", () => setActive(false));
        element.addEventListener("touchcancel", () => setActive(false));
        element.addEventListener("touchleave", () => setActive(false));
        // element.addEventListener("touchmove", handleMove, false);
    },[])
    return (
        <div className={ 'teclaContainer ' + className  } id={className + 'id'}>
            <div 
                className={ `interior ${ isActive } ` }
                onMouseDown={ () => setActive(true) }
                onMouseUp={ () => setActive(false) }>
                { keyword } 
            </div>
        </div>
    )
}
export default Tecla;