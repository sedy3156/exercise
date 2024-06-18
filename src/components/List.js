import React from "react";

function  List({isActive}){


return(
    <div className={"list-container"}>
        <div className={`userprofil ${isActive}`}>
            <div className="user-profil">
                <img src="/car_img.jpg" alt="logo"/>
            </div>
        </div>
        <div className="list-content">
            <h1>Jean Sedynah</h1>
            <span>12 janvier 2024</span>
        </div>
        <div className="list-option">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
    </div>
)
}

export default List;