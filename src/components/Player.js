import {useContext, useEffect, useState} from "react";
import SongDataContext from "../helpers/context";
import '../style/Player.css'


const Player = ( )=> {

    const { id, data} = useContext(SongDataContext)
    const [songId, setSongId] = useState(0)


    useEffect(()=>{
        setSongId(id - 1)
    },[id])


    return(
        <>
            {data.length > 0 ?

                <div className='playerContainer'>
                    <div className='musicCover' style={{background: `url(${data[songId]?.cover})`}}> </div>
                    <div className='musicInfo'>
                        <h2>{data[songId]?.title}</h2>
                        <div>{data[songId]?.artist}</div>
                        <div>{data[songId]?.length}</div>
                        <audio
                            controls
                            src={data[songId]?.stream}>
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>
                </div>

                : undefined   }

        </>
    )
}


export default Player