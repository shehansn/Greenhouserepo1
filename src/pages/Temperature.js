import React from 'react'
import {useState,useEffect} from 'react';
import fireDb from "../firebase";
import Navbar from '../components/Navbar';

const Temperature = () => {
    const [data,setData] =useState({});

  useEffect(() =>{
    fireDb.child("Temperature").on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setData({...snapshot.val()});
      }else{
        setData({});
      }
    });
    return()=>{
      setData({});
    };
  },[]);

  return (
<div style={{marginTop:"10px"}} className="tableFlex">
      {/* Temperature*/}
      <Navbar />
      <h2>Temperature</h2>
      <table className='styled-table'>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>ID</th>
            <th style={{textAlign:"center"}}>data</th>

          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id,index)=>{
            return(
              <tr key={id}>
                <th scope='row'>{index+1}</th>
                {/* <th scope='row'>{id}</th> */}
                <th scope='row'>{data[id]}</th>

              </tr>
            );
          })}
        </tbody>
      </table>

      
      </div>  )
}

export default Temperature