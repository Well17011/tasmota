import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Checkbox from '@material-ui/core/Checkbox';
import { FormattedMessage } from 'react-intl';

function FeaturesSelector(props) {
  const {
    value,
    onChange,
    classes,
    item: { description, tooltip, name },
  } = props;

  return (
    <div className={classes.checkboxContainer}>
      <Tooltip title={tooltip ? (<FormattedMessage id={tooltip} />) : ('')}>
        <FormControlLabel
          control={(
            <Checkbox
              checked={value}
              name={name}
              onChange={onChange}
              value={name}
            />
          )}
          label={<FormattedMessage id={description} />}
        />
      </Tooltip>
    </div>
  );
}

FeaturesSelector.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  item: PropTypes.shape({
    description: PropTypes.string,
    tooltip: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default FeaturesSelector;
