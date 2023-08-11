import { useState } from "react";
import Candy from "./Candy";
import '../Styles/Modal.css';
const Modal = ({setShowModal}) => {
    const [closeIsSelected, setCloseIsSelected] = useState(true);
    const [inputIsSelected, setInputIsSelected] = useState(false);
    const [enviarIsSelected, setEnviarIsSelected] = useState(false);
    const desactiveAll = () => {
        setCloseIsSelected(false);
        setInputIsSelected(false);
        setEnviarIsSelected(false);
    }
    const handleSend = ()=> {
        console.log('Sending...');
    }
    return (
        <div className="containerModal">
            <div className='modal'>
                    <Candy 
                        isActive={ closeIsSelected }
                        handleActive={ () => {} }
                        desactiveAll={ ()=> desactiveAll() }
                        toggleActive= { (toggle)=> setCloseIsSelected(toggle) }
                        activeBottom={ ()=> setInputIsSelected(true) }
                        handleSelect={ ()=> setShowModal(false) }>
                        <button className='buttonClose' onClick={ ()=> setShowModal(false) }>Close</button>
                    </Candy>
                    <Candy
                        isActive={ inputIsSelected }
                        desactiveAll={ ()=> desactiveAll() }
                        toggleActive= { (toggle)=> setInputIsSelected(toggle) }
                        activeTop={ ()=> setCloseIsSelected(true) }
                        activeBottom={ ()=> setEnviarIsSelected(true) }
                        idInput = 'miInput'>
                        <input className="miInput" id="miInput" placeholder='Escribe aquí'/>
                    </Candy>
                    <Candy
                        isActive={ enviarIsSelected }
                        desactiveAll={ ()=> desactiveAll() }
                        toggleActive= { (toggle)=> setEnviarIsSelected(toggle) }
                        activeTop={ ()=> setInputIsSelected(true) }
                        handleSelect={ ()=> { handleSend(); setShowModal(false); } }>
                        <button className='buttonEnviar' onClick={ ()=> { handleSend(); setShowModal(false); } }>Enviar</button>
                    </Candy>
            </div>
        </div>
    )
}
export default Modal;