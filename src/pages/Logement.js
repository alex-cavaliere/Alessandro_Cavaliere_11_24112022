import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Carousel from '../components/carousel/Carousel'

function Logement(){
    const {id} = useParams()
    const[data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(function(){
        fetch('/data/logements.json')
        .then(function(res){
            if(res.ok){
                return res.json()
            }
        })
        .then(function(data){
            setIsLoading(false)
            data.map((location) => {
                if(location.id === id){
                    setData(location)
                }
                return location
            })
        })
    },[isLoading])
    return(
        <>{!isLoading && (
        <div className="main">
        <Carousel pictures={data.pictures}/>
        <div className="main">
            <h1>{data.title}</h1>
        </div>
    </div>
    )}</>
    )
}

export default Logement