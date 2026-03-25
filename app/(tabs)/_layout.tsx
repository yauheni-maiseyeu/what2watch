import { COLORS } from '@/shared/config/theme/colors';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.blueMarguerite,
        tabBarActiveBackgroundColor: 'rgba(255, 255, 255, 0.05)',
        tabBarInactiveTintColor: COLORS.white,
        tabBarStyle: styles.tabBar,

        tabBarItemStyle: {
          borderRadius: 24,
          margin: 6,
          overflow: 'hidden',
        },

        tabBarBackground: () => (
          <BlurView tint="dark" intensity={60} style={StyleSheet.absoluteFill} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Главная',
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="genres"
        options={{
          title: 'Жанры',
          tabBarIcon: ({ color, size }) => <Feather name="grid" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Избранное',
          tabBarIcon: ({ color, size }) => <Feather name="heart" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Настройки',
          tabBarIcon: ({ color, size }) => <Feather name="settings" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 34,

    marginHorizontal: 16,

    height: 64,
    borderRadius: 32,
    borderTopWidth: 0,
    paddingBottom: 0,

    backgroundColor: 'rgba(28, 34, 54, 0.8)',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,

    overflow: 'hidden',
  },
});
