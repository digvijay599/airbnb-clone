import ReactMapGL,{Marker, Popup} from 'react-map-gl';

import { LocationMarkerIcon } from '@heroicons/react/solid';
import getCenter from 'geolib/es/getCenter';
import { useState } from "react";

function Map({searchResults}) {

      const [sectedLocation, setsectedLocation] = useState({})
    
    const coordinates = searchResults.map( result => ({
          longitude: result.long,
          latitude: result.lat,
      }));

      const center = getCenter(coordinates);

      const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude: center.longitude,
        longitude: center.latitude,
        zoom: 11,
      });

     return (
        <ReactMapGL
        mapStyle="mapbox://styles/digvijay007/ckss0njb22rms17qixa5o2nh5"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
      { searchResults.map( result => (
          <div key={result.long}>
          <Marker
          longitude= {result.long}
          latitude= {result.lat}
          offsetLeft={-20}
          offsetTop={-10}
          >
          <p 
          role="img"
          className="cursor-pointer text-2xl animate-bounce" 
          onClick={() => setsectedLocation(result)}
          aria-label="push-pin"
          >
          <LocationMarkerIcon className="h-6 text-red-500"></LocationMarkerIcon>
          </p>
          </Marker>
          { sectedLocation.long === result.long ? (
              <Popup 
                onClose={() => setsectedLocation({}) }
                closeOnClick={true}
                longitude= {result.long}
                latitude= {result.lat}
              >
              {result.title}
              </Popup>
          ) : (
              false
          )}
          </div>
      ))}
      
      </ReactMapGL>
    );
}

export default Map;
