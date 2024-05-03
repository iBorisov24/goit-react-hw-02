export default function feedback({ type, review, total }) {
	if (total > 0) {
		return (
			<p>
				{type}
				{review}
			</p>
		);
	}
}
