import React, {useMemo} from 'react'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import queryString from 'query-string'
import { getHeroByNmae } from '../../selectors/getHeroByNmae'
export const SearchScreen = ({history}) => {

    const { search } = useLocation()

    const { q = '' } = queryString.parse(search)
    const initialForm = {
        searchText: q
    }

    const [value, handleInputChange] = useForm(initialForm)
    const {searchText} = value

    
    const heroesFilter = useMemo(() => getHeroByNmae( q ), [q])
    
    const takeName = (e) =>{
        e.preventDefault()
        // heroesFilter = heroesFilter.filter(item => item.superhero)
        history.push(`?q=${searchText}`)
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr></hr>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr></hr>
                    <form onSubmit={takeName}>
                        <input 
                        placeholder="Find your hero"
                        type="text"
                        className="form-control"
                        name="searchText"
                        value = {searchText}
                        onChange={handleInputChange}
                        >
                        </input>
                        <button
                        type="submit"
                        className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    {
                        q === '' &&
                            <p className="alert alert-info">Search a Hero</p>
                    }
                    {
                       ( q !== '' && heroesFilter.length === 0) && 
                            <p className="alert alert-danger">There is not hero with {q}</p>
                    }


                    {
                        heroesFilter.map(hero=>(
                            <HeroCard key={hero.id} hero={hero}></HeroCard>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
