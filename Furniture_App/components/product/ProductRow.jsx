import React from 'react';
import { FlatList, View } from 'react-native';

import { SIZES } from '../../constants/theme';
import ProductCardView from './ProductCardView';
import styles from './productRow.style';

export default function ProductRow() {
	const products = [1, 2, 3];

	return (
		<View style={styles.container}>
			<FlatList
				data={products}
				renderItem={({ item }) => <ProductCardView />}
				horizontal
				contentContainerStyle={{ columnGap: SIZES.small }}
			/>
		</View>
	);
}
