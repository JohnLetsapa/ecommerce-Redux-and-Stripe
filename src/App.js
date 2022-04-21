import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Contact from './routes/contact/contact.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />{' '}
        {/* index short for index = true. it will render at path = '/'. */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
