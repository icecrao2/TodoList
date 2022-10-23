import styles from './scss/Todo.module.scss';
import { DeleteIcon } from './';

export const Todo = ({
  onDragEnter,
  onDragOver,
  onDragLeave,
  onDrop,
  onDrag,
  id,
  text,
}) => {


  return (
    <li
      className="list-disc list-inside mb-2.5 text-justify text-2xl font-extrabold flex justify-between "
      key={id}
      id={id}
      draggable="true"
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDrag={onDrag}
    >{text}

      <DeleteIcon />
    </li>
  )

}

