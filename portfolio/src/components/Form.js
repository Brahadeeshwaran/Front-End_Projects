import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Mysnackbar from './Snackbar';

const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [snackbarmsg, setSnackbarmsg] = useState('Successfully Mail Sent to Brahadeesh');
    const [snackbaropen, setSnackbaropen] = useState(false);
    const [severity, setSeverity] = useState('success');
    const [loading, setLoading] = useState(false);

    const ACCESS_KEY = '1df4c3f6-cd2a-43ce-bf85-ce146bf689dc'; // Replace with your actual Web3Forms access key

    const onSubmit = async (data) => {
        setLoading(true);

        const payload = {
            name: data.name,
            email: data.email,
            message: data.message,
            access_key: ACCESS_KEY,
        };

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(payload),
            }).then((res) => res.json());

            if (res.success) {
                setSnackbarmsg('Successfully Mail Sent');
                setSeverity('success');
                setSnackbaropen(true);
                reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSnackbarmsg('Failed to send message. Try again!');
            setSeverity('error');
            setSnackbaropen(true);
        } finally {
            setTimeout(() => setSnackbaropen(false), 3000);
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <form className="achievement-list" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg neumorphic-input"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg neumorphic-input"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>


                <div>
                    <input
                        type="message"
                        placeholder="Your message"
                        className="w-full p-3 rounded-lg neumorphic-input"
                        {...register('message', { required: 'Message is required' })}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>


                <button
                    type="submit"
                    disabled={loading}
                    className="neumorphic-btn primary"
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            <Mysnackbar snackbaropen={snackbaropen} snackbarmsg={snackbarmsg} severity={severity} />
        </div>
    );
};

export default Form;
