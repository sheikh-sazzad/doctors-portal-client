import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className="card mt-16 lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={treatment} alt="Album" />
      </figure>
      <div className="card-body justify-items-start">
        <h2 className="text-5xl card-title mb-10">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="card-actions">
          <button className="btn bg-gradient-to-r from-primary to-secondary text-white">
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
