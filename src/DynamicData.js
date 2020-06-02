import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { db } from './FirebaseConfig'
import { FlexibleWidthXYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';

class DynamicData extends Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = { //state is by default an object
            data: []
        }
    }
    componentDidMount() {
        db.ref("data").on("value", (snapshot) => {
            let values = Object.values(snapshot.val());
            let linedata = values.map((element, index) => { return { x: index, y: element.generation } })
            this.setState({ data: values, linedata })
        })
    }

    renderTableData() {
        return this.state.data.map((row, index) => {
            const { generation, radiation, temperature, humidity, latitud, longitud, date } = row //destructuring
            return (
                <tr key={index.toString()}>
                    <td>{generation}</td>
                    <td>{radiation}</td>
                    <td>{temperature}</td>
                    <td>{humidity}</td>
                    <td>{latitud}</td>
                    <td>{longitud}</td>
                    <td>{date}</td>
                </tr>
            )
        })
    }

    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
        return (
            <div>
                <br></br>
                <div style={{ overflow: 'scroll', height: '400px' }}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>GENERATION</th>
                                <th>RADIATION</th>
                                <th>TEMPERATURE</th>
                                <th>HUMIDITY</th>
                                <th>LATITUD</th>
                                <th>LONGITUD</th>
                                <th>DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableData()}
                        </tbody>
                    </Table>
                </div>
                <br></br><br></br>
                {<FlexibleWidthXYPlot height={300}>
                    <VerticalGridLines />
                    <HorizontalGridLines />
                    <XAxis title='Samples' position={'middle'} />
                    <YAxis title='Generation' position={'middle'} height={100} />
                    <VerticalBarSeries data={this.state.linedata} />
                </FlexibleWidthXYPlot>}
            </div>
        )
    }
}

export default DynamicData //exporting a component make it reusable and this is the beauty of react