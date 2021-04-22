import * as stack from "./stack.json"

//export function data(el:any[],fil:string): void{}
const data = stack.deployment.resources[0].outputs

export {data}
//console.log(datas)

/////////////////////////////////////////////////////
//                                                 //
//        Export the data from stack.json          //
//                                                 //
/////////////////////////////////////////////////////