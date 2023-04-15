function Wrapper(props) {
	const styles = {
		backgroundColor: '#ccc',
		fontSize: '24px',
		color: 'black',
		margin: '50px',
		padding: '100px 50px'
	}
	return <div style={styles}>{props.children}</div>
}

export default Wrapper;
