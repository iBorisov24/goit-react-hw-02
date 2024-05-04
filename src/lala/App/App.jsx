import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
	const [feedbackItem, setFeedbackItem] = useState(() => {
		if (localStorage.getItem('feedback-history') !== null) {
			return JSON.parse(localStorage.getItem('feedback-history'));
		} else {
			return { good: 0, neutral: 0, bad: 0 };
		}
	});

	useEffect(() =>
		localStorage.setItem('feedback-history', JSON.stringify(feedbackItem))
	),
		[feedbackItem];

	const updateFeedback = feedbackType => {
		setFeedbackItem({
			...feedbackItem,
			[feedbackType]: feedbackItem[feedbackType] + 1,
		});
	};

	const resetFeedback = () => setFeedbackItem({ good: 0, neutral: 0, bad: 0 });

	const totalFeedback =
		feedbackItem.good + feedbackItem.bad + feedbackItem.neutral;

	return (
		<>
			<Description
				title="Sip Happens Café"
				text="Please leave your feedback about our service by selecting one of the options below."
			/>

			<Options text="Good" handleClick={() => updateFeedback('good')} />
			<Options text="Neutral" handleClick={() => updateFeedback('neutral')} />
			<Options text="Bad" handleClick={() => updateFeedback('bad')} />

			{totalFeedback !== 0 ? (
				<Options text="Reset" handleClick={resetFeedback} />
			) : null}

			<Feedback type="Good:" review={feedbackItem.good} total={totalFeedback} />
			<Feedback
				type="Neutral:"
				review={feedbackItem.neutral}
				total={totalFeedback}
			/>
			<Feedback type="Bad:" review={feedbackItem.bad} total={totalFeedback} />
			<Feedback type="Total:" review={totalFeedback} total={totalFeedback} />
			<Feedback
				type="Positive:"
				review={Math.round((feedbackItem.good / totalFeedback) * 100) + '%'}
				total={totalFeedback}
			/>

			{totalFeedback === 0 ? <Notification total={totalFeedback} /> : null}
		</>
	);
}
