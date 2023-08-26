import { useEffect, useState } from "react";
import diceRoller from "../src/assets/dice-roller.svg";
function App() {
  const [advice, setAdvice] = useState();
  async function getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <>
      <div className="bg-[#313A48] w-[540px] items-center justify-center flex flex-col p-12 relative ">
        <p className="font-bold text-xs text-[#53FFAA]">
          Quote <span>#{advice?.id}</span>
        </p>
        <h2 className="w-[444px] font-bold text-[28px] pt-6 text-[#CEE3E9] text-center">
          {`“${advice?.advice}”`}
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </h2>
        <div className="mt-[40px] flex items-center gap-4 ">
          <div className="w-[196px] h-[1px] bg-[#4F5D74]"></div>
          <div className="w-[6px] h-[16px] bg-[#CEE3E9] rounded"></div>
          <div className="w-[6px] h-[16px] bg-[#CEE3E9] rounded"></div>
          <div className="w-[196px] h-[1px] bg-[#4F5D74]"></div>
        </div>
        <button onClick={getAdvice} className="btn">
          <img src={diceRoller} alt="" />
        </button>
      </div>
    </>
  );
}

export default App;
