import SEO from "@/components/shared/SEO";
import { ArrowRightLeft, Radio } from "lucide-react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const newSessionId = uuidv4().slice(0, 6);

  return (
    <div className="text-center p-10 h-screen home-img">
      <SEO
        titile="Home | CodeColab"
        description="Home | CodeColab : Collaborative Editor , Code Colab Share"
      />
      <div className="">
        <p className="text-[3rem] font-bold colored-text">
          Code Colab : Collaborative Editor
        </p>
        <h4 className="my-3 text-text-1">
          Save the hassle to share code & just COLABCODE
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
        <Link to={`/realtime/${newSessionId}`}>
          <div className="p-8 py-4 rounded bg-gradient-to-tr from-primary via-blue-300 to-blue-300 hover:bg-secondary font-semibold text-white cursor-pointer hover:-translate-y-1 duration-500 transition-all shadow-2xl">
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
        </Link>

        <Link to={`/share/${newSessionId}`}>
          <div className="p-8 py-4 rounded bg-gradient-to-tr from-text-1 via-text-2 to-text-2 hover:bg-secondary font-semibold text-white cursor-pointer hover:-translate-y-1 hover:top-3 duration-500 transition-all shadow-2xl">
            <ArrowRightLeft
              className="mx-auto mb-5 bg-primary p-3 rounded-full"
              size={50}
            />
            <div className="">
              <p className="text-xl font-serif text-primary">
                Create Save and Share session
              </p>
              <ul className="list-disc capitalize text-start text-lg my-3">
                <li>write, save and share</li>
                <li>can have different expiry time</li>
                <li>chat while coding</li>
                <li>keep track of changes</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
