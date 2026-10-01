

import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
//icone
import Face6Icon from '@mui/icons-material/Face6';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
// Hook form 
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom';
export default function Profile() {
    let navgate = useNavigate()

    // bgcolor and theme
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790',
            },
        },
    });
    // Read localStorage for deta singup
    const [user, setUser] = useState(null)
    useEffect(() => {
        // خواندن داده از localStorage
        const storedData = localStorage.getItem("userData");
        if (!storedData) {
            navgate('/SignUp');
        }
        if (storedData) {
            setUser(JSON.parse(storedData));
        }
    }, [navgate]);


    // change profile handler
    //submit form 
    const schema = yup.object().shape({
        name: yup.string().required('name is Mandatory').max(10),
        age: yup.number().positive().min(18).max(100).required('age is Mandatory'),
        email: yup.string().email('It is invalid.').required('email is Mandatory'),
        password: yup.string().min(4).max(8).required('password is Mandatory').matches(/[a-z]+/),

    })
    //hook form 
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    // btn seve change
    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
        localStorage.setItem("userData", JSON.stringify(data));
        setUser(data);
    };



    return (
        <ThemeProvider theme={themeBG}>
            {/* style bgc */}
            <CssBaseline />
            <Box sx={{
                height: '80vh',
                width: '1800',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom : '30px',
            }}>
                <Box
                    sx={{
                        display: 'flex',
                        // justifyContent: 'space-around',
                        gap: '150px',
                        alignItems: 'center'
                    }}
                >

                    <Box
                        sx={{
                            marginTop: '50px',
                            width: 278,
                            height: 290,
                            borderRadius: 3,
                            bgcolor: blueGrey[200],
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'left',
                            alignItems: 'start',
                            padding: 3,
                            position: 'relative',
                        }}
                    >
            
                        <AccountCircleIcon fontSize='100px' sx={{
                            position: 'absolute',
                            // Botton : '50px' ,
                            fontSize: '50px',
                            top: 0,
                            left: 0,

                        }} />
                        <Typography sx={{ borderBottom: 1, marginBottom: 2, marginTop: 2.5 }} variant="h4"> your Profile: </Typography>

                        <Stack sx={{

                            gap: '20PX'
                        }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <SupervisorAccountIcon />

                                <Typography>name : {user?.name}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <DriveFileRenameOutlineIcon />
                                <Typography>age: {user?.age}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <EmailIcon />
                                <Typography>Email: {user?.email} </Typography>

                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <PasswordIcon />
                                <Typography>Password:  ******** </Typography>
                            </Box>


                        </Stack>
                    </Box>

                    {/*  change profile */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {/* conteiner box */}
                            <Box
                                sx={{
                                    marginTop: '50px',
                                    width: 564,
                                    height: 511,
                                    borderRadius: 3,
                                    bgcolor: blueGrey[200],
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'left',
                                    alignItems: 'start',
                                    padding: 5
                                }}
                            >

                                {/* header container box */}
                                <Box
                                    sx={{
                                        width: '450px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    {/* icon and name,Email */}
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Face6Icon sx={{ fontSize: '70px' }} />
                                        <div>
                                            <Typography>{user?.name}</Typography>
                                            <Typography>{user?.email}</Typography>
                                        </div>
                                    </Box>
                                    <Box>
                                        <Typography variant="h4"> change profile </Typography>
                                    </Box>
                                </Box>

                                <Box
                                    sx={{
                                        borderTop: 1,
                                        width: "100%",
                                        marginTop: '20px',
                                    }}
                                >

                                </Box>
                                {/* main */}
                                <Box>
                                    <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography> Name </Typography>
                                        <TextField
                                            label="name"
                                            type="text"
                                            variant="standard"
                                            sx={{ width: '300px' }}
                                            {...register("name")}
                                            helperText={errors.name?.message}
                                        />
                                    </Box>
                                    <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography> Age </Typography>
                                        <TextField
                                            label="age"
                                            type="number"
                                            variant="standard"
                                            sx={{ width: '300px' }}
                                            {...register("age")}
                                            helperText={errors.age?.message}
                                        />
                                    </Box>
                                    <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography> Email </Typography>
                                        <TextField
                                            label="Email"
                                            type="email"
                                            variant="standard"
                                            sx={{ width: '300px' }}
                                            {...register("email")}
                                            helperText={errors.email?.message}
                                        />
                                    </Box>
                                    <Box sx={{ marginTop: '20px', width: '400px', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography> password </Typography>
                                        <TextField
                                            label="password"
                                            type="password"
                                            variant="standard"
                                            sx={{ width: '300px' }}
                                            {...register("password")}
                                            helperText={errors.password?.message}
                                        />
                                    </Box>

                                    <Box sx={{ margin: '20px' }}>
                                        <Button type='submit' variant="contained" color='error' sx={{ margin: '10px' }}>seve change </Button>
                                        <Button variant="contained">rest</Button>
                                    </Box>

                                </Box>

                            </Box>
                        </Box>
                    </form>

                </Box>


            </Box>
           
        </ThemeProvider >
    );
}
