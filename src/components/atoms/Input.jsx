import './scss/Input.scss';
import { todoHooks } from '../../hooks/todo-hooks.js';
import {storageUtil} from '../../js/utils/storage-utils.js';

export const Input = ({ pushItem, arr, KEY_LIST }) => {

  const {txt, setTxt} = todoHooks("");
  
  const onKeyPress = (evt) => {
    if(evt.key == 'Enter') onEnter(evt);
  }

  const onEnter = () => {
    storageUtil.saveArray(KEY_LIST, pushItem(txt));
    onClear();
  }

  const onClear = () => {
    setTxt("");
  }

  return (
    <input type="text"
      placeholder="여기에 하고싶은 일을 입력하세요!"
      className="bg-inherit bg-lime-300 w-full h-10 rounded-tl-lg rounded-tr-lg border-solid border-2 border-stone-600 border-b-0 text-2xl font-extrabold focus:bg-lime-400 hover:bg-lime-400 placeholder-gray-400"
      onKeyPress={onKeyPress}
      value={txt}
      onChange={evt => setTxt(evt.currentTarget.value)}
      >

    </input>
  )

}