import { AdminPostCss } from "./style";
import { FiEdit2 } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'






export default function AdminPost({post}: any){

    return (
        <AdminPostCss>

            <div>
                <h2>{post.title}</h2>
                <span>{post.text}</span>
            </div>
            <div>
                <img src={post.image_url} alt="foto do post" />
                <article>
                    <FiEdit2 />
                    <MdOutlineDelete />
                </article>
            </div>
        </AdminPostCss>
    );

}