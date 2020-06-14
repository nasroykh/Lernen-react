import React from 'react';
import classes from './TIcon.module.css';
import teachicon from '../../../assets/images/TeacherIcon@2x.png';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const ticon = () => {
    return (
        <Aux className={classes.Container}>
            <input type="image" src={teachicon} alt='Teacher' className={classes.TIcon} />
        </Aux>
    );
}

export default ticon;