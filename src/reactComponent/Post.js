import {useParams,useSearchParams} from "react-router-dom";

function   Post(props){
    let {category,id} =useParams()
    let [searchParam,setSearchParam] = useSearchParams()
    console.log(searchParam.get("apple"))
    console.log(searchParam.get('sort'))
    return (
        <div>
              <h1> page for post :{category}  and id is {id}</h1>
        </div>
    )
}

export default Post;