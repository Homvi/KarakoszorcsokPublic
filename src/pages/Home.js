import React from "react";

const myStyles = {
  home:{
    minHeight: "calc(110vh - 70px)",
    backgroundImage: "repeating-linear-gradient(284deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),repeating-linear-gradient(14deg, transparent 0px, transparent 1px,rgb(251,251,251) 1px, rgb(251,251,251) 3px),linear-gradient(90deg, rgb(222,222,222),rgb(222,222,222))",
  },
  welcome:{
    backgroundImage: "repeating-linear-gradient(45deg, rgba(194, 194, 194,0.1) 0px, rgba(194, 194, 194,0.1) 2px,transparent 2px, transparent 4px),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255),rgb(255,255,255))",
    height:"650px",
    width:"50vw",
    borderTop:"1px solid #ffffff",
  }
}


const Home = () => {
  return (
    <div style={myStyles.home} className="content">
   

    </div>
  );
};

export default Home;
