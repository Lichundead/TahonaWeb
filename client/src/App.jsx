import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { InventoryDashboard } from "./features/inventory/components/InventoryDashboard";
import "./App.css";

function App() {
    return (
        <div className="app-layout">
            <Navbar />
            <div className="app-body">
                <Sidebar />
                <main className="app-main-content">
                    <InventoryDashboard />
                </main>
            </div>
        </div>
    );
}

export default App;
