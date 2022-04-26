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
			<h1>Поиск населенного пункта</h1>
			<form>
				<div className={classes.field}>
					<input
						className={classes.inputFld}
						name="city"
						type="text"
						defaultValue=""
						placeholder="Город"
						list="city"
						autoComplete="off"
						onChange={e => getCity(e.target.value)}
					/>
					<OptionsList options={options} />
				</div>
			</form>
		</>
	);
};

export default SelectCity;
