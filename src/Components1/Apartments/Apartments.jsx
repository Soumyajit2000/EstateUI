import React, { useState } from "react";
import apartments from "../../Data/ApartmentData";
import Apartment from "./Apartment";

export default function Apartments() {
	const [allApartments] = useState(apartments);

	return (
		<div className="main-apartment" id="apartments">
			
			<div className="apartments-container">
				<div className="apartment-list">
					{allApartments.map((oneApartment) => (
						<Apartment
							
							key={oneApartment.id}
							title={oneApartment.title}
							image={oneApartment.image}
							price={oneApartment.price}
							bedrooms={oneApartment.bedrooms}
							bathrooms={oneApartment.bathrooms}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
