import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const OurTours = () => {
  const navitage=useNavigate()

  const url = "https://raw.githubusercontent.com/mkatay/json-tours/main/tours";

  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch(url);
      if (!response) {
        console.log("there is a problem with the json data");
      } else {
        const toursArr = await response.json();
        setTours(toursArr);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    console.log(tours)
  }, []);

  

  return (
    <>
      <div className="container-fluid py-5 blurred-bg d-flex flex-wrap justify-content-center">
        {loading && "wait a minute, loading..."}
        {tours &&
          tours.map((tour) => (
            <div key={tour.id} className="card m-1" style={{ width: "18rem" }}>
              <img src={tour.image} className="img-fluid card-img-top cardimg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{tour.name}</h5>
                <p className="card-text">{tour.info.slice(0,100)}</p>
                <p className="card-text">{tour.price}</p>
                <button onClick={()=>navitage(`/tours/${tour.id}`)}>
                 More details
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
