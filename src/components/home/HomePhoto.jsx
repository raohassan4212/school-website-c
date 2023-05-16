import React from "react";
import { mainTeam } from "../../dummydata";
import "../team/team.css";

const HomePhoto = () => {
  return (
    <div className="home-bg-main">
      <div className="home-photo">
        <div></div>
        <div className="pic-1">
          <img src="./images/team/f-1.jpeg" alt="picture" width={`100%`} />
          <div className="img-position">
            <h3>MR. WAZIR DHANDA (M.D)</h3>
          </div>
        </div>
        <div className="pic-2">
          <img src="./images/team/f-2.jpeg" alt="picture" width={`100%`} />
          <div className="img-position">
            <h3>MRS. SUDHA SHARMA (PRINCIPAL)</h3>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    // <div className="container grid">
    //   {mainTeam.map((val) => (
    //     <div className="items shadow">
    //       <div className="img">
    //         <img src={val.cover} alt="faculty" />
    //         <div className="overlay">
    //           <i className="fab fa-facebook-f icon"></i>
    //           <i className="fab fa-twitter icon"></i>
    //           <i className="fab fa-instagram icon"></i>
    //           <i className="fab fa-tiktok icon"></i>
    //         </div>
    //       </div>
    //       <div className="details">
    //         <h2 className="team-name">{val.name}</h2>
    //         <p className="designation">{val.work}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default HomePhoto;
