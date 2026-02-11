import { createSlice } from "@reduxjs/toolkit";

interface UIState {
    lightsOn: boolean;
    lightsData: {
        intensity: number;
        colorTemp: number;
    };
}

const initialState: UIState = {
    lightsOn: true,
    lightsData: {
        intensity: 4300,
        colorTemp: 0,
    },
};

const lightsSlice = createSlice({
    name: "lights",
    initialState,
    reducers: {
        toggleLights: (state) => {
            state.lightsOn = !state.lightsOn;
            state.lightsData.intensity = state.lightsOn ? 4300 : 0;
        },
        setLights: (state, action) => {
            state.lightsData = action.payload;
        },
    },
});

export const { toggleLights, setLights } = lightsSlice.actions;

export const selectLightsData = (state: { lights: UIState }) => state;
export default lightsSlice.reducer;