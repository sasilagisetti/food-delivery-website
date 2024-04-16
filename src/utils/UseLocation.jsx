import { useEffect, useState } from "react";
const useLocation = () => {
  const [location, setLocation] = useState();
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({lat:position.coords.latitude,long: position.coords.longitude});
      });
    }
    // else{
    //   console.log("Geolocation is not supported by this browser.");
    // }
  }, []);
  return location;
};

export default useLocation;
