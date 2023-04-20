import React from "react";
import "./style.css"

const menuCard = ({menuData}) => {
  // console.log(menuData);
  return (
<>
<section className="main-card--cointainer">
{
  menuData.map((curElem)=>{
    const {id,image,name,category,price,description}= curElem;
    return(

      <div className="card-container" key={id}>
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span>
            <span className="card-author subtle">{category}</span>
            <h2 className="card-title">{name}</h2>
            <span className="card-description subtle">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              asperiores iure magni possimus, voluptas dolorum.
            </span>
            <div className="card-read">Read</div>
            <img src={image} alt="image" className="card-media" />
            <span className="card-tag subtle">Order Now</span>
          </div>
        </div>
      </div>
   
    )
  }
  )
}
    
</section>
</>
  );
};

export default menuCard;