import React,{useState,useEffect} from 'react';



const App = () =>{
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);
  useEffect(()=>{
    alert("you clicked me.")
  },[num]);
  // if we pass empty array then it will show after refesh only 
// like this
  // useEffect(()=>{
  //   alert("you clicked me.")
  // },[]);


  return(
    <>
    <button onClick={()=>{setNum(num+1)}}> click Me {num}</button>
    <br/>
    <button onClick={()=>{setNums(nums+1)}}> click Me {nums}</button>
    </>
  )
};




export default App;

