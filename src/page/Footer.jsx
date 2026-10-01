import { Box, Typography } from "@mui/material";
import { blueGrey } from '@mui/material/colors';

export default function Footer() {

    return (
        <>
            <Box sx={{ width: '100%', height: '220px', bgcolor: blueGrey[300], padding: '20px', boxSizing : 'border-box',}}>
                <Typography variant="h4"> footer </Typography>
                <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor blanditiis nostrum magnam, commodi veniam laboriosam praesentium nam fuga rerum voluptatum,
                    quos repellat cum debitis animi quis non quisquam, corrupti iste at possimus. Cumque
                    voluptatibuscorrupti architecto vitae, fugit libero incidunt minima, inventore,
                    ratione omnis quis.
                </Typography>
            </Box>
        </>
    )
}