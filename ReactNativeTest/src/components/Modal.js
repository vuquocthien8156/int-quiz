import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RNModalBox from 'react-native-modalbox';
import {IconSVG} from '../assets/iconSvg';

const Modal = props => {
  return (
    <RNModalBox
      {...props}
      backdropPressToClose={props.backdropPressToClose ?? true}
      coverScreen
      position={props.position ?? 'bottom'}>
      <View style={styles.containModal}>
        {props.renderHeader ? (
          props.renderHeader()
        ) : (
          <Text style={styles.titleModal}>{props.title}</Text>
        )}

        {props.children}
      </View>
      <TouchableOpacity onPress={props.onPressClose} style={styles.btnClose}>
        <IconSVG.Close width={18} height={18} color={'#000'} />
      </TouchableOpacity>
    </RNModalBox>
  );
};

const styles = StyleSheet.create({
  containModal: {
    flex: 1,
    padding: 15,
  },
  btnClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  titleModal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default React.memo(Modal);
