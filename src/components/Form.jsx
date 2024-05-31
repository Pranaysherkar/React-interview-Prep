import React, { useState } from "react";

function Form() {
  const [from, setfrom] = useState({
    name: "",
    email: "",
  });
const show=()=>{
    let temp = {...from, from}
    console.log(temp);
}
  return (
    <div className="w-full h-1/3 flex items-center text-black justify-center">
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          name="name"
          value={from.name}
          onChange={(e) => setfrom(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="email"
          value={from.email}
          onChange={(e) => setfrom(e.target.value)}
          placeholder="Emailid"
        />
        <input type="button" onClick={show} value="Submit" className="text-white border" />
      </form>
    </div>
  );
}

export default Form;
