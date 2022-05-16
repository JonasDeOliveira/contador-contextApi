import React from "react"
import { Switch, Route} from "react-router-dom"

import Home from './pages/Home'
import Other from './pages/Other'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/other" component={Other}/>
            <Route component={() => <div>Página não encontrada</div>}/>
        </Switch>
    )
}