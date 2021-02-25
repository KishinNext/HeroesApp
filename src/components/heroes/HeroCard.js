import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({hero}) => {
    return (
      
        <div className="col-*" >
            <div className="card mb-4" style={ {maxWidth: 540} }>
                <img src={`./assets/heroes/${hero.id}.jpg`} className="card-img" alt={hero.superhero}></img>
                <h5 className="card-title text-center">{hero.superhero}</h5>
                
                <p className="card-text text-center">{hero.characters}</p>
                
                <p className="card-text text-center">
                    <small className="text-muted card-text text-center">{hero.first_appearance}</small>
                </p>
                <Link className="btn btn-danger" to={`./heroe/${hero.id}`}>Mas..</Link>
            </div>
        </div>
      
    )
}
