import React, { useState, useEffect } from "react";
import './App.css';

function useCounter() {
  const [num, setNum] = useState(0);
  const count = () => {
    setNum(num + 1);
  }
  return [num, count];
}

function AlertMessage(props) {
  const [counter, plus] = useCounter();

  return <div className="alert alert-primary h5 text-primary">
    <h4>count: {counter}</h4>
    <button className="btn btn-primary" onClick={plus}>click</button>
    <h5>{props.msg}</h5>
  </div>
}

function Effect() {
  const [value, setValue] = useState(1000);
  const [tax1, setTax1] = useState(0);
  const [tax2, setTax2] = useState(0);
  const [msg, setMsg] = useState(<p>set a price...</p>);

  const doChange = (event) => {
    setValue(event.target.value);
  }

  // const doAction = (event) => {
  //   let res = <div>
  //     <p>軽減税率(8%) : {tax1} 円</p>
  //     <p>軽減税率(10%) : {tax2} 円</p>
  //   </div>
  //   setMsg(res);
  // }

  useEffect(() => {
    let res = <div>
      <p>軽減税率(8%) : {tax1} 円</p>
      <p>軽減税率(10%) : {tax2} 円</p>
    </div>
    setMsg(res)
  }, [tax1, tax2])

  useEffect(() => {
    setTax1(Math.floor(value * 1.08));
  })

  useEffect(() => {
    setTax2(Math.floor(value * 1.1));
  })

  // useEffect(() => {
  //   let total = 0;
  //   for (let i = 0; i<= value; i++) {
  //     total += i;
  //   }
  //   setMsg("total: " + total + ".");
  // })

  return (
    <div>
      <h1  className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>input:</label>
          <input type="number" className="form-control" onChange={doChange} />
        </div>
          {/* <button className="btn btn-primary" onClick={doAction}>Calc!</button> */}
      </div>
    </div>
  )
}

export default Effect;
