import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from "./context/GlobalState";

import Edit from './edit'



// import Slot from './slot'

function Form() {
  let getData = () => {
    const user = localStorage.getItem("users");
    console.log(user);

    if (user) {
      return JSON.parse(user);
    } else {
      return [];
    }
  };

  const { addData, deleteData,editItem, user } = useContext(GlobalContext);
  console.info("user : ", user);

  const [data, setData] = useState(getData());
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [num, setNum] = useState<number | undefined >(undefined);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      name,
      surname,
      num,
    };
    console.info('submit user  : ', newUser);
    addData(newUser);
    setName('')
    setSurname('')
    setNum(undefined)
    
  };

  useEffect(() => {
    console.info("sja");
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    console.info("state users : ", user);
  }, [user]);






  return (
    <div>
      <form method="POST" onSubmit={submit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Number:</label>
          <input
            type="number"
            value={num}
            onChange={(e) => {
              setNum(parseInt(e.target.value, 0));
            }}
          ></input>
        </div>

        <div>
          <label>Time:</label>
        </div>

        <br />
        <button type="submit">Save</button>
      </form>

      {user.map((users: any , value:any) => {
        return (
          <div key={users.id}>
            <p>
              <b>Name</b> {users.name}, <b> surname</b> {users.surname} and
              number is {users.num}
            </p>
             <div>
               
             </div>
             <button onClick={()=>{<Edit></Edit>}}></button>
            <button onClick={() => deleteData(users.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
