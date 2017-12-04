import React, {Component} from 'react';
import {ChromePicker} from 'react-color';

import './App.css';

const categories = [
  {name: 'event_venue', type: 1},
  {name: 'ferriswheel', type: 1},
  {name: 'historic', type: 1},
  {name: 'dot', type: 1},
  {name: 'lodging', type: 1},
  {name: 'civic_bldg', type: 1},
  {name: 'school', type: 1},
  {name: 'shoppingbag', type: 1},
  {name: 'shoppingcart', type: 1},
  {name: 'worship_temple', type: 1},
  {name: 'library', type: 1},
  {name: 'bridge', type: 1},
  {name: 'movie', type: 1},
  {name: 'museum', type: 1},
  {name: 'camera', type: 1},
  {name: 'dolphin', type: 1},
  {name: 'tree', type: 1},
  {name: 'restaurant', type: 1},
  {name: 'bank_euro', type: 1},
  {name: 'note', type: 1},
  {name: 'theater', type: 1},
  {name: 'palette', type: 1},
  {name: 'cemetery', type: 1},
  {name: 'hospital_H', type: 1},
  {name: 'worship_jewish', type: 1},
  {name: 'stadium', type: 1},
  {name: 'golf', type: 1},
  {name: 'flower', type: 1},
  {name: 'bar', type: 1},
  {name: 'airport', type: 1},
  {name: 'postoffice', type: 1},
  {name: 'cafe', type: 1},
  {name: 'worship_islam', type: 1},
  {name: 'gas', type: 1},
  {name: 'parking', type: 1},
  {name: 'boating', type: 1},
  {name: 'car_rental', type: 1},
  {name: 'pharmacy', type: 1},
  {name: 'medical', type: 1},
  {name: 'dice', type: 1},
  {name: 'monument', type: 1},
  {name: 'camping', type: 1},
  {name: 'worship_hindu', type: 1},
  {name: 'electric_vehicle_charging_station', type: 1},
  {name: 'bank_dollar', type: 1},
  {name: 'atm', type: 1},
  {name: 'police', type: 1},
  {name: 'constellation_star', type: 1},
  {name: 'paw', type: 1},
  {name: 'work', type: 1},
  {name: 'home', type: 1},
  {name: 'basketball', type: 2},
  {name: 'badge', type: 2},
  {name: 'food-and-wine', type: 2},
  {name: 'flag', type: 2},
  {name: 'soccer', type: 2}
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pinBackground: '13b5c7',
      pinForeground: 'ffffff'
    };
  }

  getUrl({type, category, background, foreground}) {
    let link =
      `https://www.google.com/maps/vt/icon/` +
      `name=assets/icons/poi/tactile/pinlet_shadow-2-medium.png,` +
      `assets/icons/poi/tactile/pinlet-2-medium.png,`;

    if (type === 1) {
      link += `assets/icons/poi/quantum/pinlet/${category}_pinlet-2-medium.png`;
    }

    if (type === 2) {
      link += `assets/icons/dynamicworld/cat/pinlet/${category}_pinlet.png`;
    }

    link += `&highlight=ff000000,${background},${
      foreground
    }&color=ff000000?scale=4`;

    return link;
  }

  handlePinBackgroundChange(event) {
    const {hex} = event;
    this.setState({pinBackground: hex.replace('#', '')});
  }

  handlePinForegroundChange(event) {
    const {hex} = event;
    this.setState({pinForeground: hex.replace('#', '')});
  }

  render() {
    const {pinBackground, pinForeground} = this.state;

    return (
      <div className="app">
        <header
          className="header"
          style={{background: `#${pinBackground}`, color: `#${pinForeground}`}}>
          <h1 className="title">Google Maps Pins</h1>
        </header>
        <div className="content">
          <div className="colors">
            <div className="picker-wrapper">
              <h3>Background Color</h3>
              <ChromePicker
                disableAlpha
                color={this.state.pinBackground}
                onChangeComplete={this.handlePinBackgroundChange.bind(this)}
              />
            </div>
            <div className="picker-wrapper">
              <h3>Fill Color</h3>

              <ChromePicker
                disableAlpha
                color={this.state.pinForeground}
                onChangeComplete={this.handlePinForegroundChange.bind(this)}
              />
            </div>
          </div>

          <div className="pins">
            {categories.map(category => {
              const {name, type} = category;
              return (
                <div className="pin" key={name}>
                  <img
                    src={this.getUrl({
                      type,
                      category: name,
                      background: pinBackground,
                      foreground: pinForeground
                    })}
                  />
                  <span>{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
