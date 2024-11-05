import { useDispatch, useSelector } from "react-redux";
import { setThemeInStore } from "../../redux/slices/themeSlice";

const themes = ["light", "dark", "blue", "green", "red", "purple"];

export const ThemeChange = () => {
  const theme = useSelector((state) => state.theme.theme);

  const dispatch = useDispatch();

  const changeTheme = (newTheme) => {
    dispatch(setThemeInStore(newTheme));
  };

  return (
    <div data-theme={theme} className="p-5">
      <div className="flex gap-4">
        {themes.map((t) => (
          <div
            className="p-0.5 border border-stroke rounded"
            key={t}
            onClick={() => changeTheme(t)}
          >
            <button
              className={`p-4 rounded
              ${
                t == "light"
                  ? "bg-white"
                  : t == "dark"
                  ? "bg-[#43b9b2]"
                  : t == "blue"
                  ? "bg-[#329DFF]"
                  : t == "green"
                  ? "bg-[#36AB6C]"
                  : t == "red"
                  ? "bg-[#AB0000]"
                  : t == "purple"
                  ? "bg-[#7a3e65]"
                  : ""
              }`}
            >
              {/* {t.charAt(0).toUpperCase() + t.slice(1)} Theme */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);
  return <div data-theme={theme}>{children}</div>;
};
