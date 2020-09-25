import { Map } from 'google-maps-react';
import React, { useContext} from 'react';
import { Context } from '../../App';
import Data from '../../fakeDate/fakeDate';
import NavBars from '../NavsBars/NavBars';
import "./Hotel.css";
import { GoogleApiWrapper} from 'google-maps-react';


const Hotel = (props) => {
    const { idNo } = useContext(Context);
    const [indexId] = idNo;
    console.log(indexId);
    const hotel = Data.find(data => data.id === indexId);
    const mapStyles = {
        width: '100%',
        height: '100%'
    };
    const latitude = hotel.lat;
    const longitude = hotel.lng;
    console.log(latitude, longitude);

    return (
        <div>
            <NavBars></NavBars>
            
            <div className="hotel-container">
            <span></span>
                <div className="row">
                    <div className="col-6">
                        <h4 style={{marginLeft:'20px'}}> Stay in {hotel.heading}</h4>
            {
                hotel.hotelDetails.map(detail => <div className="row m-2">
                    <div className="col-md-6">
                        <img style={{width:'270px',height:'188px'}} src={detail.img} alt=""/>
                    </div>
                    <div className="col-md-6"> 
                        <h4>{detail.heading}</h4>
                        <p>{detail.placeDetails}</p>
                        <p>${detail.price}</p>
                    </div>
                </div>)
            }
            </div>
                    <div className="col-md-6">
                        
                    <Map
                        google={props.google}
                        zoom={10}
                        style={mapStyles}
                        initialCenter={
                        {
                            lat: latitude,
                            lng: longitude
                        }
                        }
                        >
                    </Map>
                    </div>
                    
                    </div>
            </div>
            </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD-isXwxlcTNFtXIEcT2dgrLqR6-_Qe2TY")
    
    
})(Hotel);