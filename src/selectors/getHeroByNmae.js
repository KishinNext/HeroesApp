
import React from 'react'
import { heroes } from '../data/heroes'

export const getHeroByNmae = (name = '') => {
    if(name === ''){
        return []
    }
    
    name = name.toLocaleLowerCase()
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name))
}
