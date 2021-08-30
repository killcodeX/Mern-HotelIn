import React,{ useState } from "react";
import { DisclaimerText } from "./style";

export default function Completed() {
  const [data, setData] = useState(true);

  if (data) {
    return (
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-sm-around align-items-center">
            <img
              src={
                "https://jsak.goibibo.com/pwa_v3/gimima/images/gisrvrError.1e07eff2.png"
              }
              alt="banner"
            />
            <DisclaimerText>
              Looks like you have never booked with Hotelin, When you complete your
              trips, it will be shown here.
            </DisclaimerText>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">HI</div>
        <div className="col-md-6 col-sm-12">HI</div>
      </div>
    </div>
  );
}
