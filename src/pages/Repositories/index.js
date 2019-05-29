import React from 'react';

import { View } from 'react-native';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

const Repositories = () => (
  <View>
    <Header title="Repositórios" />
  </View>
);

const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

Repositories.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repositories;
