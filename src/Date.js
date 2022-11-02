import { Component } from "react";

  export class Date extends Component {
    state = {
      date: ""
    };
  
    componentDidMount() {
      this.getDate();
    }
  
    getDate = () => {
      var date = new Date().toDateString();
      this.setState({ date });
    };
  
    render() {
      const { date } = this.state;
  
      return (
      <div>{date}</div>
      )
    }
  }
  
  
 