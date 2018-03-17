import React, { Component } from 'react';
import { LayoutProvider } from 'react-page-layout';
import mainLayout from '../MainLayout';
import HomePage from '../HomePage';
import AboutCI from '../AboutCI';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Create a map for all your layouts
const layouts = {
    'public': mainLayout,
};
class App extends Component {

    render() {
        // Render your page inside
        // the layout provider
        return (
            <Router>
            <LayoutProvider layouts={layouts}>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/salesforceci' component={AboutCI} />

                </Switch>
            </LayoutProvider>
            </Router>

        );
    }
}

export default App;