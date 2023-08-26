import { SignIn } from "../signIn"
import { UserForm } from "../userForm"

export const Routing = () => {


    

    return <>
        <Routes>

            <Route path="/" element={<Guest></Guest>} >
                <Route path="siginIn" element={<SignIn></SignIn>}></Route>
                <Route path="siginOn" element={<UserForm></UserForm>}></Route>

            </Route>
            <Route path="/user/:id" element={<User></User>} >
            </Route>
        </Routes>


    </>

}