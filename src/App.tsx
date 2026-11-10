import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";

function AppToaster() {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("light") ? "light" : "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    const syncTheme = () => {
      setTheme(root.classList.contains("light") ? "light" : "dark");
    };

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Toaster
      theme={theme}
      richColors
      position="top-center"
      closeButton
      expand
    />
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <AppToaster />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
