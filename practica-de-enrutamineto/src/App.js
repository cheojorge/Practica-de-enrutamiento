import React from 'react';
import { Router } from '@reach/router';
import { Home } from './Components/Home';
import { Hello } from './Components/Hello';
import { Variable } from './Components/Variable';
function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <Hello path="/:word"/>
            <Variable path="/:text/:colorText/:backColor"/>
        </Router>
    </div>
  );
}
export default App;