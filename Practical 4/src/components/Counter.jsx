import { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: parseInt(localStorage.getItem('count')) || 0,
      firstName: localStorage.getItem('firstName') || '',
      lastName: localStorage.getItem('lastName') || '',
      tempFirstName: localStorage.getItem('firstName') || '',
      tempLastName: localStorage.getItem('lastName') || ''
    };
  }

   increment = () => {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
      () => {
        localStorage.setItem('count', this.state.count);
        console.log("After Incrementing the Counter....  Value : ", this.state.count);
      }
    );
  };

  reset = () => {
    this.setState({ count: 0 }, () => {
      localStorage.setItem('count', 0);
      console.log("After Reseting the Counter....  Value : ", 0);
    });
  };
  
  decrement = () => {
    this.setState(
      prevState => ({ count: prevState.count - 1 }),
      () => {
        localStorage.setItem('count', this.state.count);
        console.log("After Decrementing the Counter....  Value : ", this.state.count);
      }
    );
  };

  incrementBy5 = () => {
    this.setState(
      prevState => ({ count: prevState.count + 5 }),
      () => {
        localStorage.setItem('count', this.state.count);
        console.log("After Incrementing the Counter by 5....  Value : ", this.state.count);
      }
    );
  };

  double = () => {
    this.setState({ count: this.state.count * 2 }, () => {
      localStorage.setItem('count', this.state.count);
      console.log("After Incrementing the Counter....  Value : ", this.state.count);
    });
  };

  handleFirstNameChange = (e) => {
    this.setState({ tempFirstName: e.target.value });
  };

  handleLastNameChange = (e) => {
    this.setState({ tempLastName: e.target.value });
  };

  handleKeyPress = (e, field) => {
    if (e.key === 'Enter') {
      const value = e.target.value;
      if (field === 'firstName') {
        this.setState({ firstName: value }, () => {
          localStorage.setItem('firstName', value);
        });
      } else if (field === 'lastName') {
        this.setState({ lastName: value }, () => {
          localStorage.setItem('lastName', value);
        });
      }
    }
  };

  render() {
    return (
      <div className="counter-container">
        <div className="counter-value">Count: {this.state.count}</div>
        <div>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.incrementBy5}>Increment 5</button>
        </div>
        
        <h1>Welcome to CHARUSAT!!!</h1>
        
        <div className="name-inputs">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              value={this.state.tempFirstName}
              onChange={this.handleFirstNameChange}
              onKeyPress={(e) => this.handleKeyPress(e, 'firstName')}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              value={this.state.tempLastName}
              onChange={this.handleLastNameChange}
              onKeyPress={(e) => this.handleKeyPress(e, 'lastName')}
            />
          </div>
        </div>
        
        <div className="name-display">
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
        </div>
      </div>
    );
  }
}

export default Counter;