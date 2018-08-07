import React, {Component} from 'react';
import { getDetail } from '../service'

class Detail extends Component {
    state = {
        content: ''
    }
    componentDidMount() {
        getDetail(this.props.match.params.id).then((result) => {
            this.setState({
                content: result.data.content
            })
        })
    }
    render() {
        let { goBack } = this.props.history;
        return(
            <div>
                <button onClick={goBack}>后退</button>
                <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
            </div>
        ) 
    }
}

export default Detail;