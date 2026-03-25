import { COLORS } from '@/shared/config/theme/colors';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { AppText } from '../AppText/AppText';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  type?: 'primary' | 'outline' | 'clear';
  isLoading?: boolean;
}

export const AppButton = ({
  title,
  type = 'primary',
  isLoading = false,
  style,
  disabled,
  ...rest
}: AppButtonProps) => {
  const isPrimary = type === 'primary';
  const isOutline = type === 'outline';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && styles.primary,
        isOutline && styles.outline,
        (disabled || isLoading) && styles.disabled,
        style,
      ]}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={isPrimary ? COLORS.white : COLORS.blueMarguerite} />
      ) : (
        <AppText weight="bold" color={isPrimary ? 'white' : 'blueMarguerite'}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 8,
  },
  primary: {
    backgroundColor: COLORS.blueMarguerite,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.blueMarguerite,
  },
  disabled: {
    opacity: 0.5,
  },
});
