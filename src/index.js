import './style.css';
import Home from "./components/views/home/home";

import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import { activeImage } from "./state/reducers/active-image";
import { activeTab } from "./state/reducers/active-tab";
import logger from "./state/middleware/logger";

const store = configureStore({
    reducer: {
        activeImage: activeImage,
        activeTab: activeTab,
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
