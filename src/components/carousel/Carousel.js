import './Carousel.css'
import chevronLeft from '../../assets/images/chevron-left.svg'
import chevronRight from '../../assets/images/chevron-right.svg'
import {useState} from 'react'

function Carousel(props){
    const [imgIndex, setImgIndex] = useState(0)
    const {pictures} = props
    const [firstPic, setFirstPic] = useState(pictures[0])
    const nextPic = () => {
        if(imgIndex < pictures.length){
            setImgIndex(imgIndex + 1)
            setFirstPic(pictures[imgIndex])
        }else{
            setImgIndex(0)
            setFirstPic(pictures[0])
        }
    }
    return(
        <div className="carousel-container">
            <div className="carousel">
                <img src={firstPic}/>
                <div className='carousel-controls'>
                    <img src={chevronLeft} alt='chevronLeft'></img>
                    <img src={chevronRight} alt='chevronRight' onClick={nextPic}></img>
                </div>
            </div>
        </div>
    )
}

export default Carousel