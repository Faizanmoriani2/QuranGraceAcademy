import Book from "./Book";
import { exp } from "three/tsl";  
import front from "../images/front.jpeg"
import back from "../images/back.jpeg"
import spine from "../images/spine.jpeg"

const Test = () => {
  return (
    <div className="App">
      <Book
        style={{ width: 500, height: 600, background: "none" }}
        bookCovers={{
          front: {front},
          back: {back},
          spine: {spine},
        }}
      />
      
    </div>
  );
}


export default Test;