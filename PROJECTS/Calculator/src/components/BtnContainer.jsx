import styles from "./BtnContainer.module.css";

const BtnContainer = () => {
  const BtnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.BtnContainer}>
      {BtnNames.map((btnName) => (
        <button className={styles.Btn}>{btnName}</button>
      ))}
    </div>
  );
};

export default BtnContainer;
