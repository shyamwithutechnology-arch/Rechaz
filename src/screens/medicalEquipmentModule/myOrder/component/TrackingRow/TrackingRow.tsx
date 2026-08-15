import React from 'react';
import { View, Text } from 'react-native';
import AnimatedProgress from '../AnimatedProgress';
import { useAppTheme } from '../../../../../hooks/useAppTheme';
import { createStyles } from './styles';

const TrackingRow = ({ item, index, last }: any) => {
  const theme = useAppTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.trackingMainRow}>
      <View style={{ alignItems: 'center' }}>
        <View
          style={[
            styles.trackingCircle,
            {
              backgroundColor: item.completed
                ? theme.tokens.colors.primaryGradientEnd
                : '#E5E5E5',
            },
          ]}
        />

        {!last && item.completed && <AnimatedProgress delay={index * 250} />}

        {!last && !item.completed && <View style={styles.completeBox} />}
      </View>

      <View style={styles.titleBox}>
        <Text
          style={[
            styles.orderStatusText,
            { color: item.completed ? '#000' : '#868889' },
          ]}
        >
          {item.title}
        </Text>

        <Text
          style={[
            styles.orderDateText,
            { color: item.completed ? '#868889' : '#AFAFAF' },
          ]}
        >
          {item.date}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(TrackingRow);
