import React, {Component}from 'react'

import SideBar from './SideBar'
import Status from './Status'
import DataList from './DataList'
import Export from './Export'

//import axios from 'axios';
import samples from './samples'


class Main extends Component {
    constructor() {
        super()

        this.state = {
            config: this.newConfig(),
            data: samples,
            status: "System Ready to Search",
        }
    }

    newConfig = () => {
        return { 
            asin: '',
            interval: 5,
        }
    }

    saveConfig = ( config ) => {
        this.setState({ config: config })
    }
    
    runProc = () => {
        // call once immediately
        this.queryASIN()
        
        // set up the timer
        const interval = this.state.config.interval * 1000
        const id = setInterval( this.queryASIN, interval )

        // Store the timer id.
        this.setState({ timerId: id })
    }

    pauseProc = () => {
        clearInterval( this.state.timerId )
    }

    queryASIN = async  ( ) => {
        try {
            await console.log( this.state.config.asin + ' - just sent async request!' )
            
            //await axios.call(),
            
            
        } catch(  error ) {
            const tmpStatus = error
            this.setState({ status: tmpStatus })
            console.log( error )
        }
    }
    
    render() {
        return (
            <div className="Main" style={main}>
                <SideBar config={this.state.config} saveConfig={this.saveConfig} run={this.runProc} />
                <div className='Pane' style={pane} >
                    <Status status={this.state.status} asin={this.state.config.asin} pause={this.pauseProc} />
                    <DataList data={this.state.data} />
            <       Export />
                </div>
            </div>
        )
    }
}
              
const main = {
    display: 'flex',
    height: '100vh',
    alignItems: 'stretch',
    color: '#0000ff',
}

const pane = {
    width: '90%',
    backgroundColor: '#ADD8E6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default Main