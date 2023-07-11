import { useEffect, useState } from "react";
import '../Styles/Personaje.css';
const Personaje = ({ isAActive, isWActive, isDActive, isSActive, isUpArrowActive }) => {
    const [ isJumping, setIsJumping ] = useState(false);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ isShooting, setIsShooting] = useState(false);
    const [ isDancing, setIsDancing] = useState(false);
    const [ isStanding, setIsStanding] = useState(false);
    const [ imagen, setImagen ] = useState('dancing.gif');
    // Margin bottom
    useEffect(() => {
        const boxCharacterStyle = document.getElementById('borderBottomCharacter').style;
        let toggle = true;
      
        const interval = setInterval(() => {
          if (toggle) {
            boxCharacterStyle.width = '50px';
            toggle = false;
          } else {
            boxCharacterStyle.width = '100px';
            toggle = true;
          }
        }, 700);
      
        return () => {
          clearInterval(interval);
        };
    }, []);
    
    // Dirección
    useEffect(()=>{
        const characterElementStyle = document.getElementById('character').style;
        if (isAActive) {
            characterElementStyle.transform = "scaleX(-1)";
        }
        if (isDActive) {
            characterElementStyle.transform = "scaleX(1)";
        }
    },[isAActive, isDActive]);

    // Activación de eventos
    useEffect(() => {
        // Correr
        const running = (isAActive || isDActive) && !isJumping ;
        setIsRunning(running);
      
        // Saltar
        let jumping = false;
        if (!isJumping) {
            jumping = isWActive;
            setIsJumping(isWActive);
            // Standing
            const standing = !jumping && !running && !isShooting && !isDancing;
            setIsStanding(standing);
        }
      
        // Shooting
        setIsShooting(isUpArrowActive);
      
        // Dancing
        const dancing = isSActive && !isJumping;
        setIsDancing(dancing);

      }, [isAActive, isWActive, isDActive, isSActive, isUpArrowActive, isJumping, isShooting, isDancing]);

    // Detección de eventos
    useEffect(()=>{
        // NOTAS
        // No puede correr y balar
        // Puede bailar y correr
        // Puede saltar y disparar

        if (isRunning) {
            setImagen('runningRight.gif');
        }
        if (isStanding) {
            setImagen('standRight.png');
        }
        if (isDancing) {
            setImagen('dancing.gif');
            if (isRunning) {
                setImagen('runningRight.gif');
            }
        }
        if (isShooting) {
            setImagen('shootRight.png');
            if (isJumping) {
                setImagen('jumpShootRight.png');
            }
        } else {
            if (isJumping) {
                setImagen('jumpRight.png');
            }
        }
    },[isJumping, isRunning, isShooting, isDancing, isStanding]);
    
    useEffect(()=>{
        const characterElementStyle = document.getElementById('character').style;
        if (isJumping) {
            setImagen('jumpRight.png');
            characterElementStyle.bottom = '60px';
            setTimeout(() => {
                characterElementStyle.bottom = '0px';
            }, 400);
            setTimeout(() => {
                setIsJumping(false);
            }, 800);
        }
    },[isJumping])


    return (
        <div className='ContainerPersonaje'>
            <img id="character" src={ `/personaje/${imagen}` } alt="character"/>
            <div className="borderBottom" id="borderBottomCharacter"></div>
            {/* {isJumping && <div> isJumping </div>}
            {isRunning && <div> isRunning </div>}
            {isShooting && <div> isShooting </div>}
            {isDancing && <div> isDancing </div>}
            {isStanding && <div> isStanding </div>} */}
        </div>
    )
}
export default Personaje;