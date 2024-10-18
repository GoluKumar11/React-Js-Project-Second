import  { UseContext } from "react";
import { MyContext } from "./Context";
// import Context from "./coponent/Context.jsx";

function Hero() {
  const data = UseContext(MyContext);
  return (
    <div>
      <h1>hello i am hero section</h1>
      {data}
      <createContext />
    </div>
  );
}

export default Hero;
