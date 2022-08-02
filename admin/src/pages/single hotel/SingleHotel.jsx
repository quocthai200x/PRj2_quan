import {  useLocation } from "react-router-dom";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Single = () => {
  const location = useLocation();
  const path = location.pathname
  const { data, loading, error } = useFetch(`${path}`);
  const [hotelnfo, setHotelnfo] = useState({
    address: "",
    cheapestPrice: 0,
    city: "",
    desc: "",
    distance: "0",
    featured: true,
    name: "",
    photos: ['https://scr.vn/wp-content/uploads/2020/08/M%E1%BA%ABu-nh%C3%A0-vu%C3%B4ng.jpg'],
    rating: 4,
    rooms: [],
    title: "",
    type: "",
    _id: ""
  })
  useEffect(()=>{
    // console.log(data);
    if(data._id){
      setHotelnfo(data)
    }
  },[data])

  useEffect(() => {
    console.log(hotelnfo);
  }, [hotelnfo])
  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={hotelnfo.photos[0]}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{hotelnfo.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{hotelnfo.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{hotelnfo.city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Distance from central:</span>
                  <span className="itemValue">
                    {hotelnfo.distance}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rating:</span>
                  <span className="itemValue">{hotelnfo.rating}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{hotelnfo.desc}</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
