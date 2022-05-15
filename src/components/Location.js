import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Residents from './Residents';
import RM from '../RM.gif'


const Location = () => {

    const [location, setLocation] = useState({});

    const [id, setId] = useState("");

    useEffect (() => {
        
        const random = Math.floor(Math.random()*126)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data));


    },[]);


    const searchType = () => {

        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data))
    }
    

    return (
        <>
            <div className='rmBg'>
                <img src={RM} alt="RickAndMorthy" />
            </div>

                <h3>{location.name}</h3>
                <div className='infoTitle'>
                    <p><b>Type: </b>{location?.type}</p>
                    <p><b>Dimension: </b>{location?.dimension}</p>
                    <p><b>Population: </b>{location.residents?.length}</p>
                </div>
                

                <div className='searchButton'>
                    <div className='button'>
                        <input className='input_text'
                        type="text" placeholder='    type a location id'
                        onChange={e => setId(e.target.value)}
                        value={id}
                        />
                        <button className='input' onClick={searchType}>Search</button>
                    </div>
                </div>
            <div className='location_header'>


                <ul className='residents-list'>
                    {location.residents?.map((resident) => (
                        <Residents url={resident} key={resident}/>
                    ))}
                </ul>

            </div>
        </>
    );
};

export default Location;