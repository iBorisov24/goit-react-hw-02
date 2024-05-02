import css from './Options.module.css';
import clsx from 'clsx';
export default function Options({ text, updateFeedback }) {
	return (
		<button
			onClick={text => updateFeedback(text)}
			className={clsx(css['button'])}
		>
			{text}
		</button>
	);
}
