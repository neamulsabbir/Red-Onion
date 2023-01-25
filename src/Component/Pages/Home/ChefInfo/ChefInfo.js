import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../../../Shared File/useTitle/useTitle';
import './ChefInfo.css'

const ChefInfo = () => {
    useTitle('Chef Detail')
    const {chefSlag} = useParams()
    // console.log(router)

    const [details,setDetails] = useState([])
    useEffect(() => {
        fetch('/chef_info.json')
        .then(res => res.json())
        .then(data => 
            data?.map(items => {
                const findChefDetail = items?.chefInfo?.find(chefItem => chefItem.slag === chefSlag)
                setDetails(findChefDetail)
            }))
    },[]) 

    return (
        <div className='chefinfo-container'>
           <img src={details.img}></img>
           <div className='chefinfo-details'>
           <h1>{details.name}</h1>
           <p style={{marginTop:'20px'}}>{details?.description}</p>
           </div>
        </div>
    );
};

export default ChefInfo;