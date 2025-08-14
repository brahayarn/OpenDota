import React from 'react';
import { ScrollView, ScrollViewProps, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');

type Props = ScrollViewProps & {
  children: React.ReactNode;
  bg?: string;
};

export const Container = ({ children, bg = 'bg-white', contentContainerStyle, ...rest }: Props) => {
  return (
    <SafeAreaView className={`flex-1 ${bg}`} edges={['top', 'bottom']}>
      <ScrollView
        {...rest}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    minHeight: height,
  },
});
