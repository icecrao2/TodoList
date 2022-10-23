import { useState } from 'react'


export const Body = () => {

  const [ar, setAr] = useState(['a', 'b', 'c', 'd', 'e']);
  let isClicked = false;
  let arr;
  let current_id;
  let entered_id;

  const onDrag = (evt) => {
    current_id = evt.currentTarget.id;
  }

  const onDragEnter = (evt) => {
    entered_id = evt.currentTarget.id;
  }

  const onDragOver = (evt) => {
    evt.preventDefault()
  }

  const onDrop = (evt) => {
    evt.preventDefault()
    arr = [...ar];
    [arr[current_id], arr[entered_id] = arr[entered_id], arr[current_id]];
    setAr(arr);
    console.log(evt.currentTarget.id);
  }
  return (
    <main className="flex-1">
      <ul>
        {ar.map((item, index) => {
          return (
            <li key={index} id={index}
              draggable="true"
              onDragEnter={onDragEnter}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDrag={onDrag}
            >{item}</li>
          )
        })}
      </ul>
    </main>
  )

}

