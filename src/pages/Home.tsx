import { useEffect } from "react";

export function Home(){
    useEffect(()=>{
        (async() =>{
            const response = await fetch("https://api.coinpaprika.com/v1/coins", {
                method:"POST",
                headers: new Headers({
                    'content-type': 'application/json'
                }),
            });
            const json = await response.json();
            console.log(json);
        })();

    },[]);

    return(
        <div></div>
    )
}