import { CommentInfo, CommentCss, SVGContainer } from './style'


export default function Comment() {
    return(
        <CommentCss>
            <CommentInfo >
                <img src="https://picsum.photos/200" alt="https://picsum.photos/200" />
                <h3>Nome do usuário</h3>
            </CommentInfo>
            

            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </span>


            
        </CommentCss>
    )
}