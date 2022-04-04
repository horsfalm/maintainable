import React from "react";

function AcPortfolio() {
  return (
    <div>
      <p className="content is-medium">IT Engineer Turning To FullStack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Chuong Vo"/>
      <p className="content is-italic mt-4">
        I'm Chuong Vo, an IT Engineer with 10 years of experience switching to FullStack Developing!
      </p>
      <p className="content">
        I always love to code, but did not take the jump/risk toward it. Now is the time, I took the risk
        to jump into UC Berkeley Bootcamp. The experience so far is amazing! This is an exciting journey for me
        to do what I love, and to learn from all my current peers and future peers. 
      </p>
    </div>
  );
}

export default AcPortfolio;