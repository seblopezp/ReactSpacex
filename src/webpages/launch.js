import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Launch = () => {
  const location = useLocation();
  const id = location.state;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launchDetail, setlaunchDetail] = useState([]);

  useEffect(() => {
    fetch(`https://api.spacexdata.com/v4/launches/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setlaunchDetail(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        <li key={launchDetail.id}>{launchDetail.name}</li>
      </ul>
    );
  }
};
export default Launch;
