
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
 
const Map = () => {
  const item = {
    name: "Location 1",
    location: {
      lat: 35.83933891206933,
      lng: 10.596995098871353,
      
    },
  };

  const mapStyles = {
    height: "540px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 35.50375766420796,
    lng: 11.06825419519464,
  };


  
  return (
    <div className="aboutUsElement">
    <LoadScript googleMapsApiKey="AIzaSyALxR5WrmM4qgy6uSKcz50jyNlSE3tPHNE">
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <MarkerF key={item.name} position={item.location} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};
export default Map;