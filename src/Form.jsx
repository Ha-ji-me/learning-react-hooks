import React, { useState } from "react";
import './App.css';

function AlertMessage(props) {
  const data = props.data;
  const msg = JSON.stringify(data);

  return <div className="alert alert-primary h5 text-primary">
    <h5>{msg}</h5>
    <hr />
    <table className="table h6">
      <tr><th>Name</th><td>{data.name}</td></tr>
      <tr><th>Mail</th><td>{data.mail}</td></tr>
      <tr><th>Age</th><td>{data.age}</td></tr>
    </table>
  </div>
}

function Form() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState("");
  const [form, setForm] = useState({
    name:'no name', mail:'no mail', age:0
  });

  const doChangeName = (event) => {
    setName(event.target.value);
  }
  const doChangeMail = (event) => {
    setMail(event.target.value);
  }
  const doChangeAge = (event) => {
    setAge(event.target.value);
  }
  const doSubmitForm = (event) => {
    setForm({name:name, mail:mail, age:age})
    event.preventDefault();
  }

  return(
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage data={form} setData={setForm}/>
        <form onSubmit={doSubmitForm}>
          <div className="form-group">
            <label>Name:</label>
            {/* onChangeによってinputのvalueを更新している */}
            <input type="text" className="form-control" onChange={doChangeName} />
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input type="text" className="form-control" onChange={doChangeMail} />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="text" className="form-control" onChange={doChangeAge} />
          </div>
          <input type="submit" className="btn btn-primary" value="Click!" />
        </form>
      </div>
    </div>
  )
}

export default Form;