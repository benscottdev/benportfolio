// import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import loaderGif from "../assets/images/loaderGif.gif";

// function Loader() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timeoutId = setTimeout(() => {
//       navigate("/home");
//     }, 5500);

//     return () => clearTimeout(timeoutId);
//   }, [navigate]);

//   return (
//     <div className="loader">
//       <img
//         onClick={() => {
//           navigate("/home");
//         }}
//         src={loaderGif}
//         className="loaderGif"
//         alt="Loading..."
//       />
//     </div>
//   );
// }

// export default Loader;
