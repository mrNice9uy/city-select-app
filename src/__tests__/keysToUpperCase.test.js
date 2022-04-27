const { keysToUpperCase } = require('../Utils/keysToUpperCase');

describe('keysToUpperCase test:', () => {
	it('Object property is an array', () => {
		const obj = {
			arr1: [1, 2, 3, 4],
			arr2: ['qwe', 'rty'],
		};
		const result = {
			ARR1: [1, 2, 3, 4],
			ARR2: ['qwe', 'rty'],
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});

	it('Object property is an object', () => {
		const obj = {
			obj_: {
				key1: 1,
				key2: 2,
			},
		};
		const result = {
			OBJ_: {
				KEY1: 1,
				KEY2: 2,
			},
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});

	it('Object property is an array of objects', () => {
		const obj = {
			arrayOfObjects: [
				{ a: 'a', b: 'b' },
				{ k1: 1, k2: 2 },
			],
		};
		const result = {
			ARRAYOFOBJECTS: [
				{ A: 'a', B: 'b' },
				{ K1: 1, K2: 2 },
			],
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});

	it('Object property is an object of arrays', () => {
		const obj = {
			objectOfArrays: {
				arr3: [5, 6, 7, 8],
				arr4: ['qqq', 'zzz'],
			},
		};
		const result = {
			OBJECTOFARRAYS: {
				ARR3: [5, 6, 7, 8],
				ARR4: ['qqq', 'zzz'],
			},
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});

	it('Object property is a boolean value', () => {
		const obj = {
			bin: true,
		};
		const result = {
			BIN: true,
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});

	it('Object property is a string value', () => {
		const obj = {
			str: 'qwerty',
		};
		const result = {
			STR: 'qwerty',
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});

	it('Object property is a nested object', () => {
		const obj = {
			nestedObj: {
				arr1: [1, 2, 3, 4],
				arr2: ['qwe', 'rty'],
				obj_: {
					key1: 1,
					key2: 2,
				},
				arrayOfObjects: [
					{ a: 'a', b: 'b' },
					{ k1: 1, k2: 2 },
				],
				objectOfArrays: {
					arr3: [5, 6, 7, 8],
					arr4: ['qqq', 'zzz'],
				},
				bin: true,
				str: 'qwerty',
			},
		};
		const result = {
			NESTEDOBJ: {
				ARR1: [1, 2, 3, 4],
				ARR2: ['qwe', 'rty'],
				OBJ_: {
					KEY1: 1,
					KEY2: 2,
				},
				ARRAYOFOBJECTS: [
					{ A: 'a', B: 'b' },
					{ K1: 1, K2: 2 },
				],
				OBJECTOFARRAYS: {
					ARR3: [5, 6, 7, 8],
					ARR4: ['qqq', 'zzz'],
				},
				BIN: true,
				STR: 'qwerty',
			},
		};
		expect(keysToUpperCase(obj)).toMatchObject(result);
	});
});
