import React from 'react';
import style from '../style.module.css'
import { Link, useNavigate } from 'react-router-dom';

const Users = ()=>{
    const navigate=useNavigate();

    return (
        <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
                <div className="form-group col-10 col-md-6 col-lg-4">
                    <input type="text" className="form-control shadow" placeholder="جستجو"/>
                </div>
                <div className="col-2 text-start px-0">
                <Link to="/user/add">
                    <button className="btn btn-success">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                </Link>
                </div>
            </div>
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
                    <tr>
                        <td>1</td>
                        <td>Mohammad Ali Masroor</td>
                        <td>masroor</td>
                        <td>masroor.1388@gmail.com</td>
                        <td>
                             
                            <i className="fas fa-edit text-warning mx-2 pointer"
                                onClick={()=>{
                                    //action...
                                    return navigate("/user/add/2")
                                }}                            
                            ></i>
                            
                            <i className="fas fa-trash text-danger mx-2 pointer"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Users;