import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { Navbar } from '../components/ui/Navbar'
import { SearchScreen } from '../components/search/SearchScreen'
    
export const DahsboardRoutes = () => {
    return (
        <>
            <Navbar></Navbar> 
            <div className='container mt-5'>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Route exact path="/heroe/:heroeid" component={HeroeScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Redirect to="/marvel"></Redirect>
                </Switch>    
            </div>   
            
        </>
    )
}
