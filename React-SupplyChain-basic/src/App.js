import React from "react";
import web3 from "./web3";
import Supplychain from "./Helper";

class App extends React.Component {
  state = {
    x: "",
    balance: "",
    value:'',
    message:''
  };
  async componentDidMount() {
    const x = await Supplychain.methods.x().call();
      const balance = await web3.eth.getBalance(Supplychain.options.address);

    this.setState({ x, balance });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

   this.state.message = await Supplychain.methods.getDrugList().call();
    console.log(this.state.message);
    console.log(this.state.x);

  };

  onClick = async () => {
    const accounts = await web3.eth.getAccounts();
    

    this.state.message =   await Supplychain.methods.addUser("0x94978344f445792C9d4a72809D4Fe93D73C80e0E","Teja",123,"Distributor","TEJ","1234teja","123@gmail.com",true).send({
      from:accounts[0],
    });
    console.log(this.state.message);

  };

  render() {
    return (
      <div>
        <h2>Supplychain Contract</h2>
    

        <hr />
        <form onSubmit={this.onSubmit}>
          
          <div>
         
          </div>
          <button>getDrugList</button>
        </form>

        <hr />
        <button onClick={this.onClick}>getUserList</button>

        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default App;
