import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata = async () => {
    let dataArray = [];
    const Otheraddress = document.querySelector(".address").value;

 
      if (Otheraddress) {
        console.log('Hello')
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        console.log("Hello")
        dataArray = await contract.display(account);
        console.log(dataArray);
      }
  
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };

  return (
    <>
      
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
      <div className="image-list1">{data}</div>
    </>
  );
};

export default Display;
