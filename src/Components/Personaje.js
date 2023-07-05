import { useEffect, useState } from "react";
import '../Styles/Personaje.css';
const Personaje = ({ isAActive, isWActive, isDActive, isSActive, isUpArrowActive }) => {
    const [ isGround, setIsGround ] = useState(true);
    const [ isFirstRender, setIsFirstRender ] = useState(true);
    const [ imagen, setImagen ] = useState('');
    useEffect(()=>{
        let boxCharacterStyle = document.getElementById('borderBottomCharacter').style;
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
        if (isGround) {
            if (isUpArrowActive) {
                setIsGround(true);
                setImagen('shootRight.png');
            } else if (isDActive) {
                setIsGround(true);
                characterElementStyle.transform = "scaleX(1)";
                setImagen('runningRight.gif');
            } else if (isAActive) {
                setIsGround(true);
                characterElementStyle.transform = "scaleX(-1)";
                setImagen('runningRight.gif');
            } else if (isSActive) {
                setIsGround(true);
                setImagen('dancing.gif');
            } else if(isFirstRender){
                setIsGround(true);
                setImagen('dancing.gif');
            } else {
                setIsGround(true);
                setImagen('standRight.png');
            }
        }
        setIsFirstRender(false);
    }, [isAActive, isWActive, isDActive, isSActive, isUpArrowActive]);
    useEffect(()=>{
        const characterElementStyle = document.getElementById('character').style;
        if (isGround) {
            if (isWActive) {
                setIsGround(false);
                characterElementStyle.bottom = '60px';
                setImagen('jumpRight.png');
                if (isAActive || isDActive) {
                    setImagen('jumpShootRight.png');
                }
                setTimeout(() => {
                    characterElementStyle.bottom = '0px';
                    setImagen('jumpRight.png');
                }, 400);
                setTimeout(() => {
                    setImagen('standRight.png');
                    setIsGround(true);
                }, 800);
            }
        }
        setIsFirstRender(false);
    }, [isWActive]);
    return (
        <div className='ContainerPersonaje'>
            <img id="character" src={ `/personaje/${imagen}` } alt="character"/>
            <div className="borderBottom" id="borderBottomCharacter"></div>
        </div>
    )
}
export default Personaje;