import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { blueGrey } from '@mui/material/colors';

import { Box, Button, TextField, Typography, useFormControl } from '@mui/material';
// Icon Singuo
import Face6Icon from '@mui/icons-material/Face6';
// Hook form 
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

//react roter
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const themeBG = createTheme({
        palette: {
            background: {
                default: '#047790',
            },
        },
    });

    //submit form 
    const schema = yup.object().shape({
        name: yup.string().required('name is Mandatory').max(10),
        age: yup.number().positive().min(18).max(100).required('age is Mandatory'),
        email: yup.string().email('It is invalid.').required('email is Mandatory'),
        password: yup.string().min(4).max(8).required('password is Mandatory').matches(/[a-z]+/),
        confimPassword: yup.string().oneOf([yup.ref('password')], 'Password not maches').required()
    })
    //hook form 
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
 
    let navgate = useNavigate()
    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
        localStorage.setItem("userData", JSON.stringify(data));
        navgate('/Profile')
    };


    return (
        <ThemeProvider theme={themeBG}>
            {/* style bgc */}
            <CssBaseline />
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
                            // height: 511,
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
                                <Typography variant="h4"> singUp account </Typography>
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

                        <Box sx={{ width: '100%', }}>
                            <Box sx={{ marginTop: '35px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <TextField
                                    label="enter your name"
                                    type="text"
                                    variant="outlined"
                                    sx={{ width: '300px' }}
                                    {...register("name")}
                                    helperText={errors.name?.message}
                                />

                            </Box>
                            {/* <Typography> {errors.name?.message} </Typography> */}
                            <Box sx={{ marginTop: '35px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <TextField
                                    label="enter your age"
                                    type="number"
                                    variant="outlined"
                                    sx={{ width: '300px' }}
                                    {...register("age")}
                                    helperText={errors.age?.message}
                                />
                            </Box>
                            <Box sx={{ marginTop: '35px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <TextField
                                    label="enter your Email"
                                    type="email"
                                    variant="outlined"
                                    sx={{ width: '300px' }}
                                    {...register("email")}
                                    helperText={errors.email?.message}
                                />
                            </Box>
                            <Box sx={{ marginTop: '35px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>


                                <TextField
                                    label="password"
                                    type="password"
                                    variant="outlined"
                                    sx={{ width: '300px' }}

                                    {...register("password")}
                                    helperText={errors.password?.message}
                                />
                            </Box>
                            <Box sx={{ marginTop: '35px', width: '100%', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                                <TextField
                                    label="confim Password"
                                    type="password"
                                    variant="outlined"
                                    sx={{ width: '300px' }}
                                    {...register("confimPassword")}
                                    helperText={errors.confimPassword?.message}

                                />
                            </Box>

                        </Box>
                        <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            {/* hook form */}
                            <Button type="submit" variant="contained" color='success' sx={{ margin: '10px' }}>sing up</Button>
                            <Button onClick={() => { navgate('/login') }} variant="text"><Typography>I have an account</Typography></Button>

                        </Box>

                    </Box>
                </Box>

            </form>

        </ThemeProvider>

    );

}
