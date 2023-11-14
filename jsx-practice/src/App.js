import imgFall from "./Images/fall.jpg"
import imgSpring from "./Images/spring.jpg"
import imgSummer from "./Images/summer.jpg"
import imgWinter from "./Images/winter.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Seasonal Website</h1>
      <div className= "imgContainer">
        <div className="imgBoxes">
          <img src= {imgSpring} className= "img"></img>
          <p>Spring time</p>
        </div>
        <div className="imgBoxes">
          <img src= {imgSummer} className= "img"></img>
          <p>Summer time</p>
        </div>
        <div className="imgBoxes">
          <img src= {imgFall} className= "img"></img>
          <p>Fall time</p>
        </div>
        <div className="imgBoxes">
          <img src= {imgWinter} className= "img"></img>
          <p>Winter time</p>
        </div>
      </div>
      <div className="bottomContainer">
          <h2>Some of my favorite seasonal activities are:</h2>
          <ul>
            <li>Hiking in the spring wildflowers</li>
            <li>Surfing in the summer sun</li>
            <li>Playing in the fall leaves</li>
            <li>Building snowmen in the winter</li>
          </ul>
      </div>   
    </div>
  );
}

export default App;
