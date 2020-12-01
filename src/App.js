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

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="container">
        {/* <Greet name="Bruce" heroName="Batman">
            <p>This is children props</p>
          </Greet>
          <Greet name="Clark" heroName="Superman">
            <button>Action</button>
          </Greet>
          <Greet name="Diana" heroName="Wonder Woman" /> */}
        {/* <Message/> */}
        {/* <Counter/> */}
        {/* <NameList/> */}
        {/* <PostList/> */}
        {/* <PostForm/> */}
        {/* <EventBind/> */}
        {/* <Hookcounter/> */}
        {/* <Hookcounter2/> */}
        {/* <CakeContainer/> */}
        {/* <Icecreamcontainer/> */}
        {/* <ButtonWithScss/> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/"  className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">Posts</Link>
              </li>
              <li className="nav-item">
              < Link to="/details" className="nav-link">Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <Switch>
          <Route path="/" exact></Route>
          <Route path="/details" component={CrudForm}></Route>
          <Route path="/posts" exact component={PostList}></Route>
          <Route path="/postdetails/:id" component={PostDetails}></Route>
        </Switch>
        {/* <CrudForm/> */}
        {/* <Form/> */}
      </div>
      </Provider>
    </Router>
  );
}

export default App;
