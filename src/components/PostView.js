import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import HeaderBar from './HeaderBar'

//import NavBar from './components/NavBar'
//import HomeView from './components/HomeView'
//import RoomView from './components/RoomView'

import '../css/PostView.css'

class PostView extends React.Component {
	render() {
		return (
			<BrowserRouter>
                <div>
                    <HeaderBar/>
                </div>
                <div className="App">
                    {/*
                        <NavBar/>
                        
                        <Route exact path='/home' component={HomeView}/>
                        <Route path='/room1' component={RoomView}/>
                    */}
                </div>
            </BrowserRouter>
        )
	}
}

export default PostView