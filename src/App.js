import logo from './logo.svg';
import './App.css';

function App() {
  let os = ["Android", "Blackberry", "Iphone", "Windows Phone"];
  let mobiles = ["Samsung","HTC","Micromax", "Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        {os.map((e) => {
          return <Os oss = {e} />
        })}
      </ul>
      <h1>Mobile manufacturers</h1>
      <ul>
        {mobiles.map((e) => {
          return <Mobiles oss = {e} />
        })}
      </ul>
    </div>
  );
}
function Os(props){
    // console.log(props)
    return <li>{props.oss}</li>
}
function Mobiles(props){
  // console.log(props)
  return <li>{props.oss}</li>
}
export default App;
