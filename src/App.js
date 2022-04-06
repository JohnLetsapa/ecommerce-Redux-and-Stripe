import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import './categories.styles.scss';

const Shop = () => {
  return <h1>The shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> // index short for index = true. it
        will render at path = '/'.
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
