// import logo from './logo.svg';
// import F1 from './components/F1';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {HashRouter, Routes, Route} from "react-router-dom";
// import{Home,About} from './components/F2';
// import {Nav} from './components/Nav';
// import Contact from './components/Contact';
import Employee from './components/Employee'
import './App.css';


function App() {
  return (
    <div >
      {/* <F1></F1> */}
      <Employee></Employee>
    
      {/* <HashRouter>
      <Nav></Nav>
   
      <Routes>
      <Route path="/" element={<Home></Home>}>
      </Route>
    
      <Route path="/about" element={<About></About>}>
      </Route>
      <Route path="/Contact" element={<Contact></Contact>}>
      </Route>
      </Routes>
      </HashRouter> */}
    </div>
  );
}

export default App;
