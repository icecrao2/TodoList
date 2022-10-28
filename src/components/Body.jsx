import { arrayUtil } from '../js/utils';
import { storageUtil } from '../js/utils/storage-utils.js';
import { Todo, Input } from './atoms';
import { listHooks } from '../hooks';


export const Body = () => {

  const KEY_LIST = "list";


  const initialArray = JSON.parse(storageUtil.getData(KEY_LIST)) || [];
  const
    { arr,
      setArr,
      pushItem } = listHooks(initialArray);


  let current_id;
  let entered_id;

  const onDrag = (evt) => {
    current_id = evt.currentTarget.id;
  }

  const onDragEnter = (evt) => {
    entered_id = evt.currentTarget.id;
  }

  const onDragLeave = () => {
    entered_id = current_id;
  }

  const onDragOver = (evt) => {
    evt.preventDefault()
  }

  const onDrop = (evt) => {
    evt.preventDefault()
    const newArray = arrayUtil.swap(arr, current_id, entered_id);
    setArr(newArray);
    storageUtil.saveArray(KEY_LIST, newArray);
  }

  const onDelete = (evt) => {
    const newArray = arrayUtil.deleteItemByIdx(arr, evt.currentTarget.id);
    setArr(newArray);
    storageUtil.saveArray(KEY_LIST, newArray);
  }




  return (
    <main className="flex h-full">
      <div className="flex-1 basis-0"></div>
      <div className=
        "h-2/3 w-[44rem] min-w-[15rem] box-content ml-2 mr-2 ">

        <Input pushItem={pushItem} arr={arr} KEY_LIST={KEY_LIST} />
        <ul className="h-full bg-amber-300 border-solid border-2 border-stone-600 p-2 ">
          {arr.map((item, index) => {
            return (
              <Todo
                key={index}
                id={index}
                draggable="true"
                onDragEnter={onDragEnter}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                onDrag={onDrag}
                text={item}
                onDelete={onDelete}
              />
            )
          })}
        </ul>
      </div>
      <div className="flex-1 basis-0"></div>
    </main>
  )

}

