import { useState } from 'react';
//Routing
import { BrowserRouter, Routes } from "react-router-dom"
import { Route } from 'react-router-dom';
//menunavbar
import MenuAppBar from './component/MenuAppBar';

//page
import Home from './page/Home';
import dataList1 from './page/dataList1';
import dataList2 from './page/dataList2';
import dataList3 from './page/dataList3';
import ShoppingCart from './page/ShoppingCart';
import Profile from './page/Profile';
import SignUp from './page/SignUp';
import Login from './page/Login';



export default function LoadingButtons() {
  const [loading, setloading] = useState(true)

  return (
    <>
      <BrowserRouter >
        <MenuAppBar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Home' Component={Home} />
          <Route path='/profile' Component={Profile} />
          {/* <Route path='/Account' Component={Account} /> */}
          <Route path='/SignUp' Component={SignUp} />
          <Route path='/login' Component={Login} />
          <Route path='/details/1' Component={dataList1}/>
          <Route path='/details/2' Component={dataList2}/>
          <Route path='/details/3' Component={dataList3}/>

          <Route path = '/cart' Component={ShoppingCart}/>
          {/* <Route path='/Alert' Component={AlertVariousStates} /> */}
        </Routes>
      
      </BrowserRouter>
    </>
  );
}
