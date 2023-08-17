import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ProfilePost from "../../components/ProfilePosts/ProfilePost";
import { getUserData } from "../../server/conectBack";
import { ProfileCss } from "./style";
import { useAuth } from '../../context/ApiContext'
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Profile() {

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
        }).catch((e) => {
            alert(e.response.data)
        })

    }, [])

    console.log(data)

    const navigate = useNavigate()

    return (
        <ProfileCss>
            <Header />
            <section>
                <nav>
                    <img src={data.image_url} alt='https://picsum.photos/200' />
                    <h1>{data.name}</h1>
                </nav>

                <span>{data.description[0] ? data.description[0].text : ''}</span>

                <button>Follow</button>
                <FiEdit2 onClick={()=>{navigate('/adminprofile')}}/>
            </section>
            <ul>
                {data.posts.map((e, i) => {
                    return <ProfilePost post = {e}/>
                })}
            </ul>
        </ProfileCss>
    );
}