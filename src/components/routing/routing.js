import { SignIn } from "../signIn"
import { UserForm } from "../userForm"
import { Route, Routes } from "react-router-dom"
import { Guest } from "./guest"
import { User } from "./user"
import '../design/router.css';
export const Routing = () => {




    return <div className="router">
        <Routes >

            <Route path="/" element={<Guest></Guest>} >
                <Route path="siginIn" element={<SignIn></SignIn>}></Route>
                <Route path="fillDetails" element={<UserForm></UserForm>}></Route>

            </Route>
            <Route path="/user/:id" element={<User></User>} >
            </Route>
        </Routes>


    </div>

}