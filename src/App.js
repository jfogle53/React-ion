import profileImage from './img/Chicago skyline of myself.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> James' Personal Website </h1>
      <h2>Author: James Fogle</h2>
      <img src={profileImage} alt="Profile Picture" width="50" height="120" style="border:5px solid black"></img>
    </div>
  );
}

export default App;
