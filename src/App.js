import React, { Component } from 'react';
import './App.css';
import {Tab, Button} from 'semantic-ui-react';
import LinkedList from './types/LinkedList';


const brothers = ['jonny','bobby','davie','danny','billy','timmy','tommy','tony','ronny','robbie'];

const listStyle = {
  background:"rgba(0,0,0,.2)",
  color:"white",
  border:"solid 1px rgba(255,255,255,.7)",
  margin:"4px",
  borderRadius: "3px"
}

const listContainerStyle= {
  "height":"200px",
  "overflow-y":"scroll",
  "background":"gray",
  width:"300px",
  margin:"auto auto 20px auto",
  "borderRadius": "6px"
}

class App extends Component {
  constructor(props){
    super(props);
    this.linkedList = new LinkedList()
    this.state = {count : 0};
    this.addBrother = this.addBrother.bind(this);
    this.addBrother(this.state.count)
  }

  componentDidMount(){
      this.addBrother(this.state.count)
  }

  addBrother(index){
    if(index <= brothers.length - 1){
      this.linkedList.prepend(brothers[index])
    }else{
      alert("All out of brothers!")
    }
    this.setState({count:index});
  }

  render() {
    const panes = [
      { menuItem: 'Linked List Example', render: () =>
          <Tab.Pane>
            <p>Current Item at Head {this.linkedList.head.value}</p>{this.linkedList.head.next && <p>Next Item {this.linkedList.head.next.value}</p>}
            <p>Tail {this.linkedList.tail.value}</p>
            <div style={listContainerStyle}>{this.linkedList.toArray().map((item)=> <p style={listStyle}>{item.value}</p>)}</div>

            <p>
              <Button color="green" onClick={()=>{
                const index = this.state.count + 1;
                this.addBrother(index)
              }}>Add a brother</Button>

              <Button color="red" onClick={()=>{
                this.setState({count:this.state.count-1})
                this.linkedList.deleteHead()

              }}>Delete Brother </Button>

              <Button color="red" onClick={()=>{
                this.setState({count:this.state.count-1})
                this.linkedList.deleteTail()

              }}>Delete Brother from the end</Button>

              <Button color="orange" onClick={()=>{
                const linkedList = this.linkedList
                debugger
              }}>Debug Linked List</Button>
            </p>
          </Tab.Pane> },
      { menuItem: 'Stack Example', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Binary Search Tree Example', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    const Tabs = () => <Tab panes={panes} />


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DataTypes</h1>
        </header>
        <div className="App-intro" style={{"margin":"30px"}}>
          <Tabs/>
        </div>
      </div>
    );
  }
}

export default App;
