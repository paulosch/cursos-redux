import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class ListaPacotes extends Component {
    static propTypes = {
        pacotes: PropTypes.array.isRequired
    }

    static defaultProps = {
        //pacotes: [1,1,1]
    }

    render() {
        const { pacotes } = this.props
        return(
            <div>
                <pre>{JSON.stringify(pacotes, undefined, 2)}</pre>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => ({
    pacotes: state.pacote
})

const mapDispatchToProps = (state, ownProps) => {
    return bindActionCreators({}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListaPacotes)