
export const storageUtil = {

  saveData: (key, value) => {
    window.localStorage.setItem(key, value);
  },

  saveArray: (key, array) => {
    storageUtil.saveData(key, JSON.stringify(array));
  },

  getData: (key) => {
    return window.localStorage.getItem(key);
  },

  removeData: (key) => {
    window.localStorage.removeItem(key);
  },

  clear: () => {
    window.localStorage.clear();
  }

}