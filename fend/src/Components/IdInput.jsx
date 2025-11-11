import React, { useState } from "react";
import axios from "axios";
import Assesment from "./Assesment";

const IdInput = () => {
  // console.log(startTest, setData)

  const [id, setId] = useState("");
  const [data, setData] = useState("");
  const [assesmentId, setAssesmentId] = useState("");

  const startTest = () => {
    console.log(assesmentId, id);
    axios
      .post(`http://localhost:5000/get`, { userId: id, assesmentId })
      .then((res) => {
        console.log("data found", res.data);
        if (res.data?.assesment == undefined) {
          alert("already submitted");
        } else {
          setData(res.data.assesment);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <form action={startTest}>
        <div className="">
          <label htmlFor="Aid">Enter Assesment Id</label>
          <input
            type="text"
            id="Aid"
            name="Aid"
            onChange={(e) => setAssesmentId(e.target.value)} 
          />
          <label htmlFor="id">Enter Vector Id</label>
          <input
            type="text"
            placeholder="Enter Id"
            required
            // pattern="\w{9,9}"
            onChange={(e) => setId(e.target.value)}
            value={id}
            // title="Id must be 9 characters"
          />
          {/* <span className="validity"></span> */}

          <button
            disabled={!id}
            type="submit"
            className="border-2 border-blue-950 p-1 bg-amber-300 cursor-pointer"
          >
            Start Test
          </button>
        </div>
      </form>
      <div>
        {
            data && <Assesment data={data} id={id}/>
        }
      </div>
    </div>
  );
};

export default IdInput;
