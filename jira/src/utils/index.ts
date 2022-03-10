import { useEffect, useState } from 'react'
export const isFalsy = (value:any) => (value === 0 ? false : !value);

export const cleanObject = (object:object) => {
    // Object.assign({}, object)
    const result = {...object };
    Object.keys(result).forEach((key) => {
        //0 
        //@ts-ignore
        const value = result[key];
        if (isFalsy(value)) {
        //0 
        //@ts-ignore
            delete result[key];
        }
    });
    return result;
};


export const useMount = (fn:()=>void) => {
    useEffect(() => { fn() }, [])
}

export const useDebounce = (value:any, delay?:number) => { 
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay)
        return () => clearTimeout(timer)
    }, [value, delay])

    return debounceValue
}