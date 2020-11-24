import logo from './logo.svg';
import './App.css';
import Message from './components/Message'
import Counter from './components/Counter'
import NameList from './components/NameList'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import Form from './components/Form'
import EventBind from './components/EventBind'
import Greet from './components/Greet'

function App() {
  return (
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
      <PostForm/>
      <EventBind/>
      {/* <Form/> */}
    </div>
  );
}

export default App;
