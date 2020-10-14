/*
 * @Author: Jony
 * 
 * @Date: 2020-10-13 22:12:53
 * @LastEditTime: 2020-10-13 22:15:52
 * @# Description: 
 * @FilePath: /lg-javascript/Typescript/webclass/src/19-generics.ts
 */
export{}

function createNumberArray (length:number,value:number):number[]{
    const arr = Array<number>(length).fill(value)
    return arr
}

const res = createNumberArray(3,100)
console.log(res);