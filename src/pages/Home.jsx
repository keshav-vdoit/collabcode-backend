import { ArrowRightLeft, Radio } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const navigate = useNavigate();
  // const [name,setName] = useState({
  //   bg:"primary",
  //   text:"",
  //   value:""
  // })

  const handleSession = (type) => {
    // if(name.value===""){
    //   setName({
    //     bg:"danger",
    //     text:"Please Enter Name",
    //     value:""
    //   })
    //   return
    // }
    const newSessionId = uuidv4();
    navigate(`/${type}/${newSessionId}`);
  };

  return (
    <div className="text-center p-10 h-screen home-img">
      <div className="">
        <p className="text-[3rem] font-bold colored-text">
          Code Colab : Collaborative Editor
        </p>
        <h4 className="my-3 text-text-1">
          Save the hassle to share code with your team.
        </h4>
      </div>

      {/* Phase 2 */}
      {/* <div className="w-72 mx-auto">
          <input
            type="text"
            id="success"
            className={`bg-${name.bg} text-white border border-${name.bg} placeholder:text-white font-serif tracking-wider font-semibold w-full p-2.5`}
            placeholder="Enter Name"
            value={name.value}
            onChange={(e)=>{
              setName({
                bg:"primary",
                text:"",
                value:e.target.value
              })
            }}
          />
         {name.text!=="" && <p className="mt-2 text-sm text-danger">
            {name.text}
          </p>}
        </div> */}

      <div className="flex items-center justify-evenly my-10">
        <div
          className="p-8 py-4 rounded bg-gradient-to-r from-primary to-blue-200 hover:bg-secondary font-semibold text-white cursor-pointer hover:-translate-y-5 duration-500 transition-all shadow-2xl"
          onClick={() => handleSession("realtime")}
        >
          <Radio
            className="mx-auto mb-5 bg-text-1 p-3 rounded-full"
            size={50}
          />
          <div className="">
            <p className="text-xl font-serif">Create Real-Time session</p>
            <ul className="list-disc capitalize text-start text-lg my-3">
              <li>one click setup and share</li>
              <li>real time collaboration</li>
              <li>can have multiple users</li>
              <li>need to share link before collaborating</li>
            </ul>
          </div>
        </div>
        <div
          className="p-8 py-4 rounded bg-gradient-to-r from-text-1 to-text-2 hover:bg-secondary font-semibold text-white cursor-pointer hover:-translate-y-5 hover:top-3 duration-500 transition-all shadow-2xl"
          onClick={() => handleSession("saveandshare")}
        >
          <ArrowRightLeft
            className="mx-auto mb-5 bg-text-1 p-3 rounded-full"
            size={50}
          />
          <div className="">
            <p className="text-xl font-serif">Create Save and Share session</p>
            <ul className="list-disc capitalize text-start text-lg my-3">
              <li>write, save and share</li>
              <li>can have different expiry time</li>
              <li>chat while coding</li>
              <li>keep track of changes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
