import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import PickUp from './components/PickUp/PickUp';
import AddService from './components/AddService/AddService';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/banner'>
              <Banner></Banner>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute exact path='/products'>
              <Products></Products>
            </PrivateRoute>
            <PrivateRoute exact path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <Route exact path='/pickup'>
              <PickUp></PickUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
