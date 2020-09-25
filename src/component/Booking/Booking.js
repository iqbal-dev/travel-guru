import React, { useContext, useState } from 'react';
import '../HomePage/HomePage.css';
import Data from '../../fakeDate/fakeDate';
import NavBar from '../Nav/NavBar';
import { Link, useHistory, useParams } from 'react-router-dom';
import './Booking.css';
import { Context } from '../../App';

const Booking = () => {
  const history = useHistory()
  const { id } = useParams();
  console.log(Number(id));
  const index = Number(id);
  const { idNo } = useContext(Context)
  const [indexId, setIndexId] = idNo;
  setIndexId(index);
  console.log(indexId)
  const details = Data.find(data => data.id === index);
  const handleSubmit = (e) => {
    history.push("/startbooking")
    e.preventDefault();
  }
  return (
 
     
      <div className="home-page overlay">
        <NavBar></NavBar>
        <div className="row">
        <div className="placeDetails">
            <div className="details">
                      <h1>{details.heading}</h1>
                      <p>{details.detail}</p>
          </div>
            </div>
            <div style={{width: '20%',right:'135px'}}>
                  <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Origin</label>
                          <input className="input" required type="text" name="" id="" placeholder="Enter your origin" />
                          <label htmlFor="">Destination</label>
                            <input className="input" required type="text" name="" id="" value={details.heading}/>
                        <div className="row" style={{width:'100%',marginBottom:'50px'}}>
                              <div style={{width:'45%',marginLeft:'15px'}}>
                              <label htmlFor="">From</label>
                                  <input className="input" required type="date" name="" id="" placeholder="day/month/year"/>
                               </div>
                              <div style={{width: '50%'}}>
                              <label htmlFor="">To</label>
                                 <input className="input"  required type="date" name="" id=""/>
                              </div>        
                          </div>
                        <input  type="submit" value="Start Booking"/>
                </form>
               </div>
            </div>
        </div>
        </div>
    );
};

export default Booking;