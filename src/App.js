import React from 'react';
import ScreenView from './View/ScreenView';
import Header from './Components/Header/Header';
import SideNav from './Components/SideNav/SideNav';

function App() {
  return (
    <div className="App">
      <div style={styleContainer} class="container-sm">
        <div style={styleHeader} class="row">
          <div class="col-12">
            <Header />
          </div>
        </div>
        <div style={styleBody} class="row">
          <div class="col-2">
            <SideNav />
          </div>
          <div class="col-10">
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
  height: '10vh',
}

const styleBody = {
  height: '90vh',
}

export default App;
