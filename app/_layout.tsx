import { Stack } from 'expo-router';

export default function RootLayout() {
	return (
		// <Stack>
		// 	<Stack.Screen name='(home)' />
		// </Stack>
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen name='index' />
			<Stack.Screen name='details' />
			<Stack.Screen name='(home)' />
		</Stack>
	);
}
