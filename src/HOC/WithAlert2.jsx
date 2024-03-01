import React from "react";
import swal from "sweetalert";


const WithAlert2 =(props)=>{
    const Confirm=(message)=>{
        return swal(
            {
                title:message.title,
                text:message.text,
                icon:message.icon,
                buttons:["خیر","بله"],
                dangerMode:true
            }
        )
    }

    const Alert=(message)=>{
        return swal(
            message.text,
            {
                icon:message.icon,
                buttons:"متوجه شدم"
            }
        )
    }
    return(
        <>
            {props.children(Confirm,Alert)}
            {/*props.render(Confirm,Alert)*/}
        </>
    )
};



export default WithAlert2;