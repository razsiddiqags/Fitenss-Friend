import { Stack } from 'expo-router';

export default function HomeLayout() {
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#ececec',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen name='/home/index' />
			<Stack.Screen name='/details' />
		</Stack>
	);
}
