import React, { useState , useEffect } from "react";



// import Slot from './slot'

function Form() {


  let getData = ()=>{
   const user= localStorage.getItem('users')
   console.log(user)

    if(user){
      return JSON.parse(user)
    }
    else{
      return []
    }
  }




  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [num, setNum] = useState("");
  const [editData , setEditData] = useState(null);
  

  const Arr: string[] = [];
  const [data, setData] = useState(getData());


  const addData = (evt: any) => {
    evt.preventDefault();
    

    if(!name || !surname || !num) {
        return;
    }
    else if(name && surname && num  && editData){
      console.info("update");

      const updateData = data.map((value:any)=>{
        if(value.id === editData){
          return {...value , name:name , surname:surname ,num:num}
        }
        
        return value;
      });

      setData(updateData);
      setName("")
      setSurname("")
      setNum("")
      setEditData(null)
    }
    else{
      console.info("save");

      const allEntry: any = {id: new Date().getTime().toString() , name: name, surname: surname, num: num };
  
      setData([...data, allEntry]);
      setName("");
      setSurname("");
      setNum("");
    }

  };

  const deleteData = (ind: any) => {
    const newArr = data.filter((value:any) => {
      return ind !== value.id;
    });
    setData(newArr);
  };

  const editItem = (id:any)=>{
      const update = data.find((value:any)=>{
        return value.id === id
      })

      setName(update.name)
      setSurname(update.surname)
      setNum(update.num) 

      setEditData(id)
      

     
  }


  

  useEffect(() => {
      localStorage.setItem('users',JSON.stringify(data))
    }, [data])

  return (
    <div>
      <form method="POST" onSubmit={addData}>
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
              setNum(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label>Time:</label>
        </div>

        <br />
        <button type="submit">Save</button>
      </form>

      {data.map((value: any) => {
        return (
          <div key={value.id}>
            <p>
              <b>Name</b> {value.name}, <b> surname</b> {value.surname} and number is {value.num}
            </p>
            <button onClick={()=> editItem(value.id)}>edit</button>
            <button onClick={() => deleteData(value.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
