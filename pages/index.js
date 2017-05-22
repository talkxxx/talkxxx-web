import React from 'react';
import withApp from '../lib/withApp'
import Homepage from '../components/HomePage/container'

const Index = props => (<Homepage {...props} />)

export default withApp()(Homepage)