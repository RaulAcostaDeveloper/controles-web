import { useEffect, useState } from "react";
import '../Styles/Personaje.css';
const Personaje = ({ isAActive, isWActive, isDActive, isSActive, isUpArrowActive }) => {
    const [ isJumping, setIsJumping ] = useState(false);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ isFirstRender, setIsFirstRender ] = useState(true);
    const [ imagen, setImagen ] = useState('dancing.gif');
    useEffect(()=>{
        const boxCharacterStyle = document.getElementById('borderBottomCharacter').style;
        let toggle = true;
        setInterval(() => {
            if (toggle) {
                boxCharacterStyle.width = '50px';
                toggle = false;
            } else {
                boxCharacterStyle.width = '100px';
                toggle = true;
            }
        }, 700);
    },[]);

    useEffect(()=>{
        const characterElementStyle = document.getElementById('character').style;
        if (isJumping == false) {
            if (isWActive) {
                setIsJumping(true);
                characterElementStyle.bottom = '60px';
                setTimeout(() => {
                    characterElementStyle.bottom = '0px';
                }, 400);
                setTimeout(() => {
                    setIsJumping(false);
                    setImagen('standRight.png');
                }, 800);
            }
        }
    },[isWActive]);

    useEffect(()=>{
        if (isJumping) {
            setImagen('jumpRight.png');
            if (isUpArrowActive) {
                setImagen('jumpShootRight.png');
            }
        } else  {
            if (isAActive || isDActive) {
                setImagen('runningRight.gif');
            }
            if (isUpArrowActive){
                setImagen('shootRight.png');
            }
        }
    },[isJumping, isUpArrowActive]);

    useEffect(()=>{
        if (isUpArrowActive) {
            setImagen('shootRight.png');
            if (isJumping) {
                setImagen('jumpShootRight.png');
            }
        } else {
            if (isJumping == false) {
                setImagen('standRight.png');
            }
            if ((isAActive || isDActive) && isJumping == false) {
                setImagen('runningRight.gif');
            }
        }
    },[isUpArrowActive]);

    useEffect(()=>{
        const characterElementStyle = document.getElementById('character').style;
        if (isAActive) {
            characterElementStyle.transform = "scaleX(-1)";
        }
    },[isAActive]);

    useEffect(()=>{
        const characterElementStyle = document.getElementById('character').style;
        if (isDActive) {
            characterElementStyle.transform = "scaleX(1)";
        }
    },[isDActive]);

    useEffect(()=>{
        if (isAActive || isDActive) {
            if (isJumping === false && isUpArrowActive === false) {
                setImagen('runningRight.gif');
                setIsRunning(true);
            }
        } else {
            if (isJumping === false || isRunning === false){
                setImagen('standRight.png');
            }
        }
    },[isAActive, isDActive]);

    return (
        <div className='ContainerPersonaje'>
            <img id="character" src={ `/personaje/${imagen}` } alt="character"/>
            <div className="borderBottom" id="borderBottomCharacter"></div>
        </div>
    )
}
export default Personaje;