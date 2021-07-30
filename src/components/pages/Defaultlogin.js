import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Content from '../sections/Defaultlogin/Content';
import { useHistory } from 'react-router-dom'
import { getLastPath } from '../../helpers/cookies';

const Defaultlogin = () => {
    const history = useHistory()
    const { userReducer } = useSelector(state => state);

    useEffect(() => {
        // console.log(history.previousLocation());
        // history.goBack()
        if (userReducer.isLoggedIn) {
            history.push(getLastPath())
        }
    }, [userReducer.isLoggedIn])

    return (
        <>
            <Content />
        </>
    );
}

export default Defaultlogin;