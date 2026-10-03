import { Home } from "./pages/Home/Home";
import { Story } from "./pages/Story/Story";
import { BigDay } from "./pages/BigDay/BigDay";
import { Gifts } from "./pages/Gifts/Gifts";
import { Family } from "./pages/Family/Family";
import { Playlist } from "./pages/Playlist/Playlist";
import { GuestGuide } from "./pages/GuestGuide/GuestGuide";
import { Confirmation } from "./pages/Confirmation/Confirmation";
import { WeddingActions } from "./components/features/WeddingActions/WeddingActions";
import { Admin } from "./pages/Admin/Admin";

function App() {

    const pathname = window.location.pathname;

    if (pathname === "/admin" || pathname === "/admin/confirmacoes") {
        return <Admin />;
    }

    return (
        <>
            <Home />
            <WeddingActions />
            <Story />
            <BigDay />
            <Gifts />
            <Family />
            <Playlist />
            <GuestGuide />
            <Confirmation />
        </>
    );
}

export default App;