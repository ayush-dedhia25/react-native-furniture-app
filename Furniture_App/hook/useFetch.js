import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.get('http://localhost:3000/api/products');
			console.log('🚀 ~ file: useFetch.js:13 ~ fetchData ~ response:', response);
			setData(response.data);
			setLoading(false);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setLoading(true);
		fetchData();
	};

	return { data, loading, error, refetch };
}

export default useFetch;
