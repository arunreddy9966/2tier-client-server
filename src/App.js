//import logo from './logo.svg';
import './App.css';

function App() {

  let [arr,setArr] = useState([]);


let getCelebrities = async()=>{
let reqOptions = {
 method:"GET"
}

let JSONData= await fetch("http://localhost:9966/celebrities",reqOptions);

let JSOData = await JSONData.json();

setArr(JSOData);

console.log(JSOData);

};

let getPoliticians = async()=>{
  let reqOptions = {
   method:"GET"
  }
  
  let JSONData= await fetch("http://localhost:9966/politicians",reqOptions);
  
  let JSOData = await JSONData.json();
  
  setArr(JSOData);
  
  console.log(JSOData);
  
  };
  

  return (
    <div className="App">
      <button onClick={()=>{
        getCelebrities();
      }} >Get Celebrities</button>

      <button onClick={()=>{
        getPoliticians();
      }} >Get Politicians</button>

      <hr></hr>

      {arr.map((ele,i)=>{
        return <h2 key={i}>{ele}</h2>
      })};
    </div>
  );
}

export default App;
