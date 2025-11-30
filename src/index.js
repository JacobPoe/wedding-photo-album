import './style.css';

import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import Home from "./components/views/home/home";
import {activeImage} from "./state/reducers/active-image";
import {Provider} from "react-redux";
import logger from "./state/middleware/logger";

const store = configureStore({
    reducer: {
        activeImage: activeImage,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Home />
    </Provider>
);
