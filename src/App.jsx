import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const arr = [
    { title: "item1", checked: false },
    { title: "item2", checked: false },
    { title: "item3", checked: false },
    { title: "item4", checked: false },
  ];
  const arr2 = [
    { title: "itemA", checked: false },
    { title: "itemb", checked: false },
    { title: "itemc", checked: false },
    { title: "itemd", checked: false },
  ];
  const [list, setlist] = useState(arr);
  const [list2, setlist2] = useState(arr2);

  const checkItems = (i) => {
    const ulist1 = [...list];
    ulist1[i].checked = !ulist1[i].checked;
    setlist(ulist1);
  };

  const swapItems = () => {
    const ulist1 = [...list];
    const ulist2 = [...list2];
    ulist1.map((e, idx) => {
      if (e.checked) {
        const temp = ulist1[idx].title;
        ulist1[idx].title = ulist2[idx].title;
        ulist2[idx].title = temp;
        ulist1[idx].checked = false;
      }
      setlist(ulist1);
      setlist2(ulist2);
    });
  };

  return (
    <div className="h-screen w-full bg-black  p-20">
      <div className="text-white">
        <h1>List 1</h1>
        <ul>
          {list.map((l, i) => (
            <li key={i}>
              {" "}
              <input
                type="checkbox"
                checked={l.checked}
                onClick={() => checkItems(i)}
              />
              {l.title}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="mt-5 text-white">
        <h1>List 2</h1>
        <ul>
          {list2.map((l, i) => (
            <li key={i}>{l.title}</li>
          ))}
        </ul>
      </div>
      <button className="border mt-5 text-white" onClick={swapItems}>
        swap{" "}
      </button>
        <Form />
    </div>
  );
}

export default App;
