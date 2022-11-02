import { Component } from "react";

export class ToDoList extends Component {
  state = {
    userInput: "",
    list: []

  }
  
  onChangeEvent(e){
    this.setState({userInput: e})
  }

  addItem(input) {
    if (input === ""){
      alert("Please enter an item")
    }
    else {
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({list: listArray, userInput:""})
    }
  }

  deleteItem(){
    let listArray = this.state.list;
    listArray.length = 0;
    this.setState({list: listArray})
  }

  crossed(event) {
    const li = event.target;
    li.classList.toggle('crossed');
  }

  onFormSubmit(e){
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit} >
        <input type="text" placeholder="What do you need to do today?"
        onChange={(e) => {this.onChangeEvent(e.target.value)}}
        value={this.state.userInput}/>
        <div className="box">
          <button className="btn" onClick={() => this.addItem(this.state.userInput)}>Add</button>
        </div>
        <ol>
          {this.state.list.map((item, index) => (
            <li onClick={this.crossed} key={index}>{item}</li>
          ))}
        </ol>
        <div className="box">
          <button className="cta" onClick={() => this.deleteItem()}>Delete</button>
        </div>
        </form>
      </div>
    )
  }
}