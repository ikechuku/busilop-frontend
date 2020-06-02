import React from "react";

const RelationshipCard = ({ store }) => {
  return (
    <div className="col  text-center">
      {store["relationships"].map((item, index) => {
        // console.log(item, "this is item");

        return (
          <div key={index} className="card mw text-white bg-primary mb-3">
            <div className="card-header"><strong>{item.type}</strong></div>
            <div className="card-body text-dark">
              <h5 className="card-title">Entity</h5>
              <p className="card-text">{item.entity}</p>

              <h5 className="card-title">Foreign Key</h5>
              <p className="card-text">{item.field}</p>

              <h5 className="card-title">Entity</h5>
              <p className="card-text">{item.target_entity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RelationshipCard;
