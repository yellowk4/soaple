import React, { useState } from 'react';
import Toolbar from './Toolbar';
import './Toolbar.scss';

const LandingPage = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div className='pd16'>소플과 함께하는 리엑트 공부!</div>
        </div>
    );
};

export default LandingPage;