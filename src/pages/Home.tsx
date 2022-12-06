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
        // var key = "6c6e554874676d6c38324646794978";
        // axios.get("http://openapi.seoul.go.kr:8088/" + key + "/json/LOCALDATA_072405/1/5/").then((res)=>{
        //     setData(res.data.LOCALDATA_072405.row)
        //     setLoad(true);
        // }).catch((error)=>{
        //     console.log(error)
        // })
        
        
        axios.get("http://openapi.foodsafetykorea.go.kr/api/sample/I2790/json/1/5").then((res)=>{
            setLoad(true);
            console.log(res)
        }).catch((error)=>{
            console.log(error)
        })
    }, [load]);

    return(
        <div>
            
        </div>
    )
}