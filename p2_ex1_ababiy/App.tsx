import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

type FrogProps = {
  name: string;
  color: string;
};

const Frog = (props: FrogProps) => {
  return (
    <View style={[styles.frog, { backgroundColor: props.color }]}>
      <Text>{props.name}</Text>
    </View>
  );
};

const Button = (props: { buttonNumber: number; pressHandler: Function; }) => {
  return (
    <Pressable
      onPress={() => {
        props.pressHandler(props.buttonNumber);
      }}
      style={styles.Button}
    >
      {props.buttonNumber.toString()}
    </Pressable>
  );
};

const Lake = () => {
  const [exNumber, setExNumber] = useState(0);
  let lakeStyle: any;

  switch (exNumber) {
    case 0: lakeStyle = styles.lake; break;
    case 1: lakeStyle = StyleSheet.compose(styles.lake, styles.ex01); break;
    case 2: lakeStyle = StyleSheet.compose(styles.lake, styles.ex02); break;
    case 3: lakeStyle = StyleSheet.compose(styles.lake, styles.ex03); break;
    case 4: lakeStyle = StyleSheet.compose(styles.lake, styles.ex04); break;
    case 5: lakeStyle = StyleSheet.compose(styles.lake, styles.ex05); break;
    case 6: lakeStyle = StyleSheet.compose(styles.lake, styles.ex06); break;
    case 7: lakeStyle = StyleSheet.compose(styles.lake, styles.ex07); break;
    case 8: lakeStyle = StyleSheet.compose(styles.lake, styles.ex08); break;
    case 9: lakeStyle = StyleSheet.compose(styles.lake, styles.ex09); break;
    case 10: lakeStyle = StyleSheet.compose(styles.lake, styles.ex10); break;
    case 11: lakeStyle = StyleSheet.compose(styles.lake, styles.ex11); break;
    case 12: lakeStyle = StyleSheet.compose(styles.lake, styles.ex12); break;
    case 13: lakeStyle = StyleSheet.compose(styles.lake, styles.ex13); break;
    case 14: lakeStyle = StyleSheet.compose(styles.lake, styles.ex14); break;
    case 15: lakeStyle = StyleSheet.compose(styles.lake, styles.ex15); break;
    case 16: lakeStyle = StyleSheet.compose(styles.lake, styles.ex16); break;
    case 17: lakeStyle = StyleSheet.compose(styles.lake, styles.ex17); break;
    case 18: lakeStyle = StyleSheet.compose(styles.lake, styles.ex18); break;
    case 19: lakeStyle = StyleSheet.compose(styles.lake, styles.ex19); break;
  }

  return (
    <View style={styles.main}>
      <View style={lakeStyle}>
        <Frog name="1" color="green" />
        <Frog name="2" color="yellow" />
        <Frog name="3" color="red" />
      </View>
      <View style={styles.buttons}>
        {[...Array(19)].map((_, index) => (
          <Button key={index + 1} buttonNumber={index + 1} pressHandler={setExNumber} />
        ))}
      </View>
      <Text>
        Текущая задача = {exNumber}
      </Text>
    </View>
  );
};

export default Lake;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  lake: {
    flex: 1,
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  frog: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: 80,
    height: 80,
    backgroundColor: '#df2d2d',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ex01: { justifyContent: 'flex-end' },
  ex02: { justifyContent: 'center' },
  ex03: { justifyContent: 'space-around' },
  ex04: { justifyContent: 'space-between' },
  ex05: { alignItems: 'flex-end' },
  ex06: { justifyContent: 'center', alignItems: 'center' },
  ex07: { justifyContent: 'space-around', alignItems: 'flex-end' },
  ex08: { flexDirection: 'row-reverse' },
  ex09: { flexDirection: 'column' },
  ex10: { flexDirection: 'row-reverse', justifyContent: 'flex-end' },
  ex11: { flexDirection:'column', justifyContent: 'flex-end' },
  ex12: {flexDirection: 'column-reverse', justifyContent: 'space-between' },
  ex13: {flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'flex-end' },
  ex14: { flexWrap: 'wrap' },
  ex15: {  flexWrap:'wrap', flexDirection: 'column' },
  ex16: { alignContent: 'flex-start' },
  ex17: {  alignContent: 'flex-end' },
  ex18: {  flexDirection: 'column-reverse', alignContent: 'center' },
  ex19: { flexDirection: 'column-reverse',flexWrap: 'wrap-reverse', justifyContent: 'center', alignContent: 'space-between' },
});
