import React from "react";
import styled from "styled-components";
import { LoginContext } from "./contexts";
import CustomRoutes from "./routes";
import { Colors } from "./Theme";


function App() {
  const loginState = React.useState(false);

  return <AppWrapper>
    <LoginContext.Provider value={{ login: loginState[0], setLogin: loginState[1] }} >
      <CustomRoutes />
    </LoginContext.Provider>
  </AppWrapper>
}

export default App;

const AppWrapper = styled.div`
  background-color: ${Colors.Dark};
  min-height: 100vh;
  overflow-y: hidden;
`;
