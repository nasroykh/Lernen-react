import React from 'react';
import classes from './Toolbar.module.css';
import TIcon from '../../UI/TIcon/TIcon';
import SIcon from '../../UI/SIcon/SIcon';

const toolbar = (props: any) => {
    return (
        <header className={classes.Toolbar}>
            <h1 className={classes.LernenLogo}>Lernen</h1>
            <div style={{marginLeft: "auto"}}>
                <TIcon />
            </div>
        </header>
    );
}

export default toolbar;