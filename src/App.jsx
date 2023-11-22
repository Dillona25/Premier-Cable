//* React tools
import React from "react";

//* Components
import Nav from "./Components/Nav/Nav";

//* Assets & images
import Mail from "./assets/Mail.svg";

function App() {
  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center bg-[#98c1ff] h-[60px] w-[60px] rounded-[100%] position: absolute bottom-[30px] right-[30px]">
        <button className="bg-Email h-[32px] w-[32px] rounded-[100%] top-0 right-0 left-0 bottom-o"></button>
      </div>
    </div>
  );
}

export default App;
