import Player from "./Player";
import PlayerList from "./PlayerList";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import api from "../helpers/api";
import SongDataContext from "../helpers/context";
import '../style/Main.css'


const Content = () => {
    const [data, setData] = useState([])
    const [ id, setId] = useState(undefined)

    const fetchData = async () => {
        try{
            const res =await api.get('/solo')
            if(res.data){
                setData(res.data.data)
            }
        }catch (e) {
            console.log("Can not retrieve data", e)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


    return(
        <div>
        <div className='mainContainer'>
            <SongDataContext.Provider value={{ id, setId,data }}>
                <Player />
                <PlayerList />
            </SongDataContext.Provider>

        </div>

        </div>
    )
}

export default Content