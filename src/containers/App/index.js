import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="/register">
                    <RegisterPage />
                </Route>
                <Route exact path="*">
                    <NotFoundPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;