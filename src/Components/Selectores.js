import { useState } from 'react';
import '../Styles/Selectores.css';
import Candy from './Candy';
import Modal from './Modal';
const Selectores = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ firstIsActive, setFirstIsActive ] = useState(true);
    const [ secondIsActive, setSecondIsActive ] = useState(false);
    const [ thirdIsActive, setThirdIsActive ] = useState(false);
    const [ fourthIsActive, setFourthIsActive ] = useState(false);
    const [ fifthIsActive, setFifthIsActive ] = useState(false);
    const [ sixthIsActive, setSixthIsActive ] = useState(false);
    const [ seventhIsActive, setSeventhIsActive ] = useState(false);
    const [ eighthIsActive, setEighthIsActive ] = useState(false);
    const [ ninthIsActive, setNinthIsActive ] = useState(false);

    const desactiveAll = () => {
        setFirstIsActive(false);
        setSecondIsActive(false);
        setThirdIsActive(false);
        setFourthIsActive(false);
        setFifthIsActive(false);
        setSixthIsActive(false);
        setSeventhIsActive(false);
        setEighthIsActive(false);
        setNinthIsActive(false);
    }
    const handleClickBox = ()=> {
        desactiveAll();
        setShowModal(true);
    }
    return (
        <div className="ContainerSelectores">
            { showModal && 
                <Modal setShowModal={(toggle)=> { setShowModal(toggle); desactiveAll(); setFirstIsActive(true) }}/>
            }
            <div className='cuadrícula'>
                <div className='línea'>
                    <Candy 
                        isActive={ firstIsActive }
                        toggleActive= { (toggle)=> setFirstIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeRight={ ()=> setSecondIsActive(true) }
                        activeBottom={ ()=> setFourthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>1</div>
                    </Candy>
                    <Candy 
                        isActive={ secondIsActive }
                        toggleActive= { (toggle)=> setSecondIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeLeft={ ()=> setFirstIsActive(true) }
                        activeBottom={ ()=> setFifthIsActive(true) }
                        activeRight={ ()=> setThirdIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>2</div>
                    </Candy>
                    <Candy 
                        isActive={ thirdIsActive }
                        toggleActive= { (toggle)=> setThirdIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeBottom={ ()=> setSixthIsActive(true) }
                        activeLeft={ ()=> setSecondIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>3</div>
                    </Candy>
                </div>
                <div className='línea'>
                    <Candy 
                        isActive={ fourthIsActive }
                        toggleActive= { (toggle)=> setFourthIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeBottom={ ()=> setSeventhIsActive(true) }
                        activeTop={ ()=> setFirstIsActive(true) }
                        activeRight={ ()=> setFifthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>4</div>
                    </Candy>
                    <Candy
                        isActive={ fifthIsActive }
                        toggleActive= { (toggle)=> setFifthIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeBottom={ ()=> setEighthIsActive(true) }
                        activeTop={ ()=> setSecondIsActive(true) }
                        activeLeft={ ()=> setFourthIsActive(true) }
                        activeRight={ ()=> setSixthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>5</div>
                    </Candy>
                    <Candy  
                        isActive={ sixthIsActive }
                        toggleActive= { (toggle)=> setSixthIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeBottom={ ()=> setNinthIsActive(true) }
                        activeTop={ ()=> setThirdIsActive(true) }
                        activeLeft={ ()=> setFifthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>6</div>
                    </Candy>
                </div>
                <div className='línea'>
                    <Candy  
                        isActive={ seventhIsActive }
                        toggleActive= { (toggle)=> setSeventhIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeTop={ ()=> setFourthIsActive(true) }
                        activeRight={ ()=> setEighthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>7</div>
                    </Candy>
                    <Candy
                        isActive={ eighthIsActive }
                        toggleActive= { (toggle)=> setEighthIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeTop={ ()=> setFifthIsActive(true) }
                        activeLeft={ ()=> setSeventhIsActive(true) }
                        activeRight={ ()=> setNinthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>8</div>
                    </Candy>
                    <Candy
                        isActive={ ninthIsActive }
                        toggleActive= { (toggle)=> setNinthIsActive(toggle) }
                        desactiveAll={ ()=> desactiveAll() }
                        activeTop={ ()=> setSixthIsActive(true) }
                        activeLeft={ ()=> setEighthIsActive(true) }
                        handleSelect={ ()=> setShowModal(true) }>
                        <div className='cuadrito' onClick={ ()=> handleClickBox() }>9</div>
                    </Candy>
                </div>
            </div>
        </div>
    )
}
export default Selectores;