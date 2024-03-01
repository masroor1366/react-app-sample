import React from "react"
import swal from "sweetalert"
  
const WithAlert =(MainComponent)=>{

    const NewComponent=(props)=>{

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

        return (
            <MainComponent {...props} Confirm={Confirm} Alert={Alert} />
        )



        
    }

    return NewComponent




}

export default WithAlert