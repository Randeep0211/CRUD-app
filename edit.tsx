import React, { useContext, useState, useEffect } from "react";

import { GlobalContext } from "./context/GlobalState";

const Edit = (route: any) => {
  const { users, editItem } = useContext(GlobalContext);

  const [update, setUpdate] = useState({
    id: null,
    name: "",
    surname: "",
    num: "",
  });

  const CurrentId = route.match.params.id;

  useEffect(() => {
    const userId = CurrentId;

    let update: any = users.find(
      (currentUser: any) => currentUser.id === parseInt(userId)
    );
    setUpdate(update);
  }, [CurrentId, users]);

  const submit = (e:any) => {

    e.preventDefault()
    editItem(update);
  };

  return (
    <div>
      <form onSubmit={submit}>
      

      </form>
    </div>
  );
};

export default Edit;
