import isEmpty from 'lodash/isEmpty';
import React from 'react';

const OptionsList = ({ options }) => {
	return (
		<datalist id="city">
			{!isEmpty(options)
				? options.map(({ id, name, parents }) => (
						<option key={id} value={name}>
							{!isEmpty(parents) ? `${parents[0].name} ${parents[0].typeShort}` : ''}
						</option>
				  ))
				: ''}
		</datalist>
	);
};

export default OptionsList;
