import axios from "axios";
import { useEffect, useState } from "react";
import { List } from "../components/List";
import { Loading } from "../components/Loading";

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
    let [total, setTotal] = useState(0);
    let [page, setPage] = useState(8);
    let [category, setCategory] = useState([]);

    useEffect(()=>{
        axios.get("/api"+"/list",{
            headers:{
                "X-CLIENT-KEY":"FgGlUD6DQw2l7UPwRU8Eh6"
            },
            withCredentials:true,
            params:{
                page:page,
            }
        }).then((res)=>{
            setTotal(res.data.data.totalSize);
            setData(res.data.data.list);
            setTimeout(() => {
                setLoad(true);
            }, 1000);
        }).catch((error)=>{
            console.log(error)
        })
    }, [load]);

    return(
        <>
            {!load?
                <Loading/>    
            :
               <List total={total} data={data}/>
            }
        </>
    )
}