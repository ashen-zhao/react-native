/**
 * Created by zhuxuyang on 2017/9/20.
 */
'use strict';

import React from 'react';

import {
    PickerIOS,
    Platform,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
} from 'react-native';

module.exports = (Platform.OS === 'ios' ? TouchableWithoutFeedback : TouchableNativeFeedback)