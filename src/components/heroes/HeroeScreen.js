import React,{useMemo} from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroeScreen = ({history}) => {

    const {heroeid} = useParams()
    
    const hero = useMemo(() => getHeroById(heroeid), [heroeid])
 

    if(!hero){
        return <Redirect to="/"></Redirect>
    }
    
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero
    

    const returns = () =>{
        if(history.length <=2){
            history.push('/')
        }else{
            history.goBack()
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${id}.jpg`} className="img-thumbnail animate__animated animate__fadeInLeft" alt={superhero}></img>
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>
                <h5>Characters:</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info" onClick={returns}>Return</button>
            </div>
        </div>
    )
}
