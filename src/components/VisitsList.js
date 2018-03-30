import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import VisitCard from './VisitCard';

class VisitsList extends Component {
    renderVisitsCards() {
        return this.props.visits.map(visit => <VisitCard key={visit.Name} visit={visit} /> )
    }
    
    render() {
        return (
            <View>
                {this.renderVisitsCards()}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return { visits: state.Visits[0].Visits }
}

export default connect(mapStateToProps)(VisitsList);
