import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Gs from './theme/globalStyles';
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import Home from './pages/home' 
import Launchpad from './pages/launchpad' 
import LiveInfo from './pages/liveInfo' 
import UpcomingInfo from './pages/upcomingInfo' 
import EndedInfo from './pages/endedInfo' 


function App() {   

  const [isDark,setDarkTheme] = useState(true);
  const selectedTheme = theme(isDark);

  function setTheme(flag){
    setDarkTheme(flag);    
  }

  return (
    <Router  > 
    <ThemeProvider theme={selectedTheme}>
      <section className='MainBox clearfix'>
        <Gs.GlobalStyle /> 
          <Switch>
            <Route path="/" exact> <Home isDarkTheme={isDark}  />  </Route>   
            <Route path="/launchpad" exact> <Launchpad isDarkTheme={isDark}  />  </Route>   
            <Route path="/live-info" exact> <LiveInfo isDarkTheme={isDark}  />  </Route>   
            <Route path="/upcoming-info" exact> <UpcomingInfo isDarkTheme={isDark}  />  </Route>   
            <Route path="/ended-info" exact> <EndedInfo isDarkTheme={isDark}  />  </Route>   
          </Switch>   
        </section>
    </ThemeProvider>
    </Router>

  );
}


export default App;