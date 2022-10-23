import { useState } from 'react';
import { arrayUtil } from '../js/utils';

export const listHooks = (initState = []) => {


  const [arr, setArr] = useState(initState);

  const pushItem = (value) => {
    setArr(arrayUtil.pushArray(arr, value));

    return [...arr, value];
  }

  return { arr, setArr, pushItem };

}

