import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Todolist(){
  const [post, setPost] = React.useState(null)
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response)
      setPost(response.data);
    });
  }, []);
  if (!post) return null;
  
  return(
    <div>
      <h1 className="text-4xl bg-white border-2 border-black w-max mx-auto">測試</h1>
    </div>
  )
}

export default Todolist