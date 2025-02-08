import React from "react";
import WorkItems from "../Components/WorkItems";
import Navigation from "../Components/Navigation";

function Work() {
  return (
    <div className="workPage">
      <Navigation />
      <div className="workPageContainer">
        <WorkItems />
      </div>
    </div>
  );
}

export default Work;
