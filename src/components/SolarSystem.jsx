import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solar-system">
          {
            Planets.map(({ name, image }) => (
              <PlanetCard planetName={ name } planetImage={ image } key={ name } />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
