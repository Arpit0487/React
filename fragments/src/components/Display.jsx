const Display = ({list}) => {
  return (
    <>
      <ul className="list-group">
        {list.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Display;