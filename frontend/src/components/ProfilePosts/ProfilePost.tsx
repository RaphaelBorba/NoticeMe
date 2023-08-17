import { useEffect, useState } from "react";
import { ProfilePostCss } from "./style";
import { BsHeart } from 'react-icons/bs'
import { TfiCommentAlt } from 'react-icons/tfi'
import { SlShare } from 'react-icons/sl'





export default function ProfilePost({ post }: any){

    const [data, setData] = useState({
        title: "",
        text: "",
        id: 0,
        user_id: "",
        image_url: "",
        create_at: "",
    })


    return (
        <ProfilePostCss>

            <div>
                <h2>{data.title}</h2>
                <span>{data.text}</span>
            </div>
            <div>
                <img src={data.image_url} alt="post image" />
                <article>
                    <BsHeart  />
                    <TfiCommentAlt />
                    <SlShare />
                </article>
            </div>
        </ProfilePostCss>
    );

}