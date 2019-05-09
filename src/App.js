import React from 'react';
import ScreenView from './View/ScreenView';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';
import { LogoNexaas } from './assets';

function App() {
  return (
    <div className="App">
      <div style={styleContainer} class="container-sm">
        <div style={styleHeader} class="row">
          <div style={styleLogo} class="col-2" >
            <img src={LogoNexaas} />
          </div>
          <div class="col-10" >
            <Header />
          </div>
        </div>
        <div style={styleBody} class="row">
          <div class="col-2" style={{ paddingRight: 0 }}>
            <SideNav />
          </div>
          <div class="col-10" style={{ padding: 0 }}>
            <ScreenView />
          </div>
        </div>
      </div>
    </div>
  );
}

const styleContainer = {
  height: '100vh',
}

const styleHeader = {
  height: '8vh',
  borderBottom: 'solid 2px #C6D3D7',
}

const styleBody = {
  height: '92vh',
}

const styleLogo = {
  borderRight: 'solid 2px #C6D3D7',
  padding: '22px',
  paddingLeft: '3%'
}

export default App;
