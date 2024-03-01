import swal from "sweetalert";
import { jpAxios } from "../JpAxios.js";


export const setUserService = async (data)=>{
    const res = await jpAxios.post('/users' , data);
    if (res) {
        console.log(res);
        swal(`${res.data.name} با موفقیت ایجاد شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}

export const getOneUserService= async (userId)=>{
    const res=await jpAxios.get(`users/${userId}`);
    console.log("hhhhhhhh")
    console.log(res)
    return res;
}





  
export const updateUserService = async (data , userId)=>{
    const res = await jpAxios.put(`/users/${userId}` , data);
    if (res) {
        console.log(res);
        swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",            
        });
    }
}