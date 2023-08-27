import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom"

 
export const Guest = () => {
    let navigate=useNavigate();
    useEffect(()=>{
        navigate(`/siginIn`)
      }, [])
   return <div>
    <div className = "container center navClass ">
            <NavLink to='siginIn'> כניסת משתמש </NavLink>
            <br></br> 
            <NavLink to='fillDetails'> מילוי הפרטים </NavLink>
            <br></br> 
            </div>
        <Outlet></Outlet>
    </div >
}