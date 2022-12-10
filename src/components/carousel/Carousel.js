import './Carousel.css'
import chevronLeft from '../../assets/images/chevron-left.svg'
import chevronRight from '../../assets/images/chevron-right.svg'
import {useState} from 'react'

function Carousel(props){
    const [imgIndex, setImgIndex] = useState(0)
    const {pictures} = props
    const [firstPic, setFirstPic] = useState(pictures[0])
    console.log(imgIndex)
    console.log(firstPic, pictures.indexOf(firstPic))
    const nextPic = () => {
        if(imgIndex < pictures.length){
            setImgIndex(imgIndex + 1)
            setFirstPic(pictures[imgIndex])
        }else{
            setImgIndex(0)
            setFirstPic(pictures[0])
        }
    }
    const prevPic = () => {
        if(imgIndex > 0){
            setImgIndex(imgIndex - 1)
            setFirstPic(pictures[imgIndex - 1])
        }else{
            setImgIndex(pictures.length)
            setFirstPic(pictures[imgIndex])
        }
    }
    return(
        <div className="carousel">
            <img src={firstPic} alt={'photo_' + imgIndex}/>
            {pictures.length > 1 && <div className='carousel-controls'>
                <img src={chevronLeft} alt='chevronLeft' onClick={prevPic}></img>
                <img src={chevronRight} alt='chevronRight' onClick={nextPic}></img>
            </div>}
        </div>
    )
}

export default Carousel