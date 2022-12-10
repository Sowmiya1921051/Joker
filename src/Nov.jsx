import React, { useEffect, useState } from 'react'
import './Nov.css'
function Nov() {
  const [joke,setJoke]=useState("")
  async function getData(){
    const res=await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
    const load= await res.json();
    setJoke(load);
    console.log(load)
  }
  useEffect(
    ()=>{
      
      getData();
    },[]);
  return (
    <>
    <div className='joke'>
       <h1 className='cata'> Title - {joke?.category}</h1>
       <h1> {joke?.setup}</h1>
       <h1> {joke?.delivery}</h1>
       <button className='btn' onClick={ ()=>getData()}>
        <b>Click Me</b>
      </button>
    </div>
    </>
  )
}

export default Nov