import logo from './logo.svg';
import './App.css';
import MyGreetings from './components/Greetings';
import GreetingsClass from './components/GreetingsClass';

function App() {
  return (
    <div className="App">
      <MyGreetings userName="NGIT and KMIT Students" />
      <GreetingsClass/>
    </div>
  );
}



export default App;
