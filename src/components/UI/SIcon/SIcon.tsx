import React from 'react';
import classes from './SIcon.module.css';
import studicon from '../../../assets/images/graduation-hat.svg';

const sicon = () => {
    return (
        <div className={classes.Container}>
            <img src={studicon} alt='Student' />
        </div>
    );
}

export default sicon;