import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName={ Planets[0].name } planetImage={ Planets[0].image } />
      </div>
    );
  }
}

export default SolarSystem;
