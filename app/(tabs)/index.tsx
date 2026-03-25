import { AppText } from '@/shared/ui/AppText/AppText';
import { ScreenWrapper } from '@/shared/ui/ScreenWrapper/ScreenWrapper';

export default function HomeScreen() {
  return (
    <ScreenWrapper isScrollable>
      <AppText variant="title" weight="bold" style={{ marginTop: 20 }}>
        Случайный фильм
      </AppText>
    </ScreenWrapper>
  );
}
