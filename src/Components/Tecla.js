import '../Styles/Tecla.css';
const Tecla = ({ keyword, className, isActive, setActive }) => {
    return (
        <div className={ 'teclaContainer ' + className  }>
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