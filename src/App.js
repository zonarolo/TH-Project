import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routes from './routes';

class App extends Component {
  getRoutes = (routes) => {
    return routes.map((prop, key) => (
      <Route
        path={prop.path}
        render={(props) => <prop.component {...props} />}
        key={key}
      />
    ));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header routes={routes} />
          <Switch>{this.getRoutes(routes)}</Switch>
        </header>
      </div>
    );
  }
}

export default App;
