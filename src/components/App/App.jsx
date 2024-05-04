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
			return {
				good: 0,
				neutral: 0,
				bad: 0,
			};
		}
	});

	useEffect(
		() =>
			localStorage.setItem('feedback-history', JSON.stringify(feedbackItem)),
		[feedbackItem]
	);

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

			<Options
				updateFeedback={updateFeedback}
				resetFeedback={resetFeedback}
				totalFeedback={totalFeedback}
			/>

			<Feedback
				typeList={feedbackItem}
				totalFeedback={totalFeedback}
				positiveFeedback={feedbackItem.positive}
			/>

			{totalFeedback === 0 ? <Notification total={totalFeedback} /> : null}
		</>
	);
}
