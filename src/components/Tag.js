import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { useGif } from '../hooks/useGif';


 const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {


    const[tag, setTag]=useState('car');
    // const [gif, setGif] = useState('');
    // const[loading, setLoading]=useState('false')

    // async function fetchData(){
    //     setLoading(true);
    //    const url = `https://api.giphy.com/v1/gifs/random?api_key=74uC5HJquMpcbUgUEZsMFRsnqvkTkkd8&tag=${tag}=g`;
    //    const {data} = await axios.get(url);
    //    const imageSource = data.data.images.downsized_large.url;
    //    setGif(imageSource);
    //    setLoading(false);
    // }


    // useEffect ( ()=> {
    //     fetchData();
    // },[])

    const {gif, loading, fetchData}=useGif(tag);

    
    function changeHandler(event){
       setTag(event.target.value)
    }

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
       <h1 className='text-2xl underline font-bold'>Random {tag} GIF</h1>

       {
        loading ? (<Spinner></Spinner>):(<img src={gif} width="450"></img>)
       }

       <input
       className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
       onChange={changeHandler}
       value={tag}></input>
     
       <button 
       onClick={()=> fetchData(tag)}
       className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]">
       Generate</button>
    </div>
  )
}

export default Tag
