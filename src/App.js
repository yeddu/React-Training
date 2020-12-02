// import logo from './logo.svg';
import './App.scss';
import Message from './components/Message'
import Counter from './components/Counter'
import NameList from './components/NameList'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Form from './components/Form'
import EventBind from './components/EventBind'
import Greet from './components/Greet'
import Hookcounter from './components/HookCounter'
import Hookcounter2 from './components/HookCounter2'
import CakeContainer from './components/CakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import Icecreamcontainer from './components/IceCreamContainer';
import ButtonWithScss from './components/ButtonWithScss'
import CrudForm from './components/CrudForm'
// import CrudList from './components/CrudList'
import PostDetails from './components/PostDetails'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Nav from './components/Pages/Nav';
import Home from './components/Pages/Home'
import PublicRoute from './utils/PublicRoute';
import PrivateRoute from './utils/PrivateRoute';
import SignIn from './components/Pages/SignIn';
import Dashboard from './components/Pages/Dashboard';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="container">
        <Nav/>
        <Switch>
          <PublicRoute path="/" exact component={Home}></PublicRoute>
          <PublicRoute path="/signin" component={SignIn} />
          <PrivateRoute path="/dashboard" exact component={Dashboard}></PrivateRoute>
          <PrivateRoute path="/details" component={CrudForm}></PrivateRoute>
          <PrivateRoute path="/posts" exact component={PostList}></PrivateRoute>
          <PrivateRoute path="/postdetails/:id" component={PostDetails}></PrivateRoute>
        </Switch>
        {/* <CrudForm/> */}
        {/* <Form/> */}
      </div>
      </Provider>
    </Router>
  );
}

export default App;
