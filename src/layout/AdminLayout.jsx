import { Outlet, useNavigate } from "react-router-dom";
import AdminLeftBar from "../components/Admin/AdminLeftBar";
import AdminTopBar from "../components/Admin/AdminTopBar";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const AdminLayout = () => {
    const navigate = useNavigate();
    const [renderAdmin, setRenderAdmin] = useState(false);

    const checkNavigation = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
        const userRole = localStorage.getItem("role");

        // Debugging logs
        console.log("AdminLayout - Is Login Valid:", isLoggedIn);
        console.log("AdminLayout - User Role:", userRole);

        if (!isLoggedIn) {
            console.warn("AdminLayout - User not logged in. Redirecting to login...");
            navigate("/login");  // Redirect to login if not logged in
        } else if (userRole !== "ADMIN") {
            console.warn("AdminLayout - User is not an admin. Redirecting to home...");
            navigate("/home");  // Redirect to home if not an admin
        } else {
            console.log("AdminLayout - User authorized. Rendering admin layout...");
            setRenderAdmin(true);  // Render admin layout if logged in and admin
        }
    };

    useEffect(() => {
        checkNavigation();
    }, [navigate]);  // Trigger checkNavigation whenever navigate changes

    if (!renderAdmin) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loader2 className="h-14 w-14 animate-spin text-purple-500" />
            </div>
        );
    }

    return (
        <div className="w-screen h-screen flex flex-row">
            <div className="w-[18vw] h-full">
                <AdminLeftBar />
            </div>
            <div className="w-[82vw] h-full flex flex-col">
                <div className="h-[3rem]">
                    <AdminTopBar />
                </div>
                <div className="flex-1 overflow-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
