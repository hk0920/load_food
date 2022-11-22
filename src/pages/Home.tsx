import axios from "axios";
import { useEffect } from "react";

export function Home(){
    useEffect(()=>{
        var key = "6c6e554874676d6c38324646794978";
        axios({
            url:"/api"+key+"/json/LOCALDATA_072405/1/5",
            withCredentials:true,
        }).then(function(res){
            console.log(res)
        }).catch(function(error){
            console.log("error=>" + error)
        });
    }, [])

    return(
        <div></div>
    )
}