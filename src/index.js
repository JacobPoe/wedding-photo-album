import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import { album } from "jake-compoenents/dist/state/reducers/album";
import { navigation } from "jake-compoenents/dist/state/reducers/navigation";
import logger from "jake-compoenents/dist/state/middleware/logger";

import "jake-compoenents/dist/style.css";
import Home from "./components/views/home/home";

const store = configureStore({
    reducer: { album: album, navigation: navigation },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <Home />
    </Provider>
);
