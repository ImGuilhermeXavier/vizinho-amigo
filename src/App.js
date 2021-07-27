import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Presentation from './pages/Presentation/Presentation';
import guy from './images/guy.png';
import money from './images/money.png';
import pedido from './images/pedido.png';
import Signup from './pages/Signup/Signup';
import Number from './pages/Number/Number';
import Location from './pages/Location/Location';
import Explorar from './pages/Explorar/Explorar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<Presentation 
                  title='Bem-vindo!' 
                  desc='No VizinhoAmigo, conectamos você com sua vizinhança através de uma rede social de oferta e demanda de produtos e serviços.'
                  image={guy}
                  goTo='part-2'/>} />
          <Route path='/part-2' element={<Presentation 
                 title='Ofertas' 
                 image={money}
                 desc='Você pode cadastrar serviços ou produtos que queira oferecer à sua vizinhança e começar a rentabilizar seu pequeno negócio!' 
                 goTo='part-3'/>} />
          <Route path='/part-3' element={<Presentation 
                 title='Compras' 
                 image={pedido}
                 desc='E, além disso, pode também realizar a contratação de serviços de terceiros e a compra de produtos, pagando diretamente pelo aplicativo. Fácil, né?'
                 goTo='signup'/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/number' element={<Number/>} />
          <Route path='/location' element={<Location/>} />
          <Route path='/explorar' element={<Explorar/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
