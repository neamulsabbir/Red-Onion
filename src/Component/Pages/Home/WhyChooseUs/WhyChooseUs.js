import React, { useEffect, useState } from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import './WhyChooseUs.css'


const WhyChooseUs = () => {
    const [details,setDetails] = useState([])
    useEffect(() => {
        fetch('chef_info.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    
    return (
        <div  className='choose-container'>
            {
                details.map(detail=> <ChefDetails key={detail.id} detail={detail}></ChefDetails> )
            }
        </div>
    );
};

export default WhyChooseUs;