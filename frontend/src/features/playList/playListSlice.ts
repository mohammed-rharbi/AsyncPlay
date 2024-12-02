import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserPlaylist = createAsyncThunk('playList/fectchPlayList' , async (userId: string)=>{

    const res = await axios.get(`http://localhost:3000/playlist/getPlaylists/${userId}`);

    return res.data

})


export const createPlayList = createAsyncThunk(
    'playList/createPlayList' ,
    async (playListData:{name: string , userId:string})=>{

        try{

            const res = await axios.post('http://localhost:3000/playlist/create/playlist', playListData );

            return res.data

        }catch(err){

            console.log(err)
        }

   
})


const playListSlice = createSlice({

    name: 'playList',
    initialState: {
        playLists:[],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getUserPlaylist.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getUserPlaylist.fulfilled , (state , action)=>{
            state.loading = false;
            state.playLists = action.payload;
        })
        .addCase(getUserPlaylist.rejected , (state)=>{
            state.loading = false;
            
        })
        // .addCase(createPlayList.fulfilled , (state , action)=>{

        //     state.playLists.push(action.payload);
        // });
    },
    
});


export default playListSlice.reducer;

