import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity  } from 'react-native';

class VisitCard extends Component {
    onRowPress() {
        Actions.scaleQuestion({ scale: this.props.scale });
    }

    render() {
        console.log(this.props.scale);
        return (
            <TouchableOpacity onPress={this.onRowPress.bind(this)}>
                <View>
                    <Text>{this.props.scale.Name}</Text><Text>Incompete</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default VisitCard;
