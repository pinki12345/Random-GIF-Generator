import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export const useGif = (tag) => {

const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=&rating=g`;
const randonMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S&tag=${tag}=g`;

    
    const [gif, setGif] = useState('');
    const[loading, setLoading]=useState('false')

    async function fetchData(tag){
       setLoading(true);
       const {data} = await axios.get(tag ? tagMemeUrl : randonMemeUrl);
       const imageSource = data.data.images.downsized_large.url;
       setGif(imageSource);
       setLoading(false);
    }

    useEffect ( ()=> {
        fetchData('car');
    },[])

  return{gif,loading,fetchData};
    
  
}
