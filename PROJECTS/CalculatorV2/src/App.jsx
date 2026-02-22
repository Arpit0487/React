import BtnContainer from "./components/BtnContainer";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("0");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C') setCalVal("");
    else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <BtnContainer
        onButtonClick = {onButtonClick}
      ></BtnContainer>
    </div>
  );
}

export default App;
