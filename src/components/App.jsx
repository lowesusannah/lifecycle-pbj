import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam)');
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentWillMount(){
    console.log('2. Open jar of peanut butter by twisting the lid counter-clockwise.');
  }


  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
        </Switch>
      </div>
    );

  }

  componentDidMount(){
    console.log('3. Pick up a butter knife by the handle and insert into the jar of peanut butter');
  }

  componentWillReceiveProps(){
    console.log('4. Withdraw the knife from the peanut butter, and evenly spread it onto one slice of bread.');
  }

  componentWillUpdate(){
    console.log('5. Grab a second slice of bread.');
  }

  componentDidUpdate(){
    console.log('6. Repeat steps 2-4 with second slice of bread, using jelly instead of peanut butter.');
  }

  componentDidUnMount() {
    console.log('7. Press the two slices of bread together so that the peanut butter and jelly meet.');
  }
}

export default App;
