import React from "react";
import { useState, useEffect } from 'react';
import './photo.css'

export default function NasaPhoto() {
const [photoData, setPhotoData] = useState(null);

useEffect(() => {

fetchPhoto();

async function fetchPhoto() {
const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=mgQtHbfrg0skbblm2RJZyqNgGSuAA9gJ5bJA9hze');
const data = await res.json();
setPhotoData(data);
}

}, [])

if (!photoData) return <div />

return(
    <div id="photo">
        <img  
        src={photoData.url} 
        alt={photoData.title}
        />
        <div id="text">
            <h2>{photoData.title}</h2>
            <p>{photoData.date}</p>
            <p>{photoData.explanation}</p>
        </div>
    </div>
)

}


