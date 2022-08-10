import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Root } from "./pages/root"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        {/* TODO: implement */}
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
