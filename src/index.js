import './style.css';

import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import Home from "./components/views/home/home";
import {activeImage} from "./state/reducers/active-image";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        activeImage: activeImage,
    }
})

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Home />
    </Provider>
);
