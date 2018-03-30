import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity  } from 'react-native';

class VisitCard extends Component {
    onRowPress() {
        Actions.scalesList({ visit: this.props.visit });
    }

    render() {
        return (
            <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                <View>
                    <Text>{this.props.visit.Name}</Text><Text>Incompete</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default VisitCard;

