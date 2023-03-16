import { createSlice } from "@reduxjs/toolkit";
import { getProfile, insertProfile, deleteProfileDB } from "../../db";
import Profile from "../../models/profiles";
import { URL_GEOCODING } from "../../utils/maps";

const initialState = {
  profiles: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      const newProfile = new Profile(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.profiles.push(newProfile);
    },
    setProfile: (state, action) => {
      state.profiles = action.payload;
    },
  },
});

export const { addProfile, setProfile } = profileSlice.actions;

export const saveProfile = (title, image, coords) => {
  return async (dispatch) => {
    const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));

    if (!response.ok) {
      throw new Error("No se ha podido conectar la geolocalizacion");
    }

    const data = await response.json();

    if (!data.results)
      throw new Error("No se ha podido encontrar la direccion");

    const address = data.results[0].formatted_address;

    try {
      const result = await insertProfile(title, image, address, coords);

      dispatch(
        addProfile({ id: result.insertId, title, image, address, coords })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const loadProfile = () => {
  return async (dispatch) => {
    try {
      const result = await getProfile();
      dispatch(setProfile(result?.rows?._array));
    } catch (error) {
      throw error;
    }
  };
};

export const deleteProfile = (id) => {
  return async (dispatch) => {
    try {
      const toDelete = await deleteProfileDB(id);
      if (toDelete) {
        const result = await getProfile();
        dispatch(setProfile(result?.rows?._array));
      } else {
        throw Error("id no encontrado");
      }
    } catch (error) {
      throw error;
    }
  };
};

export default profileSlice.reducer;
