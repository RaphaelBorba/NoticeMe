import DivImage from "../../components/Sign/DivImage/DivImage";
import { FormsStyle } from "../../components/Sign/Forms/FormsStyle";
import { SignInStyle } from "./style";
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { postSignInBack } from "../../server/conectBack";
import { useAuth } from "../../context/ApiContext";
import { GoogleLogin } from 'react-google-login';
import  FacebookLogin  from 'react-facebook-login';

export default function SignIn() {

    const navigate = useNavigate()
    const { login } = useAuth()

    const responseGoogle = (response: any) => {
        console.log(response);
      }
    
    const responseFacebook = (response: any) => {  console.log(response);
      }

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleForm = (e: ChangeEvent) => {

        const target = e.target as HTMLTextAreaElement
        const { value, name } = target

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: FormEvent) => {

        e.preventDefault()

        postSignInBack(form).then((e) => {

            login(e.data.token, e.data.userId, e.data.userName)
            localStorage.setItem('user', JSON.stringify(e.data))
            navigate('/home')
            
        }).catch((e) => {
            console.log(e)
            alert(e.response.data)
        })

    }

    return (

        <SignInStyle>

            <FormsStyle>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <section>
                        <div><AiOutlineMail /></div>
                        <input placeholder="Email" name="email" type="email" onChange={handleForm} required />
                    </section>
                    <section>
                        <div><RiLockPasswordLine /></div>
                        <input placeholder="Password" name="password" onChange={handleForm} type="password" required />
                    </section>
                    <button type="submit">Acessar</button>
                </form>

                <span onClick={() => navigate('/signUp')}>Criar conta</span>

                <nav>
                    {/* <GoogleLogin
                    clientId="467464964734-rustaeli1mbs8stctbcafrbj6d8ebt61.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    //cookiePolicy={'single_host_origin'}                                 
                    /> */}

                    <FacebookLogin
                    appId="1545459395934918"
                    autoLoad
                    callback={()=>responseFacebook}
                    fields= 'name, email, picture'
                    />
                </nav>
            </FormsStyle>
            <DivImage />
        </SignInStyle>
    );
}