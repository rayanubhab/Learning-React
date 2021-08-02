import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Axios from "axios";


function App() {

//we are going to get data and we are going to store them in states
const [details,setDetails] = useState({})

//you can name the function anything it doesn't have to be anything related to Details
//Sending request in asynchronous manner
  const fetchDetails = async () => {
    
    const response = await Axios.get("https://randomuser.me/api/")
    const newData = response.data
    console.log("RESPONSE: ",newData)

    const details = newData.results[0]
    setDetails(details)
  
  };
  
  //useEffect is going to fire the function fetchDetails
  //If we don't pass anything in the array or list of dependencies then it means its going to run before the application loads
  useEffect(()=>{
    fetchDetails()
  },[]);

  return (<>
    <h1>Hello World</h1>
    <p>
  
   {JSON.stringify(details)}
    </p>
    </>
  );
}

export default App;
