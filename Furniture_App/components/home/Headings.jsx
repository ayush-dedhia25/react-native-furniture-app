import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { COLORS } from '../../constants/theme';
import styles from './styles/heading.style';

function Headings() {
	return (
		<View>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerTitle}>New Rivals</Text>
					<TouchableOpacity>
						<Ionicons name="ios-grid" size={24} color={COLORS.primary} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Headings;
