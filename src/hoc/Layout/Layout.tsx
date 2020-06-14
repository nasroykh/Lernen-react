import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Toolbar />
            </Aux>
        );
    }

}

export default Layout;