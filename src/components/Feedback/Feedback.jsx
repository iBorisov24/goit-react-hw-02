export default function feedback({ totalFeedback, typeList }) {
	if (totalFeedback > 0) {
		return (
			<ul>
				<li>Good:{typeList.good}</li>
				<li>Neutral:{typeList.neutral}</li>
				<li>Bad:{typeList.bad}</li>
				<li>Total: {totalFeedback}</li>
				<li>
					Positive:
					{Math.round((typeList.good / totalFeedback) * 100) + '%'}
				</li>
			</ul>
		);
	}
}
