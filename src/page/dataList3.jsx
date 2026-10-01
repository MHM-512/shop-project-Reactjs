import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { blueGrey } from '@mui/material/colors';
import Footer from "./Footer";
export default function dataList3() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [item, setItems] = useState()
    useEffect(() => {

        const controller = new AbortController();

        axios
            .get("http://localhost:8000/data", { signal: controller.signal })
            .then((response) => {
                setItems(response.data);
                setError(null);
            })
            .catch((err) => {
                if (!axios.isCancel(err)) {
                    setError("err");
                    console.error(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ m: 2 }}>
                <Alert severity="error">{error}</Alert>
            </Box>
        );
    }


    return (
        <>
            <Box sx={{ marginTop: '20px', bgcolor: blueGrey[100] , marginBottom: '200px' }}>
                <Typography variant="h2"> {item[2].title} </Typography>
                <br />
                <Typography variant="body1"> {item[2].description}</Typography>
            </Box>
            <Footer />
        </>
    )
}