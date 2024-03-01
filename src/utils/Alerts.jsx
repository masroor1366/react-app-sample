 import swal from "sweetalert";


export const Confirm=(message)=>{
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

export const Alert=(message)=>{
    return swal(
        message.text,
        {
            icon:message.icon,
            buttons:"متوجه شدم"
        }
    )
}