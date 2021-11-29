
import React, {useState} from "react";
import slots from './mock.json'

import { Link } from "react-router-dom";

function Slot() {


  const [state, setstate] = useState(slots)


  return (
    <div>



      {state.map((slot , id)=>{
        return (
          <div>
            <Link to={'/form'}>  {slot.time}</Link>
          </div>
        )
      })
    }
    </div>
  );
}

export default Slot;
