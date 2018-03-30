import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScaleCard from './ScaleCard';

class ScalesList extends Component {
    renderVisitsCards() {
        return this.props.visit.Scales.map(scale => <ScaleCard key={scale.Name} scale={scale}/>);
    }
    
    render() {
        return (
            <View>
               {this.renderVisitsCards()}
            </View>
        );
    }
}

export default (ScalesList);
