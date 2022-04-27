import axios from 'axios';
import React, { useState } from 'react';

import OptionsList from '../OptionsList/OptionsList';

import classes from './SelectCity.module.scss';

const SelectCity = () => {
	const [options, setOptions] = useState();

	const getCity = value => {
		axios
			.get(`/api.php?query=${value}&contentType=city&limit=10&withParent=true`)
			.then(response => {
				setOptions(response.data.result);
			});
	};

	return (
		<>
			<div className={classes.form}>
				<input
					className={classes.formInput}
					id="Город"
					name="city"
					type="text"
					defaultValue=""
					placeholder=" "
					list="city"
					autoComplete="off"
					onChange={e => getCity(e.target.value)}
				/>
				<label htmlFor="Город" className={classes.formLabel}>
					Город
				</label>
			</div>
			<OptionsList options={options} />
		</>
	);
};

export default SelectCity;
