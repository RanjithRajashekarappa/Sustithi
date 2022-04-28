import logo from './MainLogo.svg';
import symbol from './MedicineSymbol.svg';
import facebook from './akar-icons_facebook-fill.svg';
import twitter from './akar-icons_twitter-fill.svg';
import './ProductList.css';

function ProductsList() {
  return (
    <div className="App">
        <div class = "header">
            <img src={logo}></img>
            <div class="title">
            Sustithi Online Pharmacy<br></br>
            (A venture by SR Dreamz Enterprises - Dealer of Sanjeevani)
            </div>
            <img src={symbol}></img>
        </div>
        <div class = "main">
            <div class = "categoryMenu">
                <div class = "categoryName"><p>Allopathy</p></div>
                <div class = "categoryName"><p>Homeopathy</p></div>
                <div class = "categoryName"><p>Ayurvedic</p></div>
                <div class = "categoryName"><p>Dental</p></div>
                <div class = "categoryName"><p>General</p></div>
            </div>
        </div>
        <div class = "footer"></div>
    </div>
  );
}

export default ProductsList;
