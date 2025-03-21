// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggeleMode = () => {
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      // document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About us"/> */}
      {/* <Router> */}
          <Navbar title="TextUtils" aboutText="About us" mode={mode} toggeleMode={toggeleMode}/>
          <div className="container my-3">
          {/* <Routes> */}

            {/* <Route path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
              <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />
            {/* </Route> */}
            {/* </Routes> */}


              <About/>
          </div>
      {/* </Router> */}
    </>
  );
}

export default App;






// import "./App.css";
// // import About from "./components/About";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";
// import React, { useState } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,  // Use Routes instead of Switch
// //   Route,   // Route is now directly used in the Routes component
// // } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light');

//   const toggleMode = () => {
//     if(mode === 'dark'){
//       setMode('light');
//       document.body.style.backgroundColor = "white";
//       document.title = "TextUtils - Dark Mode";
//     }
//     else{
//       setMode('dark');
//       document.body.style.backgroundColor = "#042743";
//       document.title = "TextUtils - Light Mode";
//     }
//   };

//   return (
//     <>
//       {/* <Router> */}
//         <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
//         <div className="container my-3">
//           {/* <Routes> */}
//             {/* <Route exact path="/about" element={<About />} />  Use element prop in Route */}
//             {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} /> */}
//           {/* </Routes> */}
//           <TextForm heading="Enter the text to analyze below" mode={mode} />
//         </div>
//       {/* </Router> */}
//     </>
//   );
// }

// export default App;
