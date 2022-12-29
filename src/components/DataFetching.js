import React, {useEffect, useState} from 'react';
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(null);
    const [postSingle, setPostSingle] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res, "get response data");
            setPosts(res.data);
        }).catch((error) => {
            console.log(error, "error");
        });
    }, []);
    
    const getPostById = (idVar) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idVar}`).then((res) => {
            console.log(res, "get single post data");
            setPostSingle(res.data);
        }).catch((error) => {
            console.log(error, "error");
        });
    };

  return (
    <div>        
        <ul className='customList'>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title} <button onClick={() => getPostById(post.id)}>View</button></li>
                )
                )
            }
        </ul>
        
        <p>{postSingle.title}</p>
        <p>{postSingle.body}</p> 
        <p>By {postSingle.userId}</p>         
    </div>
  )
}

export default DataFetching;