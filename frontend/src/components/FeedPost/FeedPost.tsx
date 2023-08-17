import { Main } from "./style";

export default function FeedPost({post}: any) {
    return(
        <Main>
            <img src={post.image_url} alt="https://picsum.photos/200" />
            <div>
                <h3>{post.title}</h3>
                <div>
                    <img src="https://picsum.photos/200" alt="https://picsum.photos/200" />
                    <h2>Nome do usuário</h2>
                </div>
                <span>{post.text}</span>
            </div>
        </Main>
    )
} 