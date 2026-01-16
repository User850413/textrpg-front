import React from 'react';

const AuthForm = ({children} : {children:React.ReactNode}) => {
    return (
        <form onClick={e => e.preventDefault()}>
            {children}
        </form>
    );
};

export default AuthForm;