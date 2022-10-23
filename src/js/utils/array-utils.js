
export const arrayUtil = {


  swap: (array, first, second) => {
    let arr = [...array];
    [arr[first], arr[second]] = [arr[second], arr[first]];


    return arr;
  },


  pushArray: (arr, value) => {
    return [...arr, value];
  }

}