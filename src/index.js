import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// const router  = createBrowserRouter([
//   {
//     path:'/',
//     elemnet:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       },
//     ]
  
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    
          <Route path="/" element={<Layout/>} >
          <Route path="" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
        
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <Router>
  //   <App />
  // </Router>,
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
 
);
