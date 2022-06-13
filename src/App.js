import React from 'react';

import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';


const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'I want to finish the course'},
    {id: 'cg2', text: 'Learn all the course main topics'},
    {id: 'cg3', text: 'Be the best so I can get an internship and course Q&A'}
  ]

  return (
    <div className='course-goals'>
      <h2>My May 2022 Goals!</h2>
      <NewGoal />
      <GoalList goals={courseGoals}/>
    </div>
    );
};

export default App;
