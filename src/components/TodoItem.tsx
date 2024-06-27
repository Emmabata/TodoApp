
interface TodoItemProps {
    id: number,
    text: string,
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onDelete }) => {

    return(
        <div className="flex justify-between items-center p-2 bg-blue-100 my-2 rounded-xl mt-3">
            <span>{text}</span>
            <button className="bg-darkBlue text-white px-2 py-1 rounded-lg" onClick={() => onDelete(id)}
            >Delete</button>
        </div>
    );
};

export default TodoItem;



