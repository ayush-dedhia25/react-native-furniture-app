import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	welcomeText: (color, mt, size) => ({
		fontFamily: 'interBold',
		fontSize: size ? size : SIZES.xxLarge - 5,
		marginTop: mt,
		marginHorizontal: 14,
		color: color ? color : COLORS.black,
	}),
	searchContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: SIZES.small,
		marginVertical: SIZES.medium,
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.medium,
	},
	searchIcon: {
		marginHorizontal: 10,
		color: COLORS.gray,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.secondary,
		marginRight: SIZES.small,
		borderRadius: SIZES.small,
	},
	searchInput: {
		fontFamily: 'interRegular',
		width: '100%',
		height: '100%',
		paddingHorizontal: SIZES.small,
	},
	searchButton: {
		width: 50,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.medium,
	},
});

export default styles;
