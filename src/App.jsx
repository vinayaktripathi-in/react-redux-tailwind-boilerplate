import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { Tooltip } from "./components/tooltip";
import { ThemeProvider } from "./components/theme";
import { OnlineStatus } from "./components/onlineStatus";
import { ScrollToTopButton } from "./components/scrollToTop";
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider>
          <Outlet />
          {/* <Tooltip id="my-tooltip" /> */}
          <ScrollToTopButton />
          <Toaster />
          <OnlineStatus />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
