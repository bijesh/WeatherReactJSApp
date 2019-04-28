import React, { Component } from 'react';
import Status from './status';
class wather extends Component
{
    constructor()
    {
        super();
        this.state={
            weatherInfo:[]

        };
    }
    componentDidMount()
    {

            fetch('http://api.openweathermap.org/data/2.5/group?id=2643743,2988507,745044,6539761,3117735&units=metric&appid=7c0fd0373bae36358d64d9daa0b8cdcb')
            .then(results=>results.json())
            .then(data=>{
                console.log(data);
                this.setState({weatherInfo:data.list})
                console.log(this.state.weatherInfo);
            }).catch(function(error)
            {
                console.log(error);
            });
        
    }
    
    render(){
        return(
            <div>
                {
                     this.state.weatherInfo.map((weather)=>
                        <div className="weather" >
                            <div className="city">
                                {weather.name}
                            </div>
                            <div className="description">
                            <Status  icon="Desc" description="Description"  info={weather.weather[0].description} />
                            </div>
                            <div className="temperature">
                            <Status  icon="weather" description="Temperature"  info={weather.main.temp} />
                            </div>
                            <div className="sunrise">
                            <Status  icon="sunrise" description="Sunrise"  info={weather.sys.sunrise} />
                            </div>
                            <div className="sunset">
                            <Status  icon="sunset" description="Sunset"  info={weather.sys.sunset} />
                            </div>
                        </div>
                        )
                }
            </div>
        );
    }
}

export default wather