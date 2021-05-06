import React from 'react';
import { Switch, Route } from 'react-router-dom';

/*Páginas*/
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import ErrorPage from '../pages/ErrorPage';
import SplashScreen from '../pages/SplashScreen';
import RestaurantDetails from '../pages/RestaurantDetails';
import Profile from '../pages/Profile';
import AdressPage from '../pages/AdressPage';

export default function Router() {
    return (
        <Switch>       
            <Route exact path={'/'}>
                <SplashScreen />
            </Route>
            <Route exact path={'/entrar'}>
                <LoginPage />
            </Route>
            <Route exact path={'/cadastro'}>
                <SignupPage />
            </Route>
            <Route exact path={'/cadastro/endereco'}>
                <AdressPage/>
            </Route>
            <Route exact path={'/home'}>
                <HomePage />
            </Route>
            <Route exact path={'/restaurante/:id'}>
                <RestaurantDetails />
            </Route>
            <Route exact path={'/carrinho'}>
                <CartPage />
            </Route>
            <Route exact path={'/perfil'}>
                <Profile />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
}