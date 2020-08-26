import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter,Switch, Route} from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';



function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {!user?(<Login/>)
      
      :(<div className='app__body'>
        <BrowserRouter>
        
        <Sidebar/>
          <Switch>
            <Route  path='/rooms/:roomId'>
                  
              <Chat/>

            </Route>
    
            <Route path='/'>
              <h2>Home</h2>

            </Route>
          </Switch>

        </BrowserRouter>
        
      </div>)}
      
    </div>
  );
}

export default App;
