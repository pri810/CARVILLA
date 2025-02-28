import { useEffect } from "react";
import { useParams } from "react-router-dom";


function Search(){
    let { query } = useParams();
    console.log(query)
    useEffect(() =>{
        fetch("http://localhost:8000/searchEngine" + query ,{
            method:"POST",
        })
           .then((res)=>{
            return res.json();
           })
           .then((res)=>{
            query(res)
           })
           .catch((error)=>{console.log(error)})
    }, [])
    return(
        <h1>{query}</h1>
    )
}
export default Search



  