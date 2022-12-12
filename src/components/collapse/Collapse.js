import './Collapse.css'
import chevron from '../../assets/images/chevron-down.svg'
//import {useState} from 'react'

function Collapse (props) {
    const content = props.content
    const title = props.title
    return(
        <div className='dropdown-item'>
            <div className='dropdown-menu'>
                <h3 className='dropdown-title'>{title}</h3>
                <img src={chevron} alt='dropdown-cevron'/>
            </div>
            <div className='dropdown-content'>
                {title === 'Equipements' ? <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{content}</p>}
            </div>
        </div>
    )
}

export default Collapse