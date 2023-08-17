import Post from "../../components/Post/Post"
import Header from "../../components/Header/Header"
import Comment from "../../components/Comments/CommentBox/CommentBox"
import { Main } from "./style"


export default function PostPage() {
    return(
        <Main>
            <Header />
            <Post />
            <h2>Comentários</h2>
            <Comment />
        </Main>
    )
}