import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class VisitsList extends Component {
    renderVisits() {
        return this.props.Visits[0].Visits.map(visit => <Text key={visit.Name}>{visit.Name}</Text>);
    }

    render() {
        console.log(this.props.Visits[0].Visits);
        return (
            <View>
                {this.renderVisits()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { Visits: state.Visits }
}

export default connect(mapStateToProps)(VisitsList);
