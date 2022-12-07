import './Carousel.css'
import chevronLeft from '../../assets/images/chevron-left.svg'
import chevronRight from '../../assets/images/chevron-right.svg'
import {useState} from 'react'

function Carousel(props){
    const [imgIndex, setImgIndex] = useState(1)
    const {pictures} = props
    const [firstPic, setFirstPic] = useState(pictures[0])
    const nextPic = () => {
        setImgIndex(imgIndex + 1)
        if(imgIndex < pictures.length){
            setFirstPic(pictures[imgIndex])
        }else{
            setImgIndex(1)
            setFirstPic(pictures[0])
        }
        console.log(imgIndex)
    }
    const prevPic = () => {
        setImgIndex(imgIndex - 1)
        if(imgIndex === 1){
            setImgIndex(pictures.length)
        }
        console.log(imgIndex)
        setFirstPic(pictures[imgIndex - 1])
    }
    return(
        <div className="carousel-container">
            <div className="carousel">
                <img src={firstPic}/>
                {pictures.length > 1 && <div className='carousel-controls'>
                    <img src={chevronLeft} alt='chevronLeft' onClick={prevPic}></img>
                    <img src={chevronRight} alt='chevronRight' onClick={nextPic}></img>
                </div>}
            </div>
        </div>
    )
}

export default Carousel