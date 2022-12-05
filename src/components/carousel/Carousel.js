import './Carousel.css'
//import {useState} from 'react'

function Carousel(props){
    console.log(props.pictures)
    const {pictures} = props
    const firstPic = pictures[0]
    return(
        <div className="carousel-container">
            <div className="carousel">
                <img src={firstPic}/>
            </div>
        </div>
    )
}

export default Carousel