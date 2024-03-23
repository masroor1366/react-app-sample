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
import WithAlert2 from './HOC/WithAlert2';
import AddPost2 from './posts/AddPost2';
import ReduxSample from './redux/ReduxSample';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)
    const [isUser,setIsUser]=useState(true)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    const renderUsers=(Confirm,Alert)=> <Users Confirm={Confirm} Alert={Alert}/>;

    

    return (
        <div className= {style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className= {`${style.menu_button} fas fa-bars text-dark m-2 pointer  d-md-none`} //مخفی کردن دکمه نمایش منو
            onClick={handleShowMenu}
            ></i>
            <Routes>
                <Route path='/' element={ isUser ? 
                    <WithAlert2>
                        {renderUsers}
                    </WithAlert2>                    
                    : <Navigate replace to="/posts"/> }     /> //replace jast for save backthe page
                <Route path='/user/add' element={<AddUser/>} >
                    <Route path=':userId' element={<EditDesc/>}></Route>
                    // <Route path=':userId/edite' element={<EditDesc/>}></Route>
                    // <Route path=':userId/:element' element={<EditDesc/>}></Route>
                    // <Route path='edit/:id' element={<EditDesc/>}></Route> // نکته: اول path نباید / آورده شود
                </Route>
                <Route path='/posts' element={<Posts/>}></Route>
                <Route path='/posts/add' element={<AddPost2/>}>
                    <Route path=':postId'/>
                </Route>
               
                <Route path='/gallery' element={<Gallery/>}></Route>
                <Route path='/redux' element={<ReduxSample/>}></Route>
                <Route path='/todos/*'  element={ <Todos/>}></Route>
                <Route path='*' element={
                    <WithAlert2>
                         {renderUsers}
                     </WithAlert2>  
                }></Route>//معمولا خطای 404 یا این پیج موجود نمی باشد را می گذارند
            </Routes>
        </div>
    )

}

export default Content;