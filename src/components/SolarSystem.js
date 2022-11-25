import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headLine="Planetas" />
        {Planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
      </div>
    );
  }
}

export default SolarSystem;
