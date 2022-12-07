import axios from "axios";
import { useEffect, useState } from "react";

interface dataType {
    name : string,
    stateCode : number,
    addr1 : string,
    addr2 : string,
    addrCode : number,
    category : string,
    x : number,
    y: number,
}
export function Home(){
    let [load, setLoad] = useState(false);
    let [data, setData] = useState([]);

    useEffect(()=>{
        axios.get("/api"+"/class/list",{
            headers:{
                "X-CLIENT-KEY":"FgGlUD6DQw2l7UPwRU8Eh6"
            },
            withCredentials:true
        }).then((res)=>{
            console.log(res.data.data.list[0])
        }).catch((error)=>{
            console.log(error)
        })
    }, []);

    return(
        <div>
            
        </div>
    )
}