import { PostCss, PostInfo } from "./styel"
import { BsHeart } from 'react-icons/bs'
import { TfiCommentAlt } from 'react-icons/tfi'
import { SlShare } from 'react-icons/sl'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function Post() {
    return(
        <PostCss>
            <PostInfo>
                <div>
                    <img src="https://picsum.photos/200" alt="https://picsum.photos/200" />
                    <h2>Título do post</h2>
                </div>
                <FiMoreHorizontal />
            </PostInfo>

            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy teLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy teLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy teLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy te</span>

            <article>
                <BsHeart />
                <TfiCommentAlt />
                <SlShare />
            </article>

        </PostCss>
    )
}

