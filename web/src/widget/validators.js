import { useState, useRef, useEffect } from "react";

function useValidator(...fun) {
	const [valid, setValid] = useState('');
	const thedom = useRef();
	const thecallback = useRef();
	return [valid, (e) => setValid(combine(fun)(e)), thedom, thecallback]
}

function checkAllValidators(validators)  {
	const validatorCallbacks = Object.values(validators);
	const harmonyCallback = combine(validatorCallbacks.map(x => x[2].current))
	validatorCallbacks.forEach(x => x[3].current = harmonyCallback);
	return validatorCallbacks.every(x => !x[0]);
}

function useHandleControlValidator(validator, ref) {
	if (validator) {
		validator[2].current = () => validator[1]({ target: ref.current });
	}
	useEffect(() => {
		if (validator)
			validator[2].current();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}

const required = () => e => e.target.value ? '' : 'Isian ini diperlukan';
const minLength = (length) => e => !e.target.value || e.target.value.length >= length ? '' : `Isian ini harus mempunyai minimal ${length} karakter`;
const validEmail = () => e => !e.target.value || /^\S+@\S+\.\S+$/.test(e.target.value) ? '' : `Isian ini harus berupa email yang sah`;
const validTel = () => e => !e.target.value || /^08[0-9]{9,13}$/.test(e.target.value) ? '' : `Isian ini harus berupa nomor HP yang sah`;
const matchesRegex = (regex) => e => !e.target.value || regex.test(e.target.value) ? '' : `This field isn't satisfy the specified format`;
const matchesValue = (value) => e => !e.target.value || e.target.value === value ? '' : `Isian ini tidak cocok`;
const matchesField = (name) => e => e.target.value === e.target.form[name].value ? '' : `Isian ini tidak cocok`;
const requireField = (name) => e => !e.target.value ||  e.target.form[name].value ? '' : `Isian yang lain diperlukan`;
const combine = (rules) => e => {
	for (const rule of rules) {
		if (rule){
			const result = rule(e);
			if (result) return result;
		}
	}
}

export {
	useValidator,
	checkAllValidators,
	useHandleControlValidator,
	matchesRegex,
	required,
	minLength,
	validEmail,
	validTel,
	matchesField,
	matchesValue,
	requireField,
	combine,
}