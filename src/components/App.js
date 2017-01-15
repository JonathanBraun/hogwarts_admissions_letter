import React, { Component } from 'react';
import MessageBody from './MessageBody';

class App extends Component {
  constructor(props) {
    super(props);


  this.rejectionText = `
  We regret to inform you that we are unable to offer you a place at Hogwarts
  School of Witchcraft and Wizardry. After reviewing your application and
  Github profile, we recognize that you are indeed a "coding wizard".
  Unfortunately, we have concluded that you do not have actual magical
  abilities, which you must have to be admitted into Hogwarts.`;

  this.acceptanceText = `We are pleased to inform you that you have a place at Hogwarts School of
  Witchcraft and Wizardry. Please find enclosed a list of all necessary books and
  equipment.

  Term begins on 1 September. We await your owl by no later than 31 July.`;

  this.state = {
    name: "Addressee",
    message: this.acceptanceText
  };

  this.handleAccept = this.handleAccept.bind(this);
  this.handleReject = this.handleReject.bind(this);
  this.handleName = this.handleName.bind(this);
}

handleAccept(event) {
  event.preventDefault();
  this.setState({ message: this.acceptanceText });
}

handleReject(event) {
  event.preventDefault();
  this.setState({ message: this.rejectionText });
}

handleName(event) {
  this.setState({ name: event.target.value });
}

render() {
  return (
    <div id='outer'>
  <form id='topbar'>Addressee
    <input type="text" className='text' placeholder="" onChange={this.handleName} />
    <input type="submit" className='accepted' value="Accepted" onClick={this.handleAccept} />
    <input type="submit" className='rejected' onClick={this.handleReject} />
  </form>
  <div className="box">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" />

  <MessageBody
    name={this.state.name}
    message={this.state.message} />
    </div>
</div>
  );
}
};
export default App;
