import "./App.css";
import CaptureProduct from "./components/CaptureProduct/CaptureProduct";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import { Pokemon } from "./components/Pokemon/Pokemon";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Timer from "./components/Timer/Timer";
import Wordle from "./components/Wordle/Wordle";
// import ImageSlider from "./components/ImageSlider/ImageSlider";
// import IncrementCounter from "./components/incrementCounter/IncrementCounter";
// import OverlappingCircle from "./components/OverlappingCircle/OverlappingCircle";
// import PopUpModal from "./components/popUpModal";

function App() {
  return (
    <div className="container">
      {/* <div className="top-heading">
        <h1>Creating Image Slider</h1>
      </div>
      <ImageSlider
        image1={
          "https://images.unsplash.com/photo-1715929178877-eb915fca0fac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        image2={
          "https://plus.unsplash.com/premium_photo-1669867124806-f84dd1a9e87c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      /> */}

      {/* <div className="top-heading">
        <h1>Creating Pop Up Modal</h1>
      </div>
      <PopUpModal /> */}

      {/* <div className="top-heading">
        <h1>Counter Increment</h1>
      </div>
      <IncrementCounter /> */}

      {/* <div className="top-heading">
        <h1>Detect OverLapping Circle</h1>
      </div>
      <OverlappingCircle /> */}

      {/* <div className="top-heading">
        <h1>Capture Product when Stop Scrolling</h1>
        </div>
        <CaptureProduct items={27} /> */}

      {/* <div className="top-heading">
        <h1>Infinite Scrolling</h1>
      </div>
      <InfiniteScroll /> */}

      {/* <div className="top-heading">
        <h1>Wordle Game</h1>
      </div>
      <Wordle /> */}

      {/* <div className="top-heading">
        <h1>Timer</h1>
      </div>
      <Timer /> */}
      <div className="top-heading">
        <h1>Tic Tac Toe</h1>
      </div>
      <TicTacToe />
    </div>
  );
}

export default App;
