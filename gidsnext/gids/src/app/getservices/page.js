

"use client"

//filter categories with product complete code


import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from 'next/image';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const Services = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/get/categories")
      .then((res) => {
        setCategories(res.data.category);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the selected category
    if (selectedCategory === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => item.category === selectedCategory);
      setFilteredData(filtered);
    }
  }, [selectedCategory, data]);

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Category List</h2>

      <div>
        <h2>Side Bar</h2>
        <div>
          <button onClick={() => handleFilter("")}>All Categories</button>
          {categories?.map((cat) => (
            <button key={cat._id} onClick={() => handleFilter(cat._id)}>
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1320]">
      {filteredData?.length > 0 ? (
          filteredData.map((serviceItem) => (
   

<div>


<div className="max-w-[1320px] mx-auto ">
            <h1 className="text-2xl text-center py-5">Feature Product</h1>
        </div> 
        
        
        <div className="container max-w-[1320] max-auto mx-12 grid lg:grid-cols-4 md:grid-cols-2 gap-12 px-[20px] ">


            <div className='text-center shadow-lg rounded max-h-max hover:scale-125' >
               <div className='overflow-hidden'>
                
               <Image
    src={`http://localhost:5000/api/files/${serviceItem?.imageUrl}`}// Make sure this is the correct path or URL
  width={500} // Adjust width according to your design
  height={500} // Adjust height according to your design
  alt={serviceItem.title} // Provide an appropriate alt text
/>
                
                {/*<Image src={`http://localhost:5000/${serviceItem?.imageUrl}`} width={500} height={500} alt="" />*/}</div>
                <h1 className='py-5 text-3xl'> {serviceItem?.desc}</h1>
                <p className='pb-10'>2500</p>
            </div>

</div>

            
           {/* <Card className="flow" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`http://localhost:5000/${serviceItem?.imageUrl}`} alt="" />
            
            <Card.Body>
                <Card.Title className='title'>{serviceItem?.title}</Card.Title>
                <Card.Text className="desc">
                    {serviceItem?.desc}
                </Card.Text>
                <Button variant="primary" className="card-btn">Go somewhere</Button>
            </Card.Body>
          </Card>
          */}
          </div>
           
          ))
        ) : (
          <div>No products found</div>
        )}

        
      </div>
    </div>
  );
};

export default Services;








/*
//get services saifi code orginal with redux

import axios from 'axios'
import { useEffect, useState } from 'react';
import './Service.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector } from 'react-redux';
import {getServices} from '../reducers/serviceReducer'


const Services = (props) => {

    const dispatch = useDispatch();
    const state = useSelector( state => state.serviceReducer);

    console.log(state, 13)
    //const [data, setData] = useState([]);
    const [filter, setFilter] = useState('')

    
    useEffect(() => {
       dispatch(getServices())         
    }, []);

    return (
        <>
         {!props.hideSearchBar &&  ( <input className="filter" 
            placeholder="Search Box"
             value={filter} 
             onChange={(e) => setFilter(e.target.value)} /> )}  



            <div className="flex service-sides" >
                {
                    state && 
                    state.servicesData &&
                    state.servicesData.length > 0 ?
                    state.servicesData
                            .sort((a, b) => a.title > b.title ? 1 : -1)
                            .filter(item => {
                                return item.title.toLowerCase().includes(filter.toLocaleLowerCase()) || item.description.toLowerCase().includes(filter.toLocaleLowerCase())
                            })
                            .map((serviceItme, serviceIndex) => {
                                return (

                                    <Card className="flow" style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`http://localhost:5000/${serviceItme?.imageUrl}`} />
                                        
                                        <Card.Body>
                                            <Card.Title className='title'>{serviceItme?.title}</Card.Title>
                                            <Card.Text className="desc">
                                                {serviceItme?.description}
                                            </Card.Text>
                                            <Button variant="primary" className="card-btn">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                )
                            }) :
                        'No Data Found'
                }

                { /*
                data.length > 0 ?
                    data.map((serviceItme, serviceIndex) => {
                        return (
                            <div className="card grid-container">
                                <div className='title'>{serviceItme?.title} </div>
                                <div className="desc">{serviceItme?.description} </div>


                            </div>
                        )
                    }) :
                    'No Data Found'
                 }

            </div>
        </>
    )
}

export default Services;

*/