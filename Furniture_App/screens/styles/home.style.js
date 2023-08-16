import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
	textStyles: {
		fontFamily: 'interBold',
		fontSize: 20,
	},
	appBarWrapper: {
		marginHorizontal: 22,
		marginTop: SIZES.small,
	},
	appBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	location: {
		fontFamily: 'poppinsSemiBold',
		fontSize: SIZES.medium,
		color: COLORS.gray,
	},
	cartCount: {
		position: 'absolute',
		bottom: 16,
		width: 16,
		height: 16,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'green',
		borderRadius: 8,
		zIndex: 9999,
	},
	cartNumber: {
		fontFamily: 'interRegular',
		fontWeight: '600',
		fontSize: 10,
		color: COLORS.lightWhite,
	},
});

export default styles;
