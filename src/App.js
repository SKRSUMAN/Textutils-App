
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark'); //Wheather dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
setAlert({
  msg: message,
  type: type,
})
setTimeout(() =>
{
   setAlert(null);
}, 1500)


  }
// const removeBodyClasses = () => {
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')
// }

  const toggleMode = (/*cls*/) =>
  {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-' +cls)
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enable" , "Sucess");
      document.title = 'TextUtils - Drak Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
  }
  else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enable" , "Sucess");
      document.title = 'TextUtils - Light Mode';
  }
    }
    
  return (
   <>
   {/* <Router> */}

     <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode} />
     <Alert alert= {alert}/>

     {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
     {/* <Navbar/> */}
     <div className="container my-3">
     <TextForm showAlert = {showAlert} heading = "Enter the text to analyze"  mode = {mode} />
     {/* <Switch> */}
     {/* /Users --> .Component 1
     /Users/home --> .Component 2 */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route excat path="/">
          <TextForm showAlert = {showAlert} heading = "Enter the text to analyze"  mode = {mode} />
          </Route>
        </Switch> */}
     </div>
   {/* </Router> */}
    
     

   </>
  );
}

export default App;
