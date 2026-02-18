const ErrorMsg = ({list}) => {
    return (
        <>{list.length===0 && <h3>EMPTY</h3>}</>
    );
}

export default ErrorMsg;