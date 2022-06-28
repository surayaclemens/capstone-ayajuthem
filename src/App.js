import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import GameScreen from './Pages/GameScreen/GameScreen';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/play" exact component={GameScreen} />
            {/* <Route path="/route1:dynamic" exact component={} /> */}
          </Switch> 
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;