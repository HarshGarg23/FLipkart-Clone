import { Box } from '@mui/system';
//Components
import Header from "./Components/Header/Header.jsx"
import Home from './Components/Home/Home';
import DataProvider from './context/DataProvider.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DetailsView from './Components/Details/DetailsView.jsx';
function App() {
  return (
    <DataProvider >
      <BrowserRouter>
      <Header />
      <Box style={{ marginTop: 54 }}>
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<DetailsView/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
