import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { COLORS, SIZES } from '../../constants/theme';
import styles from './welcome.style';

export default function Welcome() {
	const navigation = useNavigation();

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.welcomeText(null, SIZES.xSmall)}>Find The Most</Text>
				<Text style={styles.welcomeText(COLORS.primary, 0, 30)}>Luxurious Furniture</Text>
			</View>

			<View style={styles.searchContainer}>
				<TouchableOpacity>
					<Feather name="search" size={24} style={styles.searchIcon} />
				</TouchableOpacity>
				<View style={styles.searchWrapper}>
					<TextInput
						value=""
						onPressIn={() => navigation.navigate('Search')}
						placeholder="What are you looking for?"
						style={styles.searchInput}
					/>
				</View>
				<View>
					<TouchableOpacity style={styles.searchButton}>
						<Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offwhite} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
