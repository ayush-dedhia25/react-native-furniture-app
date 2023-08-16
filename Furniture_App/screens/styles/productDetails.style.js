import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.lightWhite,
	},
	upperRow: {
		position: 'absolute',
		top: SIZES.xxLarge,
		marginHorizontal: 20,
		width: SIZES.width - 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 999,
	},
	image: {
		aspectRatio: 1,
		resizeMode: 'cover',
	},
	details: {
		width: SIZES.width,
		marginTop: -SIZES.large,
		backgroundColor: COLORS.lightWhite,
		borderTopLeftRadius: SIZES.medium,
		borderTopRightRadius: SIZES.medium,
	},
	titleRow: {
		top: 20,
		width: SIZES.width - 44,
		marginHorizontal: 20,
		paddingBottom: SIZES.small,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontFamily: 'interBold',
		fontSize: SIZES.large,
	},
	priceWrapper: {
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.large,
	},
	price: {
		paddingHorizontal: 10,
		fontFamily: 'interSemiBold',
		fontSize: SIZES.large,
	},
	ratingRow: {
		top: 5,
		width: SIZES.width - 10,
		paddingBottom: SIZES.small,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	rating: {
		top: SIZES.large,
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: SIZES.large,
	},
	ratingText: {
		color: COLORS.gray,
		fontFamily: 'interMedium',
		paddingHorizontal: SIZES.xSmall,
	},
	descriptionWrapper: {
		marginTop: SIZES.large * 2,
		marginHorizontal: SIZES.large,
	},
	description: {
		fontFamily: 'interMedium',
		fontSize: SIZES.large - 2,
	},
	descriptionText: {
		marginTop: 5,
		marginBottom: SIZES.small,
		fontSize: SIZES.small,
		fontFamily: 'interRegular',
		textAlign: 'justify',
	},
	location: {
		padding: 5,
		marginHorizontal: 12,
		paddingHorizontal: 12,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: COLORS.secondary,
		borderRadius: SIZES.large,
	},
	cartRow: {
		width: SIZES.width,
		paddingBottom: SIZES.small,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	cartButton: {
		width: SIZES.width * 0.7,
		marginLeft: 12,
		padding: SIZES.small / 2,
		backgroundColor: COLORS.black,
		borderRadius: SIZES.large,
	},
	cartTitle: {
		color: COLORS.lightWhite,
		marginLeft: SIZES.small,
		fontFamily: 'interSemiBold',
		fontSize: SIZES.medium,
	},
	addToCartButton: {
		width: 37,
		height: 37,
		margin: SIZES.small,
		marginRight: 16,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: COLORS.black,
		borderRadius: 50,
	},
});

export default styles;
