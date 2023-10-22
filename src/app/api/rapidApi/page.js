"use client"
import { useEffect , useState } from "react";

const page = () => {
    const [data , setData] = useState([])
    const url = 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index?url=https%3A%2F%2Fwww.instagram.com%2Freel%2FCxgAOUUR8R6%2F';
    useEffect(() => {
        getData();
      }, []);
    const getData = async ()=>{
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'ecb9d20241msh7102207a58fc2ddp11af93jsn7db88459c16a',
              'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
            }
          };

          try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
          
    }
    return (
        <div>
            
        </div>
    );
};

export default page;