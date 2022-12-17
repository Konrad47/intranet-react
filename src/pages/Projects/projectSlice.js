import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:5001/projects";

export const getProjects = createAsyncThunk(
  "projects/getProjects",
  async () => {
    return await fetch(url).then((res) => res.json());
  }
);

export const getLastProject = createAsyncThunk(
  "projects/getLastProject",
  async () => {
    return await fetch(url).then((res) => res.json());
  }
);

export const getProject = createAsyncThunk(
  "projects/getProject",
  async (id) => {
    return await fetch(`${url}/${id}`).then((res) => res.json());
  }
);

export const addProject = createAsyncThunk(
  "projects/addProject",
  async (project) => {
    return await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    });
  }
);

export const editProject = createAsyncThunk(
  "projects/editProject",
  async (project) => {
    return await fetch(`${url}/${project.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    });
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    return await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  }
);

export const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    lastProject: {},
    project: {},
    loading: false,
  },
  reducers: {
    updateProjectTitle: (state, { payload }) => {
      state.project.title = payload;
    },
    updateProjectAuthor: (state, { payload }) => {
      state.project.author = payload;
    },
  },
  extraReducers: {
    //Projects
    [getProjects.pending]: (state) => {
      state.loading = true;
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.projects = payload;
    },
    [getProjects.rejected]: (state) => {
      state.loading = false;
    },
    //Last Project
    [getLastProject.fulfilled]: (state, { payload }) => {
      state.lastProject = payload.slice(-1).pop();
    },
    //Project
    [getProject.pending]: (state) => {
      state.loading = true;
    },
    [getProject.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.project = payload;
    },
    [getProject.rejected]: (state) => {
      state.loading = false;
    },
    //Add
    [addProject.fulfilled]: (state, { meta }) => {
      // state.projects.push(meta.arg);
      state.project = meta.arg;
      state.projects = [...state.projects, state.project];
    },
    //EDIT
    [editProject.fulfilled]: (state, { meta }) => {
      state.project = meta.arg;
      state.projects = [...state.projects, state.project];
    },
    //Delete
    [deleteProject.fulfilled]: (state, { meta }) => {
      state.projects = [
        ...state.projects,
        state.projects.filter((proj) => {
          proj.id === meta.arg;
        }),
      ];
    },
  },
});
export const { updateProjectTitle, updateProjectAuthor } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
