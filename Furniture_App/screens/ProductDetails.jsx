import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '../constants/theme';
import styles from './styles/productDetails.style';

export default function ProductDetails({ navigation }) {
	const [count, setCount] = useState(1);

	const incrementRating = () => {
		setCount((initialCount) => (initialCount < 5 ? initialCount + 1 : initialCount));
	};

	const decrementRating = () => {
		setCount((initialCount) => (initialCount > 1 ? initialCount - 1 : initialCount));
	};

	return (
		<View style={styles.container}>
			<View style={styles.upperRow}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Ionicons name="chevron-back-circle" size={30} />
				</TouchableOpacity>

				<TouchableOpacity onPress={() => {}}>
					<Ionicons name="heart" size={30} color={COLORS.primary} />
				</TouchableOpacity>
			</View>

			<Image
				source={{
					uri: 'https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg',
				}}
				style={styles.image}
			/>

			<View style={styles.details}>
				<View style={styles.titleRow}>
					<Text style={styles.title}>Hello Ayush!</Text>
					<View style={styles.priceWrapper}>
						<Text style={styles.price}>₹ 499</Text>
					</View>
				</View>

				<View style={styles.ratingRow}>
					<View style={styles.rating}>
						{[1, 2, 3, 4, 5].map((rate) => (
							<Ionicons key={rate} name="star" size={24} color="gold" />
						))}

						<Text style={styles.ratingText}> (4.9)</Text>
					</View>

					<View style={styles.rating}>
						<TouchableOpacity onPress={() => incrementRating()}>
							<SimpleLineIcons name="plus" size={20} />
						</TouchableOpacity>
						<Text style={styles.ratingText}>{count}</Text>
						<TouchableOpacity onPress={() => decrementRating()}>
							<SimpleLineIcons name="minus" size={20} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.descriptionWrapper}>
					<Text style={styles.description}>Description</Text>
					<Text style={styles.descriptionText}>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor quam ducimus tempora
						alias commodi temporibus at culpa asperiores odio animi?
					</Text>
				</View>

				<View style={{ marginBottom: SIZES.small }}>
					<View style={styles.location}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Ionicons name="location-outline" size={20} />
							<Text style={{ marginLeft: 5 }}>India</Text>
						</View>

						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<MaterialCommunityIcons name="truck-delivery-outline" size={20} />
							<Text style={{ marginLeft: 8 }}>Free Delivery</Text>
						</View>
					</View>
				</View>

				<View style={styles.cartRow}>
					<TouchableOpacity style={styles.cartButton} onPress={() => {}}>
						<Text style={styles.cartTitle}>Buy Now</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.addToCartButton} onPress={() => {}}>
						<Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
