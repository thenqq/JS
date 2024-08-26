

const TaskMenuButtons = (edit) => {
    const editTask = () => {
        let editElem = document.createElement('textarea')
        editElem.innerText = edit[1]
        editElem.id = `edit area ${edit[0]}`
        let textElem = document.getElementById(`${edit[0]}`)
        textElem.replaceWith(editElem)
    }
    return(
        <div className='buttons'>
            <button onClick={editTask}>edit</button>
            <button>delete</button>
            <button>done</button>
        </div>
    )
}
export default TaskMenuButtons