import React, { Component } from 'react'
import Habit from './habit'

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
    ],
  }

  handleIncrement = habit => {}

  handleDecrement = habit => {}

  handleDelete = habit => {}

  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit
            key={habit.id} // props로 데이터 전달해줌.
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    )
  }
}

export default Habits
