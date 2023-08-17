import { HeroContainer, TagsContainer, Main, FeedContainer } from "./style"
import Hero from "../../assets/images/imagemHero.png"
import Header from "../../components/Header/Header"
import Tags from "../../components/Tags/Tags"
import TrendingBox from "../../components/TrendingPosts/TrendingBox/TrendingBox"
import FeedPost from "../../components/FeedPost/FeedPost"
import { useEffect, useState } from "react"
import { getPostsForHome } from "../../server/conectBack"



export default function Home() {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        getPostsForHome().then((e) =>{setPosts(e.data)}).catch((e) =>console.log(e.response.data))
    },
    []) 
    

    return (
        <>
            <Header />
            <HeroContainer>
                <img src={Hero} alt={Hero} />
                <div>
                    <p>Um slogan <br /> Jamais <br /> Pensado</p>
                </div>
            </HeroContainer>

            <Main>
                <FeedContainer>
                    <TagsContainer>
                        <Tags />
                        <Tags />
                        <Tags />
                        <Tags />
                        <Tags />
                    </TagsContainer>

                    <ul>
                        {posts.map((e, i) => {
                        return <FeedPost key = {i} post = {e}/>
                    })}
                    </ul>
                </FeedContainer>

                <TrendingBox />

            </Main>

        </>
    )
}