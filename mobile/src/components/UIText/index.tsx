import { Text } from 'react-native';
import { styled } from 'nativewind';

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'p' | 'sm';
  children?: any;
  color?: string;
  weight?: '700' | '600' | '500' | '400' | '300';
}

const UIText = styled(Text);

export default function ({ type = 'p', children, color, weight }: Props) {
  return (
    <Text className={`text-${type} text-${color} font-${weight}`}>
      {children}
    </Text>
  );
}

export { UIText };

