import React, { useContext, useState } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './posts/Posts';
 import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditDesc from './users/EditDesc';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    const [isUser,setIsUser]=useState(true)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    return (
        <div className= {style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className= {`${style.menu_button} fas fa-bars text-dark m-2 pointer  d-md-none`} //مخفی کردن دکمه نمایش منو
            onClick={handleShowMenu}
            ></i>
            <Routes>
                <Route path='/' element={ isUser ? <Users/> : <Navigate replace to="/posts"/> }     /> //replace jast for save backthe page
                <Route path='/user/add' element={<AddUser/>} >
                    <Route path=':userId' element={<EditDesc/>}></Route>
                </Route>
                <Route path='/posts' element={<Posts/>}></Route>
                <Route path='/gallery' element={<Gallery/>}></Route>
                <Route path='/todos/*'  element={ <Todos/>}></Route>
                <Route path='*' element={<Users/>}></Route>//معمولا خطای 404 یا این پیج موجود نمی باشد را می گذارند
            </Routes>
        </div>
    )

}

export default Content;