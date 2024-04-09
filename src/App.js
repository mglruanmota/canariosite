import React from 'react';
import logo from './cnr11.png';
import './App.css';
import Banner from './Captura de tela 2024-04-08 195236 (1).png';
import iphone8 from './iphone8.png'
import iphone8t from './iphone 8 tela.png';
import cnt from './conector.png';
import motog from './motog.png';
import iphonerose from './iphone 8 rose.png';
import iphonered from './iphone 8 red.png';


function App() {
  return (
    <div>
      <nav>
        <div>
          <img src={logo} alt="Logo do Canário Soluções" />
          <span>Canário Soluções</span>
        </div>
      </nav>

      <div className="banner">
        <img src={Banner} alt="Banner da Nike" />
        <div className="banner-content">
                  </div>
      </div>

      <div className="product-cards">
        <div className="product-card">
          <img src={iphone8} alt="Product 1" />
          <div className="product-details">
            <h2>Troca de carcaça completa Iphone 8 Plus</h2>
            <p>$150 - Mão de Obra</p>
            <button> </button>
          </div>
        </div>

        <div className="product-card">
          <img src={iphone8t}alt="Product 2" />
          <div className="product-details">
            <h2>Troca de Tela Iphone 8 Plus</h2>
            <p>$100 - Mão de Obra</p>
            <button></button>
          </div>
        </div>

        <div className="product-card">
          <img src={cnt} alt="Product 3" />
          <div className="product-details">
            <h2>Troca de conector de carga</h2>
            <p>R$80,00 Completo</p>
            <button></button>
          </div>
        </div>

        <div className="product-card">
          <img src={motog} alt="Product 3" />
          <div className="product-details">
            <h2>Motorola G7 Power</h2>
            <p>R$400,00</p>
            <button>Vendido</button>
          </div>
        </div>

        <div className="product-card">
          <img src={iphonerose} alt="Product 3" />
          <div className="product-details">
            <h2>Iphone 8 Plus Rose 64GB</h2>
            <p>R$1200,00</p>
            <button>Vendido</button>
          </div>
        </div>

        <div className="product-card">
          <img src={iphonered} alt="Product 3" />
          <div className="product-details">
            <h2>Iphone 8 Plus Rose 64GB</h2>
            <p>R$1000,00</p>
            <button>Vendido</button>
          </div>
        </div>
   
      </div>
      <footer className="footer">
        <p>© 2024 Canário Soluções. Todos os direitos reservados.</p>
        <p>Feito por Ruan Soares Mota, CEO, Idealizador.</p>
      </footer>
    </div>
  );
}

export default App;
