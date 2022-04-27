function keysToUpperCase(obj) {
	if (typeof obj !== 'object') return 0;
	for (let key in obj) {
		obj[key.toUpperCase()] = obj[key];
		if (Array.isArray(obj[key.toUpperCase()])) {
			let newArr = obj[key.toUpperCase()].filter(item => item.constructor.name === 'Object');
			if (newArr.length > 0) {
				newArr.forEach(item => keysToUpperCase(item));
			}
		} else if (typeof obj[key.toUpperCase()] === 'object') {
			keysToUpperCase(obj[key.toUpperCase()]);
		}
		delete obj[key];
	}
	return obj;
}

module.exports = { keysToUpperCase };
