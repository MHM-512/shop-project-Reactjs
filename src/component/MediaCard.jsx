import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { blueGrey } from '@mui/material/colors'

import { useCart } from '../context/CartContext';

export default function MediaCard() {

    const { addToCart } = useCart()
    const navigate = useNavigate();


    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
                    setError("err server");
                    console.error(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });


    }, []);

    const handleVisit = (id) => {

        navigate(`/details/${id}`);
    };
    const handleAddtoCart = (item) => {
        addToCart(item)
    }

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
        <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap', p: 2 }}>
            {items.map((item) => (
                <Card key={item.id}
                    sx={{
                        width: 245,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        bgcolor: blueGrey[100]
                    }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item.image}
                        title={item.title}
                    />
                    {/* <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: '100%', height: 'auto' }}
                        onError={(e) => { e.target.src = '/images/placeholder.jpg'; }} // در صورت نبودن عکس، یک تصویر جایگزین نشان بده
                    /> */}
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.short_description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => handleVisit(item.id)} size="small">
                            Visit
                        </Button>
                        <Button onClick={() => handleAddtoCart(item)} size="small">
                            add to cart
                        </Button>
                    </CardActions>
                </Card>

            ))}
        </Box>


    );
}
