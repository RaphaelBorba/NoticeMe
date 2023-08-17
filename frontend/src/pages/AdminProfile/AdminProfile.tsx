import AdminPost from "../../components/AdminPost/AdminPost";
import Header from "../../components/Header/Header";
import { AdminCss } from "./style";
import { useAuth } from '../../context/ApiContext';
import { ChangeEvent, useEffect, useState } from "react";
import { getUserData, postDescription } from "../../server/conectBack";
import { AiOutlineCheck } from "react-icons/ai";


function AdminProfile() {

    const [description, setDescription] = useState('')
    const [render, setRender] = useState(false)

    const { userId, token } = useAuth()
    const [data, setData] = useState({
        birthday: "",
        description: [{text:''}],
        email: "",
        id: 0,
        image_url: "",
        name: "",
        posts: []
    })

    useEffect(() => {

        getUserData(userId, token).then((e) => {
            setData(e.data)
            setDescription(e.data.description[0].text)
        }).catch((e) => {
            console.log(e.response.data)
        })

    }, [render])

    function renderDescription() {
        postDescription({description}, token).then(()=> setRender(!render)).catch((e)=> console.log(e.response.data))

    }

    return ( 
        <AdminCss>
            <Header />
            <section>
                <nav>
                    <img src={data.image_url} alt='Imagem do usuário'   />
                    <h1>{data.name}</h1>
                </nav>

                <span>{data.description[0] ? data.description[0].text : ''}</span>           
                <textarea value={description} onChange={(e)=>setDescription(e.target.value)} ></textarea>
                <AiOutlineCheck onClick={renderDescription} />
                
            </section>
            <ul>
            {data.posts[0] ? data.posts.map((e, i) => {
                    return <AdminPost key={i} post={e} />
                }): <h1>Não tem post</h1>}

            </ul>
        </AdminCss>
     );
}

export default AdminProfile;