import React, { useCallback, useLayoutEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		// Poppins Font ->
		poppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
		poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
		poppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
		poppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
		poppinsExtraBold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
		poppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
		// Inter Font
		interLight: require('./assets/fonts/Inter-Light.ttf'),
		interRegular: require('./assets/fonts/Inter-Regular.ttf'),
		interMedium: require('./assets/fonts/Inter-Medium.ttf'),
		interBold: require('./assets/fonts/Inter-Bold.ttf'),
		interExtraBold: require('./assets/fonts/Inter-ExtraBold.ttf'),
		interSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	useLayoutEffect(() => {
		onLayoutRootView();
	}, []);

	if (!fontsLoaded) return null;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Bottom Navigation"
					component={BottomTabNavigation}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
				<Stack.Screen
					name="ProductDetails"
					component={ProductDetails}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
