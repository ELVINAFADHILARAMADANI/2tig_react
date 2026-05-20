import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkListSearchfilter from "./FrameworkListSearchfilter";
import Responsive from "./Responsive";




createRoot(document.getElementById("root"))
  .render(
    <div>
      {/* <FrameworkList/> */}
      {/* <Responsive/> */}
      <FrameworkListSearchfilter/>
    </div>
  )