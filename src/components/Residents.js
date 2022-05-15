import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({url}) => {

    const [resident, setResident] = useState({});

    useEffect(() => {
        axios.get(url)
        .then((res) => setResident(res.data));
    }, [url]);


    return (
        <div className="containerCharacters">
        <div className='characters'>
            <div className='imgResident'>
                <img src={resident.image} alt="" />
            </div>

            <div className="infoResident">
                <h2>{resident.name}</h2>
                <p className='statusColor'>{resident.status}</p>
                <p><b>Origin: </b>{resident.origin?.name}</p>
                <p><b>Episodes where appear: </b>{resident.episode?.length}</p>
            </div>
        </div>
        </div>
            
    );
};


export default Residents;