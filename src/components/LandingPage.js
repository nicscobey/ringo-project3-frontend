import {Switch, Route, useRouteMatch} from 'react-router-dom'
import Card from '../pages/Cards/Card'
import Decks from '../pages/Decks/Decks'
import DecksUpdate from '../pages/Decks/DecksUpdate'
import DecksShow from '../pages/Decks/DecksShow'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import DecksNew from '../pages/Decks/DELETE-DecksNew'
import { useState, useEffect } from 'react'
import { TableBody } from '@mui/material'
import Practice from '../pages/Practice'

const LandingPage = () => {

    let { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <Welcome  />
            </Route>
            <Route path={`${path}/login`}>
                <Login />
            </Route>
            <Route path={`${path}/signup`} render={(rp) => (
                    <Signup />
                )}
            />
        </Switch>
    )
}

export default LandingPage;