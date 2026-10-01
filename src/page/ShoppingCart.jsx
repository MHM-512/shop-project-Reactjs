import { Box, Button, CircularProgress, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import axios from "axios";
import { blueGrey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
// theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useCart } from "../context/CartContext";

export default function ShoppingCart() {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#1976D2',
            },
            secondary: {
                main: '#9c140b',
            },
        },
        typography: {
            fontFamily: 'Roboto',
        },
    });
    const { cartItems, removeFromCart, clearCart } = useCart();
    const controller = new AbortController();
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
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: '20px',
                        gap: 2,
                        width: '500px',
                        padding: '20px',
                        bgcolor: blueGrey[400],
                    }}>
                        {cartItems.map((item) => (
                            <List key={item.id} sx={{ width: '100%', maxWidth: 360, bgcolor: blueGrey[600] }}>
                                <ListItem >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={item.title} secondary={item.short_description} />
                                    <Button onClick={() => removeFromCart(item.id)} variant="text" color="secondary"> <CloseIcon />  </Button>
                                </ListItem>
                            </List>
                        ))}

                        <Button onClick={clearCart} variant="contained" color="secondary"> clear All </Button>
                    </Box>
                </Box>

            </ThemeProvider >
        </>
    )
}