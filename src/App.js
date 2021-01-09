import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem,
  Button
} from "carbon-components-react";
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";

import Home from './components/home/home.component';


function App() {
  return (
    <div className="App">

          {/* <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App Switcher" onClick={() => {}}>
              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar> */}

        <Home />
        <Button className="custom-class">Submit</Button>

    </div>
  );
}

export default App;
