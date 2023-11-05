import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList:JSON.parse(localStorage.getItem("users")) || [],
        newList:JSON.parse(localStorage.getItem("users")) || []
    },
    reducers: {
        addUser: (state, action) => {
            state.userList.push(action.payload)
            localStorage.setItem('users', JSON.stringify(state.userList));
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            console.log(action.payload);
            const userIndex = state.userList[id]
            console.log("userindex",userIndex);
            if (userIndex) {
                userIndex.name=name
                userIndex.email=email
                state.userList[id]=userIndex
                localStorage.setItem('users', JSON.stringify(state.userList));
            }
        },
        deleteUser:(state,action)=>{
            const{id}=action.payload 
            const userIndex=state.findIndex(user=>user.id==id)
            if (userIndex) {
                state.userList.splice(userIndex, 1);
                localStorage.setItem('users', JSON.stringify(state.userList));
            }
        },
        newaddUser: (state, action) => {
            state.newList.push(action.payload)
            localStorage.setItem('users', JSON.stringify(state.newList));
        }

    }
})
export const {addUser,updateUser,deleteUser,newaddUser}=userSlice.actions
export default userSlice.reducer
