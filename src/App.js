import React from 'react';
import ScreenView from './View/ScreenView';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <div class="container-sm">
        <div class="row">
          <div class="col-12">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="col-2">
            <h1>menu lateral</h1>
          </div>
          <div class="col-10">
            <ScreenView />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
