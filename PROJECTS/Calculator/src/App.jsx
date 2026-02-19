import BtnContainer from "./components/BtnContainer";
import Display from "./components/Display";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <BtnContainer></BtnContainer>
    </div>
  )
}

export default App
