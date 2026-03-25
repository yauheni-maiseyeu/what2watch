import { ColorName, COLORS } from '@/shared/config/theme/colors';
import { StyleSheet, Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
  variant?: 'title' | 'text' | 'subtext';
  weight?: 'normal' | 'bold';
  color?: ColorName | (string & {});
  align?: 'left' | 'center' | 'right';
}

export const AppText = ({
  variant = 'text',
  weight = 'normal',
  color = 'white',
  align = 'left',
  style,
  children,
  ...rest
}: AppTextProps) => {
  const textColor = COLORS[color as ColorName] || color;
  return (
    <Text
      style={[
        styles.base,
        styles[variant],
        styles[weight],
        { color: textColor, textAlign: align },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'System',
  },

  title: { fontSize: 24, lineHeight: 32 },
  text: { fontSize: 18, lineHeight: 24 },
  subtext: { fontSize: 14, lineHeight: 20 },

  normal: { fontWeight: '400' },
  bold: { fontWeight: '700' },
});
