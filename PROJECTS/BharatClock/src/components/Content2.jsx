function Content2(){
    const now = new Date();

    return(
        <div>
            <h2>This is the current time:</h2>
            <h2>{now.toString()}</h2>               toString
            <h2>{now.toLocaleDateString()}</h2>     toLocaleDateString
            <h2>{now.toLocaleTimeString()}</h2>     toLocaleTimeString
        </div>
    )
}

export default Content2;