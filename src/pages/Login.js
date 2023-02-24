import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useForm } from "react-hook-form";
import Container from "../components/Container";
import {fetchLogout, fetchAuth, selectIsAuth,  } from "../redux/slices/auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import axios from 'axios';
import axios from '../utils/axios';
import Typography from "@mui/material/Typography";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
 
   const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
     defaultValues: {
       email: '',
       password: '',
     },
     mode: 'onChange',
    });
 
   const onSubmit = async (values) => {
      //dispatch(fetchAuth(values));
       const data = await dispatch(fetchAuth(values));
 
         if(!data.payload) {
        return alert('Не удалось авторизоваться');
         }
         if('token' in data.payload) {
          window.localStorage.setItem('token', data.payload.token);
        }
   };

  //  const onClickLogout = () => { 
	// 	 if(window.confirm('if you sure ')){
	// 	  dispatch(fetchLogout());
	// 	  //window.localStorage.removeItem('token');
  //   //axios.get('http://localhost:5000/api/user/logout')
	// 	 }
    
	//    }
    
 //   // console.log('isAuth', isAuth)
    if(isAuth) {
     return window.location.href = "https://keen-centaur-b5df4f.netlify.app";
    }
 

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <h1 style={{textAlign: 'center'}}>Please Log in</h1>
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              {/* <Button onClick={onClickLogout}  type="sumbit" size="large" variant="contained" fullWidth>
               Exit
             </Button> */}
              <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        // className={styles.field}
        label="E-Mail"
        type="email"
         error={Boolean(errors.email?.message)}
         helperText={errors.email?.message}
         {... register('email', { required: 'Укажите почту' })}
        fullWidth
      />
      <TextField 
      // className={styles.field} 
      label="Пароль"  
      type="password"
       error={Boolean(errors.password?.message)}
       helperText={errors.password?.message}
       {... register('password', { required: 'Укажите password' })}
      fullWidth 
      />
      {/* <Button    type="sumbit" size="large" variant="contained" fullWidth>
        Exit
      </Button> */}
      
        <Button disabled={!isValid}  type="sumbit" size="large" variant="contained" fullWidth>
        Войти
      </Button>
      
      
      </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
