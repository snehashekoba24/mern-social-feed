import React, {useState,useEffect} from "react" //becoz of useEffect ,we can call API's only once 
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image:"https://rukminim2.flixcart.com/image/480/640/poster/h/j/n/beautiful-scenery-fabulous-ps1840-small-original-imadyyt7xw4tr2y5.jpeg?q=90",
            caption:"Beautiful Scenery",
        }
    ])
    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
           
            setPosts(res.data.posts)
        })
    },[])



    return (
        <section className = 'feed-section' >

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id}
                        className='post-card' >
                            <img src={post.image} alt={post.caption} /> 
                            <p> {post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>
    )
}


export default Feed