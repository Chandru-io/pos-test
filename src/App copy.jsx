import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setClientTheme } from "./redux/slicethemeSlice";

const App = () => {
  const dispatch = useDispatch();
  const { theme, primaryColor, secondaryColor } = useSelector(
    (state) => state.theme
  );

  const clientThemes = {
    1: { primary: "#FF6347", secondary: "#FFD700" },
    2: { primary: "#32CD32", secondary: "#8A2BE2" },
  };

  const setClientBranding = (clientId) => {
    const theme = clientThemes[clientId];
    if (theme) {
      dispatch(setClientTheme(theme));
    }
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    document.documentElement.style.setProperty(
      "--primary-color-light",
      primaryColor
    );
    document.documentElement.style.setProperty(
      "--secondary-color-light",
      secondaryColor
    );
    document.documentElement.style.setProperty(
      "--primary-color-dark",
      primaryColor
    );
    document.documentElement.style.setProperty(
      "--secondary-color-dark",
      secondaryColor
    );
  }, [theme, primaryColor, secondaryColor]);

  return (
    <div>
      <button onClick={toggleThemeHandler}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div className="p-6">
        <button className="bg-primary text-white p-2">Primary Button</button>
        <button className="bg-secondary text-white p-2 ml-2">
          Secondary Button
        </button>
      </div>

      <button onClick={() => setClientBranding(1)}>Set Client 1 Theme</button>
      <button onClick={() => setClientBranding(2)}>Set Client 2 Theme</button>
    </div>
  );
};

export default App;
