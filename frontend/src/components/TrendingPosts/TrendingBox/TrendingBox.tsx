import { TrendingBoxCss } from "./style";
import TrendingPost from "../TrendingPost/TrendingPost";

export default function TrendingBox() {
    return(
        <TrendingBoxCss>
            <ul>
                <h2>Famous Posts</h2>
                <TrendingPost />
                <TrendingPost />
                <TrendingPost />
                <TrendingPost />
                <TrendingPost />
            </ul>
        </TrendingBoxCss>
    )
}