import React from 'react';

import './NewGoal.css'

const NewGoal = () => {
    return (
        <form className='add-Goal'>
        <input type='text' />
        <button type='submit'>Add Goal</button>
    </form>
    );
}

export default NewGoal;