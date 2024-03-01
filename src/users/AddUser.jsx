import React, { useEffect, useState } from 'react';
import { useParams , Outlet } from 'react-router';
import style from '../style.module.css'
import { Link,useNavigate ,useLocation} from 'react-router-dom';
import axios from 'axios'
import swal from 'sweetalert';
import { getOneUserService, setUserService, updateUserService } from '../services/UserService';
import Users from './Users';

const AddUser = ()=>{

    const {userId} = useParams();// در لینک ارسال می شود استفاده از پارامتری که ارسال شده 
    const navigate=useNavigate();
    const getParametrFromLocation=useLocation();// در state گذاشته می شود
    console.log(getParametrFromLocation)

    const [data , setData] = useState({
        name: "" ,
        username : "",
        email : "" ,
        address : {
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })

    useEffect(()=>{

        if (userId){
            
            const func =async(userId)=>{ 
                const res = await getOneUserService(userId);
                setData(
                    {
                        name: res.data.name ,
                        username : res.data.username ,
                        email : res.data.email,
                        address : {
                            street: res.data.address.street ,
                            city: res.data.address.city ,
                            suite: res.data.address.suite ,
                            zipcode: res.data.address.zipcode 
                        }
                    }
                )

                }
                func(userId)
            
          
         
                  

                

            }
       
    },[]);

    const handleAddUser = (e)=>{
        e.preventDefault();//جهت جلوگیری از رفرش صفحه
        if (!userId) {
            setUserService(data)
        }else{
            updateUserService(data,userId)
        }

    }

    
    

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid container`}>
            <h4 className="text-center text-primary">
                {userId ? "ویرایش کاربر" : "افزودن کاربر" }
            </h4>
            <div className="row justify-content-center mt-5 ">
                <form onSubmit={handleAddUser}  className="col-12 col-md-6 bg-light rounded shadow-lg p-3">
                    <div className= "mb-3">
                        <label className="form-label">نام و نام خانوادگی</label>
                        <input type="text" className= "form-control" value={data.name} onChange={(e)=>setData({...data , name:e.target.value})}/>
                    </div>
                    <div className= "mb-3">
                        <label  className= "form-label">نام کاربری</label>
                        <input type="text" className= "form-control" value={data.username} onChange={(e)=>setData( {...data,username:e.target.value})}/>
                    </div>
                    <div className= "mb-3">
                        <label  className= "form-label">ایمیل</label>
                        <input type="email" className= "form-control" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
                    </div>
                    <div className= "mb-3 row">
                        <label  className= "form-label">آدرس</label>
                        <div className="col-6 my-1">
                            <input type="text" className= "form-control" placeholder="شهر" value={data.address.city} onChange={(e)=>setData({...data,address:{...data.address,city:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className= "form-control" placeholder="خیابان" value={data.address.street} onChange={(e)=>setData({...data,address:{...data.address,street:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className= "form-control" placeholder="ادامه آدرس" value={data.address.suite} onChange={(e)=>setData({...data , address:{...data.address , suite:e.target.value}})}/>
                        </div>
                        <div className="col-6 my-1">
                            <input type="text" className= "form-control" placeholder="کد پستی" value={data.address.zipcode} onChange={(e)=>setData({...data , address:{...data.address , zipcode:e.target.value}})}/>
                        </div>
                    </div>

                    <div className="col-12 text-start">
                         
                        {<button type="button" className= "btn btn-danger ms-2"
                            onClick={()=>navigate("/",{state:{ppp:'test',id:22}})}                        
                        >بازگشت</button>}

                       { /*<button type="button" className= "btn btn-danger ms-2"
                        onClick={()=>navigate(-1)}    //به یک صفحه قبل تر برگرد                    
                       >  بازگشت</button>*/}
                         
                        <button type="submit" className= "btn btn-primary" >
                        
                        {userId ? "ویرایش " : "افزودن " }
                        </button>
                    </div>
                </form>
            </div>
            
            { <Outlet/> } 
            { /*//نمایش کامپوننتی که ارسال شده است یعنی در صورتی که آی دی ارسال شود این کامپوننت هم نمایش داده می شود 
               //Outlet اشاره به همان المنتی دارد که در route به همراه یوزرآیدی ارسال شده است*/}
            </div>
    )
}

export default AddUser;