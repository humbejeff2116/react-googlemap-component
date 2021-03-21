import React, {useEffect} from 'react';
import Proptypes from 'prop-types';
import map from './src/map';
import mapLoader from './src/loader';


export default function GoogleMapComponent(props) {
   useEffect(()=> {
     mapLoader(props)
     .then(()=> {
       map(props);
     })
   },[])
   return (
     <div id = {props.id} > <div>
     )
}
GoogleMapComponent.Proptypes = {
  id : Proptypes.string.isRequired,
  apiKey,
  version,
  latitude,
  longitude,
  zoom
}