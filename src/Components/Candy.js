// A Candy container contains an element that can be Active
// A class candyIsActive is actived when the element is Active
// Use a css style by the father class to change the view when the element is Active
// Example
// <Candy isActive={ firstIsActive }>
//   <div className='cuadrito'>1</div>
// </Candy> 
// .candyIsActive .cuadrito{
//     -webkit-box-shadow: 0px 0px 1px 4px rgba(0,0,0,0.75);
//     -moz-box-shadow: 0px 0px 1px 4px rgba(0,0,0,0.75);
//     box-shadow: 0px 0px 1px 4px rgba(0,0,0,0.75);
// }
// Use isActive to pass an state that actives the candy (required)
// isActive={ fifthIsActive }
// Use toggleActive to pass a function that toggle active to inactive that state (required)
// toggleActive= { (toggle)=> setFifthIsActive(toggle) }
// Use desactiveAll to pass a function that desactive all candys elements (required)
// It can handle actions when is bottom, top, left and right
// Example 
// const desactiveAll = () => {
//     setCloseIsSelected(false);
//     setInputIsSelected(false);
//     setEnviarIsSelected(false);
// }
// <Candy
//     isActive={ fifthIsActive }
//     toggleActive= { (toggle)=> setFifthIsActive(toggle) }
//     desactiveAll={ ()=> desactiveAll() }
//     activeBottom={ ()=> setEighthIsActive(true) }
//     activeTop={ ()=> setSecondIsActive(true) }
//     activeLeft={ ()=> setFourthIsActive(true) }
//     activeRight={ ()=> setSixthIsActive(true) }>
//     <div className='cuadrito'>5</div>
// </Candy>
// Use handleSelect to pass a function that runs when the element is selected with space
// <Candy 
//     isActive={ closeIsSelected }
//     desactiveAll={ ()=> desactiveAll() }
//     toggleActive= { (toggle)=> setCloseIsSelected(toggle) }
//     activeBottom={ ()=> setInputIsSelected(true) }
//     handleSelect={ ()=> setShowModal(false) }>
//     <button className='buttonClose'>Close</button>
// </Candy>
// Use handleActive to pass a function that runs when the element is active
// handleActive={ () => console.log('is active')}
// You can also trow many functions in a same handlers
// handleSelect={ ()=> { handleSend(); setShowModal(false); } }
// CANDY INPUT requires the id of the input to work correctly
// Example
//  <Candy
//     isActive={ inputIsSelected }
//     desactiveAll={ ()=> desactiveAll() }
//     toggleActive= { (toggle)=> setInputIsSelected(toggle) }
//     activeTop={ ()=> setCloseIsSelected(true) }
//     activeBottom={ ()=> setEnviarIsSelected(true) }
//     idInput = 'miInput'>
//     <input id="miInput" placeholder='Escribe aquí'/>
// </Candy>
// 


import { useEffect, useState } from 'react';
import '../Styles/Candy.css';
const Candy = ({isActive, handleActive, desactiveAll, toggleActive, activeLeft, activeRight, activeTop, activeBottom, handleSelect, idInput, children}) => {
    // handle keyboard
    useEffect(() => {

        const handleKeyDown = (event) => {
            if (!isActive) return;
        
            const key = event.code || String.fromCharCode(event.keyCode || event.which);
            switchCases(key);
        
            if (isActive && idInput && key.toLowerCase() === 'space') {
              selectInput(true, idInput);
            }
        };

        const switchCases = (key) => {
            const keyActions = {
                arrowdown: activeBottom,
                keys: activeBottom,
                arrowleft: activeLeft,
                keya: activeLeft,
                arrowup: activeTop,
                keyw: activeTop,
                arrowright: activeRight,
                keyd: activeRight,
                space: handleSelect,
              };

              const action = keyActions[key.toLowerCase()];
              if (action) {
                toggleActive(false);
                action();
              }
        };

        if (isActive && handleActive) {
            handleActive();
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isActive]);

    const onClickCandy = ()=> {
        desactiveAll();

        if (idInput) {
            selectInput(true, idInput);
        } else {
            toggleActive(true);
        }
    };

    const selectInput = (toggle, idInput)=> {
        const inputElement = document.getElementById(idInput);

        const salirDelInput = (event) => {
            if (event.key === 'Enter') {
                desactiveAll();
                activeBottom(true);
                selectInput(false, idInput); //Recursividad
            }
        }

        if (toggle) {
            inputElement.select();
            toggleActive(false);
            inputElement.addEventListener('keydown', salirDelInput);
        } else {
            inputElement.blur();
            inputElement.removeEventListener("keydown", salirDelInput);
        }
    };
    return (
        <div className={`candy ${isActive && 'candyIsActive'}`} onClick={ ()=> onClickCandy() }>
            { children }
        </div>
    )
}
export default Candy;