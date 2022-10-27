import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedView: {
    alignItems: 'center',
    // marginBottom: heightPercentageToDP('-3'),
    flex: 1,
    justifyContent: 'flex-end',

    marginBottom: heightPercentageToDP('15'),
  },
  getStartTextView: {
    backgroundColor: 'white',
    height: heightPercentageToDP('5'),
    // justifyContent: 'center',

    borderRadius: 5,
    width: widthPercentageToDP('50'),
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  welComeStyle: {
    marginTop: heightPercentageToDP('40'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
