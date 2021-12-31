const _ = require('lodash');

export const throttle = (func: { apply: (arg0: any, arg1: any[]) => void; }, wait = 100) => {
  let timer: NodeJS.Timeout | null = null;
  return function(...args: any) {
    if (timer === null) {
      timer = setTimeout(() => {
        func.apply(null, args);
        timer = null;
      }, wait);
    }
  };
};
  
export const hex2rgba = (hex: { match: (arg0: RegExp) => { (): any; new(): any; map: { (arg0: (x: any) => number): [any, any, any]; new(): any; }; }; }, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x: string) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const replaceAll = (str: string, search: string, replace: string) => str.split(search).join(replace);

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const currentTime = () => {
  let now = new Date();
  return `${now.getFullYear()}-${(now.getMonth()+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}-${now.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} ${now.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${now.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}:${now.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}.${now.getMilliseconds().toLocaleString('en-US', {minimumIntegerDigits: 3, useGrouping:false})}`
}


export const isEmpty = (obj: { hasOwnProperty: (arg0: string) => any; }) => {
  for(let key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export const filter = (array: any[]) => array.filter(function (e: any) {return !_.isEmpty(e);});