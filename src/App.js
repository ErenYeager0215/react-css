import { CssModules } from "./components/CssModules";
import { InlineSytle } from "./components/InlineStyle";
import { SytledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineSytle />
      <CssModules />
      <SytledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
