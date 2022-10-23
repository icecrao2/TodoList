import './scss/Todo.scss';
import { DeleteIcon } from './';

export const Todo = ({
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  onDrag,
  id,
  text,
  onDelete,
}) => {




  return (
    <li
      className="list-disc list-inside mb-2.5 text-2xl font-extrabold flex justify-between items-baseline leading-relaxed"
      key={id}
      id={id}
      draggable="true"
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDrag={onDrag}
    ><span className="flex-1 mr-2">{text}</span>
      <DeleteIcon id={id} onDelete={onDelete} />
    </li>
  )

}

