import React from 'react';
import ScreenView from './View/ScreenView';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import { LogoNexaas } from './assets';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container-sm containerApp">
        <div class="row align-items-center styleHeader">
          <div class="col-12 col-md-2 styleLogo" >
            <img src={LogoNexaas} />
          </div>
          <div class="col-12 d-none d-sm-block d-md-none" >
             <p>SugarMenu</p>
          </div>
          <div class="col-12 col-md-10 d-none" >
            <Header />
          </div>
        </div>
        <div class="row styleBody">
          <div class="d-none d-md-block col-md-2" style={{ paddingRight: 0 }}>
            <SideNav />
          </div>
          <div class="col-12 col-md-10" style={{ padding: 0 }}>
            <ScreenView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
