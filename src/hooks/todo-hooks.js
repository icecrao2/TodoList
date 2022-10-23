import { useState } from 'react';

export const todoHooks = (initState = []) => {


  const [txt, setTxt] = useState(initState);



  return { txt, setTxt };

}