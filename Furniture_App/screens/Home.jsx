import { Fontisto, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Carousel, Headings, ProductRow, Welcome } from '../components';
import styles from './styles/home.style';

export default function Home() {
	return (
		<SafeAreaView>
			<View style={styles.appBarWrapper}>
				<View style={styles.appBar}>
					<Ionicons name="location-outline" size={24} />

					<Text style={styles.location}>India</Text>

					<View style={{ alignItems: 'flex-end' }}>
						<View style={styles.cartCount}>
							<Text style={styles.cartNumber}>8</Text>
						</View>
						<TouchableOpacity>
							<Fontisto name="shopping-bag" size={24} />
						</TouchableOpacity>
					</View>
				</View>
			</View>

			<ScrollView>
				<Welcome />
				<Carousel />
				<Headings />
				<ProductRow />
			</ScrollView>
		</SafeAreaView>
	);
}
