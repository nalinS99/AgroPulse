import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axioaClient from '../axios-Client';

export default function Home() {

  const [data,setDate]=useState({});


  const fetchData= async()=>{
    try{
      const response =await axioaClient.get('/data');
      console.log(response)
<<<<<<< HEAD
      toast.success("ok")
=======

      toast.success("ok");
>>>>>>> f08df9eb2fca9f13db5c009d993ba4e57d79152a
    }catch(error){

      console.log(error)
      console.log("jhvhjv")
      toast.warn("not ok")

    }
  }


  return (
    <div>
        <h2 className=''>home</h2>

<Button onClick={fetchData}>ok</Button>


        
      
    </div>
  )
}