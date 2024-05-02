import { useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
function App() {
	const [feedbackItem, setFeedbackItem] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});
	const updateFeedback = feedbackType => {
		setFeedbackItem({
			...feedbackItem,
			[feedbackType]: feedbackItem[feedbackType] + 1,
		});
	};

	return (
		<>
			<Description
				title="Sip Happens Café"
				text="Please leave your feedback about our service by selecting one of the options below."
			/>
			<Options text="Good" />
			<Options text="Neutral" />
			<Options text="Bad" />
			<Options text="Reset" />

			<Feedback text="Good:" review={feedbackItem.good} />
			<Feedback text="Neutral:" review={feedbackItem.neutral} />
			<Feedback text="Bad:" review={feedbackItem.bad} />
			<Feedback text="Total:" review={''} />
			<Feedback text="Positive:" review={''} />
		</>
	);
}

export default App;
