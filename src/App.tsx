import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Gallery } from "./components/Gallery/Gallery";
import { Nav } from "./components/Nav/Nav";
import { UserContextProvider } from "./contexts/UserContext";

import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class">
      <UserContextProvider>
        <div className="font-quick">
          <Nav />
          <Gallery />
          <Footer />
        </div>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
