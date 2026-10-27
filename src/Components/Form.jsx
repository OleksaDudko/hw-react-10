// import { nanoid } from "nanoid";
// import { Component } from "react";

// class Form extends Component {
//   state = {
//     lastName: "",
//     secondName: "",
//     email: "",
//     cources: "",
//     agre: false,
//   };

//   nameId = nanoid(5);
//   secondId = nanoid(5);
//   formId = nanoid(5);

//   handleSubmit = (evt) => {
//     evt.preventDefault();

//     const { lastName, secondName, email} = this.state;

//     const data = {
//       lastName: evt.currentTarget.elements.lastName.value,
//       secondName: evt.currentTarget.elements.secondName.value,
//       email: evt.currentTarget.elements.email.value,
//       id: String(Date.now()),
//     };
//     this.props.onApp(data)
//   };

  

//   handleChange = (evt) => {
//     const { name, value } = evt.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleCheck = () => {
//     const { agre } = this.state;
//     this.setState({
//       agre: !agre,
//     });
//   };

//   render() {
//     const { lastName, secondName, email, cources, agre } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit} id={this.formId}>
//         <label htmlFor={this.nameId}>введіть ім'я</label>
//         <input
//           id={this.nameId}
//           onChange={this.handleChange}
//           value={lastName}
//           type="text"
//           placeholder="Enter your name"
//           name="lastName"
//         />
//         <label htmlFor={this.secondId}>Secondname</label>
//         <input
//           id={this.secondId}
//           onChange={this.handleChange}
//           value={secondName}
//           type="text"
//           placeholder="Enter your second name"
//           name="secondName"
//         />
//         <input
//           onChange={this.handleChange}
//           value={email}
//           type="email"
//           placeholder="Enter ypur Email"
//           name="email"
//         />

//         <input
//           onChange={this.handleCheck}
//           type="checkbox"
//           name=""
//           checked={agre}
//         />
//         <button disabled={!agre} type="submit">
//           Send
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;


import { Component } from "react";

class Form extends Component{
  state = {
    lastName: "",
    secondName: "",
    email: "",
    cources: "",
    agre: true
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const {lastName, secondName, email, cources, agre} = this.state

    const data = {
      lastName,
      secondName,
      email,
      cources
    }

    this.props.onApp(data)

    this.setState({
      lastName: "",
      secondName: "",
      email: "",
      cources: "",
      agre: false
    })
  }

  handleChange = (evt) => {
    const {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleCheck = () => {
    const {agre} = this.state
    this.setState({
      agre: !agre
    })
  }

  render(){
    const {lastName, secondName, email, cources, agre} = this.state
    return(
      <>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} value={lastName} type="text" name="lastName" placeholder="enter last name"/>
        <input onChange={this.handleChange} value={secondName} type="text" name="secondName" placeholder="enter second name"/>
        <input onChange={this.handleChange} value={email} type="text" name="email" placeholder="enter email"/>

        <label> HTML
          <input onChange={this.handleChange} checked={cources === "html"}  value="html" type="radio" name="cources"/>
        </label>
        <label> CSS
          <input onChange={this.handleChange} checked={cources === "css"}  value="css" type="radio" name="cources"/>
        </label>
        <label> REACT
          <input onChange={this.handleChange} checked={cources === "react"}  value="react" type="radio" name="cources"/>
        </label>

        <input onChange={this.handleCheck} type="checkbox" name="" checked={agre}/>

        <button disabled={!agre} type="submit">Send</button>
      </form>
      </>
    )
  }
}

export default Form