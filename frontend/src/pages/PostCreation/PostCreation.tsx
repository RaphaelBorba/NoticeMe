import { ChangeEvent, FormEvent, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import Header from "../../components/Header/Header";
import Tags from "../../components/Tags/Tags";
import { useAuth } from "../../context/ApiContext";
import { postPost } from "../../server/conectBack";
import { Container, Main, TextBox, TitleCss } from "./style";

function PostCreation() {

    const {userId, token} = useAuth() 

    const [form, setForm] = useState({
        title: "",
        text:"",
        image_url:"",

    }); 

    const handleForm = (e: ChangeEvent) => {

        const target = e.target as HTMLTextAreaElement
        const { value, name } = target

        setForm({ ...form, [name]: value })
        console.log(form)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        postPost({...form, user_id: userId}, token).then((e)=> {
            console.log(e.data)
        }
        ).catch((e)=> console.log(e.response.data) )
    }

    return ( 
        <Main>
            <Header />
            <Container>
                <BiImageAdd />
                <form onSubmit={handleSubmit} >
                    <TitleCss  type="text" name="title" placeholder="Título" onChange={handleForm} required ></TitleCss>
                    <TitleCss  type="url" name="image_url" placeholder="URL da imagem" onChange={handleForm} required ></TitleCss>
                    <TextBox  name="text" onChange={handleForm}  placeholder="Texto" required ></TextBox>
                    <button type="submit" >oba</button>
                </form>
                <ul>
                    <Tags />
                    <Tags />
                    <Tags />
                </ul>
 
                
            </Container>
        </Main> );
}

export default PostCreation;