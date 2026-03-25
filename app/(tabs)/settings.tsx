import { AppText } from '@/shared/ui/AppText/AppText';
import { ScreenWrapper } from '@/shared/ui/ScreenWrapper/ScreenWrapper';

export default function ProfileScreen() {
  return (
    <ScreenWrapper isScrollable>
      <AppText variant="title" weight="bold" style={{ marginTop: 20 }}>
        Настройки
      </AppText>
    </ScreenWrapper>
  );
}
