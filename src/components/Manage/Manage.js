import React from 'react';
import useAuth from '../../hooks/useAuth'

const Manage = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>This is manage services</h2>
            {user.displayName}, {user.email}

        </div>
    );
};

export default Manage;