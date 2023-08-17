 import { CommentsCss } from "./style"
 import Comment from "../Comment/Comment"
 
 export default function CommentsBox() {
    return(
        <CommentsCss>
            <ul>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </ul>           
        </CommentsCss>
    )
}