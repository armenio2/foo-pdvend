import React from 'react';
import GeneralPanel from './View/Panel/GeneralPanel';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <Header />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <GeneralPanel />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
