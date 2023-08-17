import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { COLORS, SIZES } from '../../constants/theme';
import useFetch from '../../hook/useFetch';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';

function ProductRow() {
	const { data, loading, error } = useFetch();

	let allSet = null;
	if (loading) {
		allSet = <ActivityIndicator size={SIZES.large} color={COLORS.primary} />;
	}

	if (error) {
		allSet = <Text>Oops! Something went wrong.</Text>;
	}

	return (
		<View style={styles.container}>
			{allSet && allSet}
			<FlatList
				data={data}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => <ProductCardView item={item} />}
				contentContainerStyle={{ columnGap: SIZES.small }}
				horizontal
			/>
		</View>
	);
}

export default ProductRow;
