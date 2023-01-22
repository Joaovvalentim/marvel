// import { useState } from "react"
// import { useEffect } from "react"
// import axios from "axios"
import Sidebar from "../Sidebar/sidebar.js"
import Navbar from "../navbar/navbar.js"

function Home() {
    // const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/events?limit=50&ts=1&apikey=13de8cb4b81be778346b02357a4118a2&hash=5ec2696e63a3da51dcac469d72b9e93f")
    // const [item, setItem] = useState();
    // const [search, setSearch] = useState("");
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await axios.get(url)
    //         console.log(res.data)
    //         setItem(res.data.data.results);
    //         console.log(res.data.data.results)
    //         console.log(res.data.data.results.name)
    //     }
    //     fetch();
    // }, [url])

    // const searchMarvel = () => {
    //     setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=13de8cb4b81be778346b02357a4118a2&hash=ffd275c5130566a2916217b101f26150`)
    // }

    return (
        <div>
            <Navbar/>
            <Sidebar />
            {/* <p>Home</p> */}
        </div>

    )
}

export default Home