import React, {useState} from "react";
import './App.css';

function AlertMessage(props) {
  const data = ["hello!", "welcome!", "goodby!"];

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)];
    props.setAlert('message: "' + re + '" .');
  }

  return <div className="alert alert-primary h5 text-primary">
    {/* {props.message} */}
    <h5>{props.alert}</h5>
    <button onClick={actionAlert} className="btn btn-primary">
      click!
    </button>
  </div>
}

function CardMessage(props) {
  const [count, setCount] = useState(0);

  const actionCard = () => {
    setCount(count + 1);
    props.setCard("card counter: " + count + "count.");
  }

  return <div className="card p-3 h5 border-primary text-center">
    {/* {props.message} */}
    <h5>{props.card}</h5>
    <button onClick={actionCard} className="btn btn-secondary">
      click!
    </button>
  </div>
}

function Card() {
  // const [msg, setMsg] = useState('This is sample message!');

  // const doAction = () => {
  //   let response = window.prompt('type your name!');
  //   setMsg("hello!" + response + "!");
  // }

  {/* ①stateの作成 */}
  const [alert, setAlert] = useState("this is alert message!");
  const [card, setCard] = useState("this is card message!");

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        {/* <AlertMessage message={msg} />
        <CardMessage message={msg} />
        <button onClick={doAction} className="btn btn-primary">click!</button> */}
        {/* ②stateの値をpropsとして子に渡す */}
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <hr />
        <div className="text-right">
          <p>{alert}</p>
          <p>{card}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;