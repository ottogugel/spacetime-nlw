import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

// View é tipo um div, o text é um p, h1, logo não tem semantica.
// CSS-in-JS = formato de objeto
// Pixel = DP

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-5xl font-bold text-gray-50">SpaceTime</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
