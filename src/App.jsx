import React, { useState } from "react";

function App() {
  const arr1 = [
    { title: "A", checked: false },
    { title: "B", checked: false },
    { title: "C", checked: false },
  ];
  const arr2 = [{ title: 1 }, { title: 3 }, { title: 2 }];
  const [list1, setlist1] = useState(arr1);
  const [list2, setlist2] = useState(arr2);
  const updatelist = (idx) => {
    const Updatedlist1 = [...list1];
    Updatedlist1[idx].checked = !Updatedlist1[idx].checked;
    setlist1(Updatedlist1)
  };
  const swap=()=>{
    const Updatedlist1 = [...list1];
    const Updatedlist2 = [...list2];
    Updatedlist1.map((e,i)=>{
      if(e.checked){
        const temp = Updatedlist1[i].title;
        Updatedlist1[i].title = Updatedlist2[i].title
        Updatedlist2[i].title = temp
        Updatedlist1[i].checked=false;
        setlist1(Updatedlist1)
        setlist2(Updatedlist2)
      }
    })

  }
  console.log(list1);
  return (
    <div className="h-screen w-screen bg-blue-400">
      <div className="h-1/3 w-full flex flex-col item-center justify-center gap-14 text-xl p-20">
        <ul>
          {list1.map((elem, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                checked={elem.checked}
                onChange={() => updatelist(idx)}
              />{" "}
              {elem.title}
            </li>
          ))}
        </ul>
        <ul>
          {list2.map((elem, idx) => (
            <li key={idx}>{elem.title}</li>
          ))}
        <input className="border px-2" onClick={swap} type="button" value="swap" />
        </ul>
      </div>
    </div>
  );
}

export default App;
