import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserDetails } from './pages/UserDetails';
import UserHome from './pages/UserHome';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UserHome} />
        <Route path='/details/:id' component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
