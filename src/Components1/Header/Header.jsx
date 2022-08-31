import React from "react";
import landingImage from "../../img/home_apart.jpeg";

export default function Header() {
	return ( 
		<>
			<div className="header" id="header">
				<div className="landing-text">
					<div className="cta">
						<p>Find Your New Modern Apartment</p>
					</div>
				</div>
				<div className="landing-image">
					<img src={landingImage} alt="" />
				</div>
			</div>
		</>
	);
}
