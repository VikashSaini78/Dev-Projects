import Card from "./Day1/Card";
import UseEffect from "./Day6/UseEffect";
import {BrowserRouter, Form, Link, Route, Router, Routes} from "react-router-dom"
import HomePage from "./Project Website/HomePage";
import Footer from "./Project Website/Footer";
import Navbar from "./Project Website/Navbar";
import RecipeReviewCard from "./Project Website/RecipeReviewCard";
import { Accordion, Container, SwipeableDrawer } from "@mui/material";
import Todo from "./Todo/Todo";
import Data from "./Day7/Data";
import Statetest from "./Day3/Statetest";
import Counter from "./Day3/counter";
import Product from "./Day1/Product";
import Navbarapi from "./Day9/Navbarapi";
import Actionbtn from "./Day9/Actionbtn";
import Webnav from "./Project Website/Webnav";
import Webpage1 from "./Project Website/Signin";
import Tabal from "./Day10/Tabal";
import SignUp from "./Project Website/Signup";
import Inputpage from "./Day11/Inputpage";
import Signin from "./Project Website/Signin";
import Hooks from "./Day12/Hooks";
import Taliwind from "./Day13/Talilwind";
import Test from "./Day2/Test";
import Weather from "./Day15/Weather";
import Hookref from "./Day14/Hookref";
import CardApi from "./Day15/CardApi";
import Colorchhange from "./Day15/Colorchange";
import Child1 from "./Propes/Child1";
import { createContext, useEffect,} from "react";
import { useState } from "react";
import ChildA from "./Day16/ChildA";
import ComNav from "./compny/ComNav";
import Nav from "./compny/Nav";
import Hasnav from "./compny/Hasnav";
import Arraymap from "./Day1/Arreymap";
import TestCounter from "./Test/TestCounter";
import TestForm from "./Test/TestForm";
import DataApi from "./compny/DataaApi";
import AppBar1 from "./internship/AppBar";
import Header from "./internship/Header";
import Homepage from "./Project Website/HomePage";
import ShousHome from "./ShousShop/ShousHome";
import Shouscollection from "./ShousShop/Shouscollection";
import Shousapihom from "./ShousShop/Shousapihom";
import HomeApi from "./ShousShop/HomeApi";





let firstname = createContext()



function App() {

  let name ="jaitpuriya"




  let productdata = [
    {
      productname:"i phone",
      price: "$25",
      rating: "4.3",
      id: "1453526"
    },
    {
      productname:"Samsung Tv",
      price: "$245",
      rating: "4.4",
      id: "145426"
    },
    {
      productname:"Apple laptop",
      price: "$584",
      rating: "4.9",
      id: "144526"
    },
    {
      productname:"Mi Tv",
      price: "$256",
      rating: "4.7",
      id: "1452645"
    },
    {
      productname:"Micromax phone",
      price: "$6",
      rating: "4.7",
      id: "14545"
    },
    {
      productname:"Mi phone",
      price: "$256",
      rating: "4.7",
      id: "1452645"
    },
    {
      productname:"Tv",
      price: "$26",
      rating: "4.5",
      id: "145245"
    },
  ]


  return ( 
    <>

   {/* <Shouscollection/> */}

    {/* <Navbar/> */}
    {/* <SingleProduct/> */}
    {/* <AppBar1/>
    <Header/> */}

{/* <TestForm/>
<TestCounter/> */}
{/* <Arraymap/> */}
{/* <Hasnav/>     */}
{/* <ComNav/>
<Nav/> */}
{/* <ChildA/> */}
{/* <firstname.Provider value={name}>
<Child1/>
</firstname.Provider> */}
{/* <Child1 name={'Jaitpuriya'}/> */}
{/* <Colorchhange/> */}
{/* <CardApi/> */}
{/* <Hookref/> */}
{/* <Data/> */}
{/* <Weather/> */}
{/* <Bootstap/> */}
{/* <Fileicons/> */}
{/* <SwipeableTextMobileStepper/> */}
{/* <Inputpage/> */}  
{/* <Webnav/> 
<Footer/> */}
{/* 
<Webpage1/> */}
{/* <BrowserRouter>
<Routes>
<Route/>
</Routes>
</BrowserRouter>
*/}
{/* <Navbarapi/> */}
{/* <Form/> */}



   <BrowserRouter>
  <Webnav/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Hooks" element={<Hooks/>}/> 
      <Route path="Data/jsn" element={<CardApi/>}/>
      <Route path="Signup" element={<SignUp/>}/> 
      <Route path="/Todo" element={<Todo/>}/> 
      <Route path="/sign in" element={<Signin/>}/> 
      <Route path="/Product" element={<Product/>}/> 
      <Route path="/Statetest" element={<Statetest/>}/>  
      <Route path="/Taliwind" element={<Taliwind/>}/>  
      <Route path="/Tabal" element={<Tabal/>}/>  
      <Route path="/Weather/app" element={<Weather/>}/>  
      <Route path="Color/Change" element={<Colorchhange/>}/> 
      <Route path="Homepage" element={<HomePage/>}/>
      <Route path="ShousHome" element={<ShousHome/>}/>
      <Route path="/HomeApi" element={<HomeApi/>}/> 
    </Routes>
  <Footer/>
</BrowserRouter>   

{/* <WeatherApp/> */}
{/* <Usememo/> */}
{/* <Actionbtn/> */}
{/* <Matrialui/> */}
{/* <Navbar/> */}
{/* <BrowserRouter>
    <Navbar/>
    <Routes>  
    </Routes>
    </BrowserRouter> */}
{/* <Pages/> */}
{/* <RecipeReviewCard/> */}
{/* <Example/>
    <Test/> 
    <Data/>
    <UseEffect/>
    <Todo/>
    <Btn/>
    <Ptr/> 
    <Form/> 
    <Statetest/> */}
{/* <Counter/>
    <Card name = "vicky" Deccription = "hello vicky"/>
    <Card name = "jaitpuriya" Deccription = "hello vicky" />
    <Card name = "jaitpuriya" Deccription = "hello vicky"/>  */}
{/* <Example/> */}

{/* 
    {
    productdata.map((value,index)=>(
    <Product pname={value.productname} price={value.price} rating={value.rating} id={value.id}/>
    ))
    } */}





    </>
   );
}

export default App;
export {firstname}