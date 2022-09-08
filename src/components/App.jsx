import { Form } from "./Form/Form";
import React, {Component} from "react";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    
  }

  formSybmitHundler = data => {
    this.setState(prevState => {
      prevState.contacts.push(data)
      console.log(prevState.contacts)
      return { contacts: prevState.contacts};
    });
  }

  render() {

    return (
      <div>
       <Form onSubmit={this.formSybmitHundler}/>      
        <ul>
        {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
                <p >
                  {name}
                  <br />
                  {number}
                </p>
            </li>
          ))}
        </ul>      
      </div>
    );
  }
  
};
