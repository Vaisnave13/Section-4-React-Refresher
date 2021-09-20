import React, {useState} from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text: 'Finish the Course'},
    {id:'cg2', text: 'Learn all about the Course Main Topics'},
    {id:'cg3', text: 'Help other students in the Course Q&A'},
]);

const addNewGoalHandler = newGoal => {
  //setCourseGoals(courseGoals.concat(newGoal));
  setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };
    //either
  //courseGoals.push(newGoal);
  //console.log(courseGoals);


  return (
  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal  onAddGoal = {addNewGoalHandler}/>
    <GoalList goals={courseGoals} />                                                                                                                 
  </div>
  )
};

//class App extends React.Component{
 // render() {
   // return <h1 title="This Works!">Hi, <span>this</span> is ReactJS</h1>;
  //}
//}

export default App;
