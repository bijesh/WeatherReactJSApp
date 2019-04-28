import React,{Component} from 'react';

class status extends Component
{
    constructor(props)
    {
        super();
        this.state= {icon:props.icon,
                    description:props.description,
                    info:props.info
                    }
    }

    render()
    {
        return(
                <div>
                    <div>{this.state.icon}</div>
                    <div>{this.state.description}</div>
                    <div>{this.state.info}</div>
                </div>
        );

    }
}

export default status