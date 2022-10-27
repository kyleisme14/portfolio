import {useEffect, useState} from 'react';
import Axios from 'axios';
import './FactApi.css'


function FactApi() {
    const [catFact, setCatFact] = useState("");

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
    });
    }
    useEffect(() => {
        fetchCatFact(); 
    }, []);




  return (
    <div className='api-card'>
        <div className='cards__item'>
            <div className='cards__item__link'>
            <button className='api-button' onClick={fetchCatFact}>Random Cat Fact</button>
            <h3 className='cards__item__text'>{catFact}</h3>
            </div>
        </div>
    </div>
  )
}

export default FactApi