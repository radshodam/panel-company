import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import styled from 'styled-components';
import Dashboard from './pages/dashboard/index';

const StyledBox = styled.div`
    width: 85%;
    background: white;
    transform: translate(-65px, 50px);
    border-radius: 9px;
    min-height: 100vh;
    box-shadow: #dce9f5 2px 0px 8px;
`;
const App: FC = () => {
    return (
        <Router>
            <Sidebar />

            <Switch>
            <Route exact path={"/"} component={Dashboard}/>

                {routes.map(({ containerPath, name, path }) => (
                    <Route key={name} exact path={path}>
                        {(props) => {
                            let Container = require(`${containerPath}`).default;
                            return (
                                <>
                                    <StyledBox>
                                        <Container {...props} />
                                    </StyledBox>
                                </>
                            );
                        }}
                    </Route>
                ))}
            </Switch>
        </Router>
    );
};

export default App;
