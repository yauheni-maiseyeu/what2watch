// import { COLORS } from '@/shared/config/theme/colors';
// import { LinearGradient } from 'expo-linear-gradient';
// import { ScrollView, StyleSheet, View, ViewProps } from 'react-native';
// import { Edge, SafeAreaView } from 'react-native-safe-area-context';

// interface ScreenWrapperProps extends ViewProps {
//   isScrollable?: boolean;
//   edges?: Edge[];
// }

// export const ScreenWrapper = ({
//   children,
//   isScrollable = false,
//   edges = ['top'],
//   style,
//   ...rest
// }: ScreenWrapperProps) => {
//   const gradientColors = [
//     COLORS.bgGradientStart,
//     COLORS.bgGradientMiddle,
//     COLORS.bgGradientEnd,
//   ] as const;

//   const content = isScrollable ? (
//     <ScrollView
//       contentContainerStyle={[styles.scrollContent, style]}
//       showsVerticalScrollIndicator={false}
//     >
//       {children}
//     </ScrollView>
//   ) : (
//     <View style={[styles.content, style]} {...rest}>
//       {children}
//     </View>
//   );

//   return (
//     <LinearGradient
//       colors={gradientColors}
//       start={{ x: 0.5, y: 0 }}
//       end={{ x: 0.5, y: 1 }}
//       style={styles.container}
//     >
//       <SafeAreaView style={styles.container} edges={edges}>
//         {content}
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   content: { flex: 1, paddingHorizontal: 16 },
//   scrollContent: { flexGrow: 1, paddingHorizontal: 16, paddingBottom: 24 },
// });

import { COLORS } from '@/shared/config/theme/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, View, ViewProps } from 'react-native';
// Импортируем хук вместо компонента SafeAreaView
import { Edge, useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenWrapperProps extends ViewProps {
  isScrollable?: boolean;
  edges?: Edge[];
}

export const ScreenWrapper = ({
  children,
  isScrollable = false,
  edges = ['top'],
  style,
  ...rest
}: ScreenWrapperProps) => {
  // Получаем безопасные отступы текущего устройства
  const insets = useSafeAreaInsets();

  const gradientColors = [
    COLORS.bgGradientStart,
    COLORS.bgGradientMiddle,
    COLORS.bgGradientEnd,
  ] as const;

  const content = isScrollable ? (
    <ScrollView
      contentContainerStyle={[styles.scrollContent, style]}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, style]} {...rest}>
      {children}
    </View>
  );

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={[
        styles.container,
        // Применяем отступы вручную только там, где мы их запросили в edges
        {
          paddingTop: edges.includes('top') ? insets.top : 0,
          paddingBottom: edges.includes('bottom') ? insets.bottom : 0,
          paddingLeft: edges.includes('left') ? insets.left : 0,
          paddingRight: edges.includes('right') ? insets.right : 0,
        },
      ]}
    >
      {/* Мы больше не используем <SafeAreaView>, только отступы на градиенте */}
      {content}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, paddingHorizontal: 16 },
  scrollContent: { flexGrow: 1, paddingHorizontal: 16, paddingBottom: 24 },
});
