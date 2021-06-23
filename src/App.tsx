import './App.css';
import Discover from './features/discover/Discover';
import { Redirect, Route, Switch } from 'react-router-dom';
import MovieDetails from './features/movieDetails/MovieDetails';

const App = () => (
  <Switch>
    <Route exact path='/movies' component={Discover} />
    <Route exact path='/movies/:movieId' component={MovieDetails} />
    <Route exact path="/">
      <Redirect to="/movies" />
    </Route>
  </Switch>
);

export default App;
