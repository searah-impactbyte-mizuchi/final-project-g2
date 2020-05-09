import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({
    children,
    component: Component,
    ...rest
}) {
    return (
        <Route
            {...rest}
            render={({ location, props }) =>
                JSON.parse(localStorage.getItem("isLoggedIn")) === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}