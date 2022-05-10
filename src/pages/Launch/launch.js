import React from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/loading/loading";
import { useFetch } from "../hooks/useFetch";
import { constants } from "../utils/constants";
const Launch = () => {
  const location = useLocation();
  const id = location.state;
  const { SPACEX_API_URL } = constants;
  const { loading, data } = useFetch(`${SPACEX_API_URL}/launches/${id}`);

if (loading) {
    return <Loading />
  } else {
    return (
      <ul>
        <li key={data.id}>{data.name}</li>
        <li >{data.date_local}</li>
        <li >{data.date_unix}</li>
        <li >{data.details}</li>
      </ul>
    );
  }
};
export default Launch;
