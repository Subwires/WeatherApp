// import preact
import { h, render, Component } from 'preact';

// import stylesheets for iphone, button
import style from './style.less';
import style_topnav from '../topnav/style';
import style_iphone from '../iphone/style';

export default class Route extends Component {

    // the main render method for the routes component
	render() {

		return (
    		<div class={ style.container }>


					{/* Each grid element represents settings for a route, inputted by the user */}
					<div class={ style_iphone.homepage }>
						<div class={ style.plusbutton }>
							<button-left><i class="fa fa-plus-circle" id="addRoute"> <text-add>Create Route</text-add></i></button-left><br />
						</div>
    				<div class={ style.grid }>
    					<div class= {style.gridchild1 }><table class={ style.table }><tr><td><div class={ style.starchecked }>
								<span class="fa fa-star"></span></div></td></tr><tr><td>Route 1</td><td>Start: Home</td></tr><tr><td>11 am</td><td>To: Starbucks</td></tr></table></div>
    					<div class= {style.gridchild2 }><button-right><i class="fa fa-edit" id="editroute"></i></button-right></div>
    				</div>

						<div class={ style.grid }>
							<div class= {style.gridchild1 }><table class={ style.table }><tr><td><div class={ style.starchecked }>
								<span class="fa fa-star"></span></div></td></tr><tr><td>Route 2</td><td>Start: Starbucks</td></tr><tr><td> 12pm</td><td>To: Victoria Park</td></tr></table></div>
							<div class= {style.gridchild2 }> <button-right><i class="fa fa-edit"></i></button-right></div>
						</div>

						<div class={ style.grid }>
							<div class= {style.gridchild1 }><table class={ style.table }><tr><td><div class={ style.starchecked }>
								<span class="fa fa-star"></span></div></td></tr><tr><td>Route 3</td><td>Start: Victoria Park</td></tr><tr><td>5pm</td><td>To: Home</td></tr></table></div>
							<div class= {style.gridchild2 }><button-right><i class="fa fa-edit" id="editroute"></i></button-right></div>
						</div>

    				<div class={ style.grid }>
    					<div class= {style.gridchild1 }><table class={ style.table }><tr><td><div class={ style.starunchecked }>
                        <span class="fa fa-star"></span></div></td></tr><tr><td>Route 4</td><td>Start: Home</td></tr><tr><td>1pm</td><td>To: Queen Mary</td></tr></table></div>
    					<div class= {style.gridchild2 }> <button-right><i class="fa fa-edit"></i></button-right></div>
                    </div>

                    <div class={ style.grid }>
    					<div class= {style.gridchild1 }><table class={ style.table }><tr><td><div class={ style.starunchecked }>
                        <span class="fa fa-star"></span></div></td></tr><tr><td>Route 5</td><td>Start: Home</td></tr><tr><td>5 pm</td><td>To: Pizza Room</td></tr></table></div>
    					<div class= {style.gridchild2 }> <button-right><i class="fa fa-edit"></i></button-right></div>
                    </div>

                    <div class={ style.grid }>
    					<div class= {style.gridchild1 }><table class={ style.table }><tr><td><div class={ style.starunchecked }>
                        <span class="fa fa-star"></span></div></td></tr><tr><td>Route 6</td><td>Start: Home</td></tr><tr><td>4pm</td><td>To: Go-Karting</td></tr></table></div>
    					<div class= {style.gridchild2 }> <button-right><i class="fa fa-edit"></i></button-right></div>
                    </div>
                </div>
			</div>
		);
	}
}
