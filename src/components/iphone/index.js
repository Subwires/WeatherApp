// import preact
import { h, render, Component } from 'preact';

// import stylesheets for iphone, topnav
import style from './style';
import style_topnav from '../topnav/style';

// import required application components
import Routeforecast from '../routeforecast/';
import Relocate from '../topnav/relocate_index';
import Search from '../topnav/search_index';

// import helper functions for API response parsing
import {FetchCurrentWeather, ParseConditions, ParseWind} from '../../helpers.js';

export default class Iphone extends Component {

    constructor(props){
      super(props);
      let me = self;
      this.ti.bind(this);
      // this.convertTime.bind(this);
      setInterval(this.ti, 1000)
    }

    ti = () => {
      let cTime = (time) => {
        time = time + "";
        return time.length < 2 ? "0" + time : time;
      }
      let d = new Date();
      let hour = cTime(d.getHours());
      let minutes = cTime(d.getMinutes());
      let seconds = cTime(d.getSeconds());
      this.setState({
        time: hour + ":" + minutes + ":" + seconds
      })
    }

    componentWillMount() {
    	this.setState({
    		lon: this.props.lon,
    		lat: this.props.lat,
        time: "00:00:00"
    	})
    	this.parseResponse(FetchCurrentWeather(this.state.lat, this.state.lon));
    	console.log("Call Made - Current Weather")


    }



    componentWillReceiveProps(nextProps) {
    	if (nextProps.lon != this.props.lon) {
	    	this.setState({
	        	lon: nextProps.lon,
	        	lat: nextProps.lat
	        })
    	this.parseResponse(FetchCurrentWeather(this.state.lat, this.state.lon));
    	}
    }

	// parse relevant fields from Open Weather Map API resposne, for later rendering
	parseResponse = (parsed_json) => {
		var location = parsed_json['name'];
		var temp_c = Math.round((parsed_json['main']['temp']-273.15) * 10) / 10;
		var wind_speed = Math.round(parsed_json['wind']['speed'] * 10) / 10;
		var wind_direction = parsed_json['wind']['deg'];
		var conditions = parsed_json['weather'][0]['id'];
		var sunrise = parsed_json['sys']['sunrise'];
		var sunset = parsed_json['sys']['sunset'];
		var time = parsed_json['dt'];
		if (sunrise < time && time < sunset) {
			var sunstate = "d";
		} else {
			var sunstate = "n";
		}

		// call two additional helper functions to parse numeric values for wind direction and conditions into English
		var cond_icon = ParseConditions(conditions, sunstate);
		conditions = cond_icon[0];
		this.state.icon = cond_icon[1];
		wind_direction = ParseWind(wind_direction);

		// set states for fields so they can be rendered later on
		this.setState({
			locate: location,
			temp: temp_c + "°",
			cond : conditions,
			winds : wind_speed + "m/s",
			windd: wind_direction
		});
	}

	// the main render method for the iphone component
	render() {

		return (
			<div class ={ style.container }>

				{/* Current weather at specified location */ }
				<div class={ style.homepage }>
					<div class={ style.current }>
						<div class={ style.weatherlocation }>
                <p> {this.state.time} </p>
                <p>{this.state.locate} </p>
            </div>
						<div class={ style.weatheriandc }>
							<div class={ style.weathericon }><i class= {this.state.icon}></i></div><br />
							<div class={ style.weatherconditions }>{this.state.cond}</div>
						</div>

						{/* Display temperature, wind speed, wind direction*/}
						<div class={ style.weathertext }>
							<br /><div class={ style.subicon }><i class="fa fa-thermometer"></i></div>{this.state.temp}
							<br /><div class={ style.subicon }><i class ="wi wi-strong-wind"></i></div>{this.state.winds}
							<br /><div class={ style.subicon }><i class="fa fa-compass"></i></div>{this.state.windd}
						</div>
					</div>

					{/* Elements containing routes and its weather information */}
					<Routeforecast title="Route 1:" lon1="-0.1" lat1="51.463" lon2="-0.037" lat2="51.520" name1="Home" name2="Starbucks" time1="09:00:00" time2="09:00:00" timed1="11am" timed2="12pm" num="1"/>
					<Routeforecast title="Route 2:" lon1= "-0.037" lat1="51.520" lon2="-0.219" lat2="51.516" name1="Starbucks" name2="Victoria Park" time1="15:00:00" time2="18:00:00" timed1="12pm" timed2="3pm" num="2"/>
					<Routeforecast title="Route 3:" lon1= "-0.219" lat1="51.516" lon2="-0.099" lat2="51.463" name1="Victoria Park" name2="Home" time1="21:00:00" time2="21:00:00" timed1="5pm" timed2="6pm" num="3"/>
				</div>
			</div>
		)
	}
}
