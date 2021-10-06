import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import Rules from './components/rules/Rules'
import Quiz from './components/quiz/Quiz'
import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <Quiz/>

      <Switch>
        <Route path='/signup' component={Signup} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/rules' component={Rules} exact />

      </Switch>
      

    </div>
  );
}

export default App;
