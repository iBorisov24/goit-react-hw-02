import css from './Options.module.css';
import clsx from 'clsx';
export default function Options({ text, handleClick }) {
	return (
		<button onClick={() => handleClick()} className={clsx(css['button'])}>
			{text}
		</button>
	);
}
