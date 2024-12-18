import React, { useState } from 'react';
import Appbar from './Appbar';
import Mysnackbar from './Snackbar';
import { Box, Button, TextField, Typography, Paper, CircularProgress } from '@mui/material';
import { Email, Person, Phone, Send } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [snackbarmsg, setSnackbarmsg] = useState("Successfully Mail Sent to Brahadeesh");
    const [snackbaropen, setSnackbaropen] = useState(false);
    const [severity, setSeverity] = useState("success");
    const [loading, setLoading] = useState(false);

    const ACCESS_KEY = "1df4c3f6-cd2a-43ce-bf85-ce146bf689dc";

    const onSubmit = async (data) => {
        setLoading(true);
        const datas = {
            name: data.name,
            email: data.email,
            message: data.message,
            mobile: data.mobile,
            access_key: ACCESS_KEY,
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(datas),
            }).then((res) => res.json());

            if (res.success) {
                setSnackbarmsg("Successfully Mail Sent");
                setSeverity("success");
                setSnackbaropen(true);
                reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch (error) {
            setSnackbarmsg("Failed to send message. Try again!");
            setSeverity("error");
            setSnackbaropen(true);
        } finally {
            setTimeout(() => setSnackbaropen(false), 3000);
            setLoading(false);
        }
    };

    return (
        <div>
            <Appbar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', sm: 'row' }, // Form on top for mobile, right side for desktop
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '90vh',
                    padding: 2,
                    gap: { xs: 2, sm: 4 }, // Space between sections
                }}
            >
                {/* About Section */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: '40%' },
                        padding: 3,
                        backgroundColor: '#f5f5f5',
                        borderRadius: '16px',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.28)',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 500,
                            textAlign: 'center',
                            color: '#333',
                            lineHeight: 1.6,
                        }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            sx={{ fontWeight: 600, color: '#333', marginTop: '20px' }}
                        >
                            <div> About this <span style={{ color: 'blue' }}>Project</span></div>
                        </Typography>
                        <ol style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: '1.8', paddingBottom: '10px' }}>
                            <li style={{ marginBottom: '10px' }}>This project offers a secure and user-friendly contact form designed to simplify communication.</li>
                            <li style={{ marginBottom: '10px' }}>Our goal is to ensure smooth and efficient communication through a seamless experience.</li>
                            <li style={{ marginBottom: '10px' }}>Have queries or suggestions? Feel free to reach out—we’re here to assist and ensure you have the best possible experience.</li>
                        </ol>
                    </Typography>
                </Box>

                {/* Form Section */}
                <Paper
                    elevation={6}
                    sx={{
                        padding: '2rem',
                        width: { xs: '100%', sm: '50%' },
                        borderRadius: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{ fontWeight: 600, color: '#333', marginTop: '20px' }}
                    >
                        <div>Let's<span style={{ color: 'blue' }}> Connect</span></div>
                    </Typography>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}
                    >
                        <TextField
                            variant="outlined"
                            label="Name"
                            InputProps={{
                                startAdornment: <Person sx={{ marginRight: '8px', color: '#1976d2' }} />,
                            }}
                            {...register('name', { required: 'Name is required' })}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            label="Email"
                            InputProps={{
                                startAdornment: <Email sx={{ marginRight: '8px', color: '#1976d2' }} />,
                            }}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            label="Mobile"
                            InputProps={{
                                startAdornment: <Phone sx={{ marginRight: '8px', color: '#1976d2' }} />,
                            }}
                            {...register('mobile', {
                                required: 'Mobile is required',
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Invalid mobile number. Must be 10 digits.',
                                },
                            })}
                            error={!!errors.mobile}
                            helperText={errors.mobile?.message}
                            fullWidth
                        />
                        <TextField
                            variant="outlined"
                            label="Message"
                            multiline
                            rows={4}
                            {...register('message', { required: 'Message is required' })}
                            error={!!errors.message}
                            helperText={errors.message?.message}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={loading}
                            startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                            fullWidth
                            sx={{
                                padding: '10px',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                color: '#fff',
                                backgroundColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor: '#0d47a1',
                                },
                            }}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </Button>
                    </form>
                </Paper>
            </Box>
            <Mysnackbar snackbaropen={snackbaropen} snackbarmsg={snackbarmsg} severity={severity} />
        </div>
    );
};

export default Form;
