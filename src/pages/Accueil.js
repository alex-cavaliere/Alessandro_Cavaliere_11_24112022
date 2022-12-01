import Banner from "../components/banner/Banner"
import Card from "../components/card/Card"
import {useState} from 'react'

function Accueil(){
    const [cards, setCards] = useState([])
    fetch('./data/logements.json')
    .then(function(res){
        if (res.ok){
            return res.json();
        }
    })
    .then(function(data){
        setCards(data)
    })
    return(
        <div id="root">
            <Banner className="banner_1"/>
            <div className="card-container">
                {cards.map((card) => <Card key={card.id} card={card}/>)}
            </div>
        </div>
    )
}

export default Accueil