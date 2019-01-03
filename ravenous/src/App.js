import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/App/App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>{`${business.state} ${business.zipCode}`}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${business.rating} stars`}</h3>
            <p>{`${business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList business={businesses} />
    </div>
    );
  }
}

export default App;
