import { Feather, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';
import styles from './styles/search.style';

export default function Search() {
	return (
		<SafeAreaView>
			<View style={styles.searchContainer}>
				<TouchableOpacity>
					<Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon} />
				</TouchableOpacity>
				<View style={styles.searchWrapper}>
					<TextInput
						value=""
						onPressIn={() => {}}
						placeholder="What are you looking for?"
						style={styles.searchInput}
					/>
				</View>
				<View>
					<TouchableOpacity style={styles.searchButton}>
						<Feather name="search" size={24} color={COLORS.offwhite} />
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}
