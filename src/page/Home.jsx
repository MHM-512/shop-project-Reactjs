
import { Button, Typography } from "@mui/material"
import { useState } from "react"
import { useLocation } from 'react-router-dom';
import MediaCard from "../component/MediaCard";
import Footer from "./Footer";

export default function Home() {
    const [isvisible, setvisible] = useState(true)
    const location = useLocation();
    // get message 
    const [alertMessage, setAlertMessage] = useState(location.state?.message || "");
    return (
        <>

            <Button variant="outlined" onClick={() => setvisible((prev) => !prev)}>
                {isvisible ? 'hide' : 'show'}
            </Button>


            <div>
                {isvisible && <div>
                    <Typography variant="h3"> page Home </Typography>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis minima ullam odio debitis perferendis iusto dolore
                        voluptatum nesciunt, omnis laboriosam porro magnam, consequuntur
                        et veritatis sit aperiam culpa dignissimos quisquam!
                    </Typography>
                </div>}
            </div>

            <MediaCard />
            <Footer />
        </>
    )
}