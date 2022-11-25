import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headLine } = this.props;
    return (
      <h2>{ headLine }</h2>
    );
  }
}
Title.propTypes = {
  headLine: PropTypes.string.isRequired,
};

export default Title;
