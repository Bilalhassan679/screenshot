import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from './style';
const Profile = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        style={{height: hp('100'), width: wp('100')}}
        source={require('../../images/SeaTow-(User-Flow).png')}
      >
        <View style={styles.welComeStyle}>
          <Text
            style={{
              fontSize: hp('3.5'),
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}
          >
            welcome to Screenshot Application
          </Text>
        </View>
        <View style={styles.getStartedView}>
          <TouchableOpacity
            style={styles.getStartTextView}
            onPress={() => navigation.navigate('DrawerComp')}
          >
            <Text
              style={{
                fontSize: hp('2.5'),
                fontWeight: '600',
                color: 'black',
                textAlign: 'center',
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;
