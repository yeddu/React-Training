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
import CrudList from './components/CrudList'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
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
      <CrudForm/>
      <CrudList/>
      {/* <Form/> */}
    </div>
    </Provider>
  );
}

export default App;
