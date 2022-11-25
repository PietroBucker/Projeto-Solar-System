import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headLine="Missões" />
        <div className="cardContent">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />))}
        </div>
      </div>
    );
  }
}

export default Missions;
