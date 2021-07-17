import React, { useState, useEffect, Suspense } from 'react'
import { Route, Redirect } from 'react-router'
import Layout from './../components/layouts/Layout'
import { routeLinks, TIMEOUT_BEFORE_REDIRECTING } from '../config/public-variables'
import { useSelector, useDispatch } from 'react-redux';
import Http from "./../config/httpService";
import { SET_TOKEN, SET_USER } from "./../config/types";
import { isAuthenticated, getAccessToken, setNewPath } from '../helpers/cookies';
import Preloader from '../components/layouts/Preloader';
const RestrictedRouter = ({ path, component: Component, ...res }) => {
    console.log('path :', path);
    const dispatch = useDispatch()
    const { userReducer } = useSelector(state => state);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(userReducer.isLoggedIn)

    useEffect(() => {
        try {
            if (getAccessToken() !== undefined && getAccessToken() !== '') {
                console.log('getAccessToken() :', getAccessToken());

                (async () => {
                    const config = {
                        headers: { Authorization: `Bearer ${getAccessToken()}` }
                    };
                    const user = await Http.get(`auth/user`, config)
                    if (user.status === 200) {
                        await dispatch({ type: SET_TOKEN, payload: getAccessToken() })
                        await dispatch({ type: SET_USER, payload: user.data })
                        setIsUserLoggedIn(true)
                    } else {
                        setIsUserLoggedIn(false)
                    }
                })()
            }

            // const user = await Http.get(`auth/user`, config)
            // dispatch({ type: SET_TOKEN, payload: { access_token: cookies.access_token } })
            // setIsUserLoggedIn(status)
            // const fetchUser = async () => {
            //     try {
            //         const config = {
            //             headers: { Authorization: `Bearer ${cookies.access_token}` }
            //         };
            //         const user = await Http.get(`auth/user`, config)
            //         if (user.status === 200) {
            //             await dispatch({ type: SET_TOKEN, payload: { access_token: cookies.access_token } })
            //             await dispatch({ type: SET_USER, payload: user.data })
            //             setIsUserLoggedIn(true)
            //         } else {
            //             setIsUserLoggedIn(false)
            //         }
            //     } catch (error) {
            //         console.log('router fetch user login:', error.response.data.message);
            //     }
            // }
            // fetchUser()

        } catch (error) {

        }
    }, [isUserLoggedIn])

    useEffect(() => {
        try {
            setNewPath(path)
        } catch (error) {
            console.log('error:', error);
        }
    })

    return (
        <Route exact {...res} render={() => (
            isUserLoggedIn ? (
                <Layout>
                    <Component {...res} />
                </Layout>
            ) : (
                // setTimeout(() => {
                <Redirect to={routeLinks.defaultLogin} />
                // }, TIMEOUT_BEFORE_REDIRECTING)
            )
        )} />
    )
}

export default RestrictedRouter
