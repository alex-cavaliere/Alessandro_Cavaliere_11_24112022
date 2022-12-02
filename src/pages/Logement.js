import {useState} from 'react'
import {useParams} from 'react-router-dom'
import Banner from '../components/banner/Banner'

function Logement(){
    const {id} = useParams()
    const[data, setData] = useState([])
    fetch('/data/logements.json')
    .then(function(res){
        if(res.ok){
            return res.json()
        }
    })
    .then(function(data){
        data.map((location) => {
            if(location.id === id){
                setData(location)
            }
            return location
        })
    })
    return(
    <div>
        <Banner className='banner_2'/>
        <h1>{data.title}</h1>
    </div>
    )
}

export default Logement