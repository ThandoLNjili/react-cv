import React, { Component } from 'react';

//import custom css styling
import './App.css';

//import bootstrap framework for easier design
import 'bootstrap/dist/css/bootstrap.min.css';
//import font-awesome icons
import 'font-awesome/css/font-awesome.min.css'

//import various app componenets
import Profile from './Component/Profile';
import CV from './Component/CV';

//App class that renders and display app content
class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='container'>
          <div className='row'>
            <aside className='col-md-4'>
              <div className='inner'>
                <Profile />
              </div>
            </aside>
            <main className='col-md-8'>
              <div className='inner'>
                <CV />
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }
}

//export to allow use on other components
export default App;