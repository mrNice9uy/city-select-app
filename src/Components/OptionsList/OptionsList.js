import isEmpty from 'lodash/isEmpty';
import React from 'react';

import classes from './OptionsList.module.scss';

const OptionsList = ({ options }) => {
	console.log('opt', options);
	return (
		<datalist className={classes.optionsList} id="city">
			{!isEmpty(options)
				? options.map(({ id, name, parents }) => (
						<option className={classes.optionsList} key={id} value={name}>
							{!isEmpty(parents) ? `, ${parents[0].name} ${parents[0].typeShort}` : ''}
						</option>
				  ))
				: ''}
		</datalist>
	);
};

export default OptionsList;
