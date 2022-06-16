import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkForLoading } from "../../interfaces/reduxInterfaces/Auth/authReduxInterfaces";

const initialState: checkForLoading = {
    loading: false
}

const getLoadingInfoSlice = createSlice( {
    name: 'loadingInfo', 
    initialState,
    reducers: {
        setLoadingData: ( 
            state: checkForLoading, 
            action: PayloadAction<checkForLoading> 
            ) => {
                
                state.loading = action.payload.loading
            }
        }   
    } 
)

export const { setLoadingData } = getLoadingInfoSlice.actions
export default getLoadingInfoSlice.reducer