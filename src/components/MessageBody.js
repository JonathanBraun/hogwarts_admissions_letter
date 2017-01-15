import React from 'react';

const MessageBody = props => {
  return (<div>
    <h1> HOGWARTS SCHOOL OF <br/>WITCHCRAFT AND WIZARDRY</h1>
        <br/>
        <h4><strong>Headmaster: Albus Dumbledore</strong></h4>
        <h5>(Order of Merlin, First Class, Grand Sorc., Chf. Warlock<br/> Supreme Mugwump,
        International Confed. of Wizards)</h5>
        <br/>
        <br/>
        <br/>
        <p>Dear {props.name},</p>

        <p>{props.message}</p>

        <p>Yours sincerely,</p>

        <p><strong>Minerva McGonagall<br/>
        Deputy Headmistress</strong></p>
    </div>
  );
};

export default MessageBody;
