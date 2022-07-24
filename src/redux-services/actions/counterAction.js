import { DECREMTNT, INCREMTNT, RESET } from "../constants/counterConstant"

export const increamentCounter = () =>{
   return{
    type: INCREMTNT
   }
}
export const decreamentCounter = () =>{
   return{
    type: DECREMTNT
   }
}
export const resetCounter = () =>{
   return{
    type: RESET
   }
}