
import {create} from 'zustand'
import {createJSONStorage, persist} from 'zustand/middleware'

// here we use persist to store data in localstorage
const useMyStore = create(persist((set,get)=>{
    return {
        count:1,
        name:'abhishek',
        increment: ()=>{
            //this state contain all info like count name increment
            set((state)=>{  
                return{
                    count : state.count + 1
                }
            })
        },
        capitalizeName: ()=>{
            const {name} = get()
            set({
                name: name.charAt(0).toUpperCase() + name.slice(1)
            })
            
        }
    }
},{
    name: 'myStore',
    // bydefault useLocalStorage
    storage: createJSONStorage(()=>sessionStorage)
}))



// const useMyStore = create((set,get)=>{
//     return {
//         count:1,
//         name:'abhishek',
//         increment: ()=>{
//             //this state contain all info like count name increment
//             set((state)=>{  
//                 return{
//                     count : state.count + 1
//                 }
//             })
//         },
//         capitalizeName: ()=>{
//             const {name} = get()
//             set({
//                 name: name.charAt(0).toUpperCase() + name.slice(1)
//             })
            
//         }
//     }
// })

export default useMyStore