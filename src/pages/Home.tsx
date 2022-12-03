import axios from "axios";
import { useEffect } from "react";

export function Home(){
    useEffect(()=>{
        var key = "6c6e554874676d6c38324646794978";
        axios.get("http://openapi.seoul.go.kr:8088/" + key + "/json/LOCALDATA_072405/1/5/").then((res)=>{
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

    return(
        <div></div>
    )
}