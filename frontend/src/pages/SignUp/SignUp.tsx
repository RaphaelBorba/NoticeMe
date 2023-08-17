import DivImage from "../../components/Sign/DivImage/DivImage";
import { SignUpStyle } from "./style";
import { FormsStyle } from "../../components/Sign/Forms/FormsStyle";
import { RxPerson } from 'react-icons/rx'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter} from 'react-icons/fi'
import { FiInstagram} from 'react-icons/fi'
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlineMail } from 'react-icons/ai'
import { postSignUpBack } from "../../server/conectBack";
import { CiCalendarDate } from 'react-icons/ci'
import { BiImage } from 'react-icons/bi'

export default function SignUp() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        email: '',
        birthday: '',
        password: '',
        image_url:''
    })

    const handleForm = (e:ChangeEvent) =>{

        const target = e.target as HTMLTextAreaElement
        const {name, value} = target

        setForm({...form, [name]: value});
    }

    const handleSubmit = (e: FormEvent) =>{ 

        e.preventDefault();

        postSignUpBack(form).then((e)=>{

            console.log(e)
            navigate('/signIn')
        }).catch((e)=>{
            console.log(e)
            alert(e.response.data)
        })
    }

    return (

        <SignUpStyle>
            <FormsStyle>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit}>
                <section>
                        <div><RxPerson/></div>
                        <input placeholder="Name" name="name" type="text" onChange={handleForm} required />
                    </section>
                    <section>                       
                        <div><AiOutlineMail/></div>
                        <input placeholder="Email" name="email" type="email" onChange={handleForm} required />
                    </section>
                    <section>
                        <div><CiCalendarDate/></div>
                        <input placeholder="birthday" name="birthday" type="date" onChange={handleForm} required />
                    </section>
                    <section>
                        <div><BiImage/></div>
                        <input placeholder="Image URL" name="image_url" type="text" onChange={handleForm} required />
                    </section>
                    <section>
                        <div><RiLockPasswordLine/></div>
                        <input placeholder="password" name="password" type="password" onChange={handleForm} required />
                    </section>
                    
                    <button type="submit">Cadastrar</button>
                </form>

                <span onClick={()=>navigate('/signIn')}>Já tenho conta!</span>

                <nav>
                    <FiFacebook/>
                    <FiTwitter/>
                    <FiInstagram/>
                </nav>
            </FormsStyle>

            <DivImage/>


        </SignUpStyle>
    )
}