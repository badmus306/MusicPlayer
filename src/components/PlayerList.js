import '../style/PlayerList.css'
import {useContext} from "react";
import SongDataContext from "../helpers/context";

const PlayerList = () => {
    const { id, setId, data} = useContext(SongDataContext)

    return(
        <div className='listContainer'>

            {

                data?.map((value,index) => {
                    return(
                        <div className='listItem' key={index} onClick={()=>setId(value.id)}>
                            <div className='itemImg' style={{background:`url(${value.cover} )`, backgroundSize:'100px'}}> </div>
                            <div className='itemInfo'>
                                <div className='musicTitle'>{value.title}</div>
                                <div>{value.artist}</div>
                                <div>{value.length}</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default PlayerList