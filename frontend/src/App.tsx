import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <p>Hello</p>
    </ChakraProvider>
  );
}

export default App;
