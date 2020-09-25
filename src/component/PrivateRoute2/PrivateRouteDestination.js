import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../../App';

const PrivateRouteDestination = ({children, ...rest}) => {
    const { userElement } = useContext(Context);
    const [user, setUser] = userElement;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/booking/:id",
                    state: { from: location }
                    }}
                />
                )
            }
            />
    );
};

export default PrivateRouteDestination;