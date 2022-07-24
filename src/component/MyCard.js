import bootstrap from "bootstrap";
import "./style.css"
import annie from '../asset/image/annie-spratt-feU8G7E5ODI-unsplash.jpg'
// import video1 from '../asset/video/1.mp4'
// import video2 from '../asset/video/2.mp4'
import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios'

function MyCard() {
    const [allUsers, setallUsers] = useState([])
    const [error, setError] = useState([])
    const url2 = "https://imdb-api.com/en/API/Top250Movies/k_81crurks"
    const [isloading, setisloading] = useState(true)
    const [num, setnum] = useState(0)
    useEffect(() => {
        console.log(`yo yo yo`);
        makeRequest()
    }, [])
    const makeRequest = () => {
        axios.get(url2).then((res) => {
            if (res.status == 200) {
                console.log(res.data.items)
                setallUsers(res.data.items)
                setisloading(false)
            } else {
                console.log(`an error occured`);
            }
        }).catch((err) => {
            setError(err)
        })
    }
    return (
<>

       {isloading ? <div>Still loading...</div> :
                 allUsers.map((user) => (
                     <div key={user.id}>
                    <div className="card m-3 mt-4">
                        <img src={user.image} className="card-img-top h-75" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{user.title}</h5>
                        </div>
                    </div>
                </div>
                ))
            }

        </>
    )
}

export default MyCard