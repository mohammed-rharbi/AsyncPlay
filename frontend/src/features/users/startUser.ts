import { createSlice , createAsyncThunk , PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface Form {

    userName: string ,
    email: string,
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null ;
}


const initialState : Form = {

    userName: '',
    email:'',
    status: 'idle',
    error: null ,

}

export const registerUser = createAsyncThunk(

    "form/registerUser",

    async (formData: {userName:string , email:string }, { rejectWithValue}) => {
        
        try{

            const res = await axios.post('http://localhost:3000/user/register', formData)
            
            return res.data

        }catch(error:any){

            return rejectWithValue(error.response?.data || "Something went wrong")

        }
    }
);


export const getIn = createAsyncThunk(

  "form/getIn",

  async (formData: {userName:string , email:string }, { rejectWithValue}) => {
      
      try{

          const res = await axios.post('http://localhost:3000/user/getIn', formData)

          if(res.status === 201 || res.status === 200){
            localStorage.setItem('userId', res.data.user._id);
            console.log(res.data.user);
          }
          
          return res.data

      }catch(error:any){

          return rejectWithValue(error.response?.data || "Something went wrong")

      }
  }
);


const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {

      updateFormField: (
        state,
        action: PayloadAction<{ field: "userName" | "email"; value: string }>
      ) => {
        state[action.payload.field] = action.payload.value;
      },

      resetForm: (state)=>{
        state.userName = '',
        state.email = '',
        state.status = 'idle',
        state.error = null
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(registerUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state) => {
          state.status = "succeeded";
          state.error = null;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = (action.payload as {message:string})?.message || "somthing went wrong";
        })


        .addCase(getIn.pending , (state)=>{
          state.status = 'loading';
          state.error = null;
        })
        .addCase(getIn.fulfilled , (state)=>{
          state.status = 'succeeded';
          state.error = null;
          
        })
        .addCase(getIn.rejected , (state , action)=>{
          state.status = 'failed';
          state.error = (action.payload as {message:string})?.message || "somthing went wrong";
        })
        
        
    },
  });


  export const { updateFormField , resetForm} = formSlice.actions;
  export default formSlice.reducer 


  