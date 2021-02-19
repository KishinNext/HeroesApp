import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroeScreen = () => {

    const {heroeid} = useParams()
    
    const hero = getHeroById(heroeid)

    if(!hero){
        return <Redirect to="/"></Redirect>
    }
    
    const {id, superhero, publisher, alter_ego, first_appearance, characters} = hero
    console.log(hero)
    return (
        <div>
            <h1>Heroe Screen</h1>
        </div>
    )
}
