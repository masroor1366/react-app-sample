import React, { useEffect, useState } from 'react';
import style from '../style.module.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import WithAlert from '../HOC/WithAlert';

const Users = (props)=>{

    const {Confirm,Alert}=props



    const [users,setUsers]=useState([]);
    const [mainUsers,setMainUsers]=useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
            let myres = res.data;
            myres=[...myres,{id:66,name: 'Mohammad Ali Masroor', username:'Masroor1366',email:'Masroor.1388@gmail.com'}]
             setUsers(myres)
             setMainUsers(myres);

             
        }).catch(err=>{
            console.log(err)
        })
    },[]);

    const handleSearch=(e)=>{
        setUsers(mainUsers.filter(u=>u.name.includes(e.target.value)))
    }
    const navigate=useNavigate();
    const param=useLocation();
    console.log('param پارامتری که از زدن دکمه برگشت در اینجا دریافت می وشد')
    console.log(param)

    const handleDelete = async (itemId,username)=>{
        if (
            await Confirm({
                title:"حذف رکورد",
                text:`آیا از حذف رکورد ${username} اطمینان دارید؟`,
                icon:"warning"
            })
        ){
            axios({
                method:"DELETE",
                url:`https://jsonplaceholder.typicode.com/users/${itemId}`
            }).then(res=>{

                if (res.status == 200) {
                    const newUsers = users.filter(u=>u.id != itemId);
                    setUsers(newUsers);
                    Alert({
                        text:"حذف با موفقیت انجام شد",
                        icon: "success"
                    })
                  
                }else{
                    Alert({
                        text:"عملیات با خطا مواجه شد",
                        icon: "error"
                    })
                   
                }

            })

        }else{
             
            Alert({
                text:"شما از حذف رکورد منصرف شدید",
                icon: "info"
            })

        }


 
    }

           
    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو" onChange={handleSearch}/>
                </div>
                <div className="col-2 text-start px-0">
                <Link to="/user/add">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                </Link>
                </div>
            </div>
            {users.length ? (
                <table className="table bg-light shadow">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>نام</th>
                        <th>نام کاربری</th>
                        <th>ایمیل</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(u=>(
                    <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    
                         
                        <td>
                             
                            <i className="fas fa-edit text-warning mx-2 pointer"
                                onClick={()=>{
                                    //action...
                                    return navigate(`/user/add/${u.id}`,{state:{x:2,y:3}})
                                }}                            
                            ></i>
                             
                            <i className="fas fa-trash text-danger mx-2 pointer"
                            onClick={()=>handleDelete(u.id,u.username)}></i>
                             
                        </td>
                    </tr>
                ))}
                    

                </tbody>
            </table>
            ):(
                <h4 className="text-center text-info">لطفا صبر کنید...</h4>
            )}
            
        </div>
    )

}

export default  WithAlert(Users)  ;