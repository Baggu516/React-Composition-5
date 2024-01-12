import React,{useState} from "react";
const arr1 = ["Tab 1", "Tab 2", "Tab 3"];
const arr2 = ["Tab A", "Tab B", "Tab C"];
const Tab = () => {
  const [content1, setContent1] = useState("Tab 1");
  const [content2, setContent2] = useState("Tab A");
  const handleArrTab1=(item)=>{
    setContent1(item)
  }
  const handleArrTabA=(item)=>{
    setContent2(item)
  }
  return (
    <>
      {arr1.map((item, i) => (
        <li key={i} onClick={() => handleArrTab1(item)}>
          {item}
        </li>
      ))}
      <p>Content for {content1}</p>
      {arr2.map((item, i) => (
        <li key={i} onClick={() => handleArrTabA(item)}>
          {item}
        </li>
      ))}
      <p>Content for {content2}</p>
    </>
  );
};

export default Tab;
