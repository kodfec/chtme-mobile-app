import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, Modal} from 'react-native';
import IconMenu from 'react-native-vector-icons/Entypo';
import styles from '../CSS/HeaderCss';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <View style={styles.header}>
      <Image source={require('../Images/icon.png')} style={styles.logo} />
      <Text style={styles.chtme}>ChtaMe</Text>
      <TouchableOpacity
        style={{start: 220}}
        onPress={() => setIsMenuVisible(true)}>
        <IconMenu name="dots-three-vertical" size={24} />
      </TouchableOpacity>

      <Modal animationType="slide" transparent visible={isMenuVisible}>
        <TouchableOpacity
          style={styles.modalWrapper}
          onPress={() => setIsMenuVisible(false)}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Header;
