import './app.css';
import React, { Component } from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleIncrement = habit => {
    console.log(`handleIncrement ${habit.name}`);
    // const habits = [...this.state.habits]; // spread syntax
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        // 새로운 오브젝트 리턴하는데 count만 새로 덮어줌.
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDecrement = habit => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        // 새로운 오브젝트 리턴하는데 count만 새로 덮어줌.
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleDelete = habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = name => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
