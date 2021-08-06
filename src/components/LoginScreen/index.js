import {  Grid,
          Paper, 
          Avatar, 
          TextField, 
          Button, 
          Typography, 
          Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Signup from '../LoginScreen/Signup'


const LoginScreen = ({ handleChange }) => {

    const paperStyle = { padding: 50, height: '75vh', width: 350, margin: "0 auto", backgroundColor: '#c6c6c66e' }
    const avatarStyle = { backgroundColor: '#424242' }
    const btnstyle = { margin: '16px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="secondary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={ () => handleChange("event", 1)} >
                      Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default LoginScreen;

































//import React, { useContext } from 'react';
//import { AuthContext } from '../../auth/AuthContext';
//import { types } from '../../types/types';
//
//const LoginScreen = ({ history }) => {
//
//    const { dispatch } = useContext( AuthContext );
//
//    const handleLogin = () => {
//
//        const lastPath = localStorage.getItem('lastPath') || '/';
//
//        dispatch({
//            type: types.login,
//            payload: {
//                name: 'Erika'
//            }
//        });
//
//        history.replace( lastPath );
//        
//    }
//
//    return (
//        <div className="container mt-5">
//            <h1>Login</h1>
//            <hr />
//
//            <button
//                className="btn btn-primary"
//                onClick={ handleLogin }
//            >
//                Login
//            </button>
//
//        </div>
//    )
//}

//export default LoginScreen;
