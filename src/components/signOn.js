export const UserForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return <> 
    <input type={'email'} placeholder="email" onBlur={(e) => setEmail(e.target.value)} />
    <input type={'password'} placeholder="password" onBlur={(e) => setPassword(e.target.value)}/>
    </>
}