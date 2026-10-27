// import "./App.css";
// import { Component } from "react";
// import Form from "./Components/Form";
// import UserList from "./Components/UserList";

// class App extends Component {
//   state = {
//     userInfo: [
//       {
//         id: "1",
//         lastName: "Олександр",
//         secondName: "Шевченко",
//         email: "oleksandr@gmail.com",
//       },
//       {
//         id: "2",
//         lastName: "Марія",
//         secondName: "Коваленко",
//         email: "maria@gmail.com",
//       },
//       {
//         id: "3",
//         lastName: "Андрій",
//         secondName: "Бондаренко",
//         email: "andrii@gmail.com",
//       },
//       {
//         id: "4",
//         lastName: "Софія",
//         secondName: "Мельник",
//         email: "sofia@gmail.com",
//       },
//       {
//         id: "5",
//         lastName: "Дмитро",
//         secondName: "Ткаченко",
//         email: "dmytro@gmail.com",
//       },
//     ],
//   };

//   handleApp = (data) => {
//     this.setState((prev) => ({
//       userInfo: [...prev.userInfo, data],
//     }));
//   };

//   handleDelete = (userId) => {
//     this.setState((prev) => ({
//       userInfo: prev.userInfo.filter((user) => user.id !== userId),
//     }));
//   };

//   render() {
//     console.log(this.state.userInfo);
//     return (
//       <>
//         <Form onApp={this.handleApp} />
//         <UserList onDell={this.handleDelete} userData={this.state.userInfo} />
//       </>
//     );
//   }
// }

// export default App;

import { Component } from "react";

class App extends Component{

  handleApp = (data) => {
    console.log("Отримали дані в App >>> ", data);
  }

  render(){
    return(
      <>
      <Form onApp={this.handleApp}/>
      </>
    )
  }
}

export default App