
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPostService } from '../services/PostService';
import style from '../style.module.css'
import ClickCount from './ClickCount';
import HoverCount from './HoverCount';
import swal from 'sweetalert';

 

const Posts = ()=>{
    
    const [posts , setPosts] = useState([]);
    const [mainPosts , setMainPosts] = useState([]);
    const [uId,setUId]=useState("");
    const navigate = useNavigate();

    const handleSearch = ()=>{
        if(uId>0)
            setPosts(mainPosts.filter(p=>p.userId==uId))
           
        else{
            setPosts(mainPosts)
        }
       
    }

    const handleDelete = (postId)=>{}

    const getPosts = async ()=>{
        const res = await getPostService();
        setPosts(res.data);
        setMainPosts(res.data);
    }

    useEffect(()=>{
        console.log("first render")
        getPosts();
    } , [])

    useEffect(()=>{
        console.log("evry render")
        // getPosts();
    } )

    useEffect(()=>{
        return()=>{
            console.log("destroy component")
          //  swal("شما کامپوننت را ترک کردید")
        }
       
         
    },[] )

    useEffect(()=>{
        console.log("evry change render")
        
        handleSearch();
    } , [uId])


    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت پست ها</h4>

            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
            <div className="form-group col-10 col-md-6 col-lg-4">
                <input type="number" className="form-control shadow" placeholder="جستجو" value={uId} onChange={(e)=>{setUId(e.target.value)}}/>
            </div>
            <div className="col-2 text-start px-0">
                <Link to="/posts/add">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                </Link>
            </div>
        </div>

        {posts.length ? (
        <table className="table bg-light shadow">
            <thead>
                <tr>
                    <th>#</th>
                    <th>آی دی کاربر</th>
                    <th>عنوان</th>
                    <th>متن</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
               {posts.map(u => (
                <tr key={u.id}>
                    <td>{u.id}</td>
                    <td className='text-primary' style={{cursor:"pointer"}} onClick={()=>{setUId(u.userId)}}>{u.userId}</td>
                    <td>{u.title}</td>
                    <td>{u.body}</td>
                    <td>
                        <i className="fas fa-edit text-warning mx-2 pointer"
                        onClick={()=>navigate(`/posts/add/${u.id}`)}
                        ></i>
                        <i className="fas fa-trash text-danger mx-2 pointer"
                        onClick={()=>handleDelete(u.id)}
                        ></i>
                    </td>
                </tr>
               ))}
            </tbody>
        </table>
        ) : (
            <h4 className="text-center text-info">لطفا صبر کنید...</h4>
        )}


            <ClickCount/>
            <HoverCount name="masroor"/>
        </div>
    )

}

export default Posts;