import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import _ from 'lodash';

import * as data from './data.json';

import PersonCard from './components/PersonCard';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.info = _(data);
    this.state = {
      person: this.info.next().value,
      disabledButton: false
    };
    console.log(this.state.person);
    this.changeInformation = this.changeInformation.bind(this)
  }

  render() {
    return (
      <div className="App">
        <PersonCard
          name={this.state.person.name}
          position={this.state.person.position}
          text={this.state.person.text}
          image={this.state.person.image}
        />
        <Button
          text="Click here"
          onClick={this.changeInformation}
          disabled={this.state.disabledButton}
        />
      </div>
    );
  }

  changeInformation() {
    if (this.info.last() != this.state.person) {
      this.setState({person: this.info.next().value});
    }
    if (this.info.nth(-2) == this.state.person) {
      this.setState({disabledButton: true});
    }
  }
}

export default App;


// import React, {Component} from 'react';
// import './App.css';
// import 'semantic-ui-css/semantic.min.css';
// import _ from 'lodash';
//
// import PersonCard from './components/PersonCard';
// import Button from './components/Button';
//
// class App extends Component {
//   constructor() {
//     super();
//
//     const data = this.getJSON();
//
//     this.info = _(data);
//     this.state = {
//       person: this.info.next().value,
//       disabledButton: false
//     };
//     this.changeInformation = this.changeInformation.bind(this)
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <PersonCard
//           name={this.state.person.name}
//           position={this.state.person.position}
//           text={this.state.person.text}
//           image={this.state.person.image}
//         />
//         <Button
//           text="Click here"
//           onClick={this.changeInformation}
//           disabled={this.state.disabledButton}
//         />
//       </div>
//     );
//   }
//
//   changeInformation() {
//     if (this.info.last() != this.state.person) {
//       this.setState({person: this.info.next().value});
//     }
//     if (this.info.nth(-2) == this.state.person) {
//       this.setState({disabledButton: true});
//     }
//   }
//   getJSON() {
//     return fetch('http://localhost:3000/data.json')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         return responseJson;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }
//
// export default App;
