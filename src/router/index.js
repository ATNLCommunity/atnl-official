import {Link,Route, Redirect,Switch,HashRouter as Router} from 'react-router-dom'
import React from 'react';
import Home from '../page/home/App'
import Token from '../page/token/Token'
class RouterContaner extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <div className='router'>
                    <Switch>
                        <Route exact path="/" render={
                            ()=>{ return <Redirect to="/home" />}
                        }>
                        </Route>
                        <Route path='/home' component = {Home}/>
                        <Route path='/token' component = {Token}/>
                    </Switch>
                </div> 
            </Router>
        )
    }
}
export default RouterContaner