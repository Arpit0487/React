function ToDoItem1() {
    let name = 'Buy Milk';
    let date = '5/10/23';
    return(
        <div>
            <div class="row">
            <div class="col-6">{name}</div>
            <div class="col-4">{date}</div>
            <div class="col-2">
                <button type="button" class="btn btn-danger">
                Delete
                </button>
            </div>
            </div>
        </div>
    )
}

export default ToDoItem1;