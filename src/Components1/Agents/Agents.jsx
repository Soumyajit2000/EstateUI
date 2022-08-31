import React, { useState } from "react";
import Agent from "./Agent";
import agents from "../../Data/AgentsData";

export default function Agents() {
	const [allAgents] = useState(agents);

	return (
		<div className="agents" id="agents">
			<div className="agents-intro">
				<p className="agents-heading">Meet Our Executive</p>
				<p className="agents-text">
					
				</p>
			</div>
			<div className="agents-container">
				{allAgents.map((agent) => (
					<Agent
						key={agent.id}
						name={agent.name}
						title={agent.title}
						image={agent.image}
					/>
				))}
			</div>
		</div>
	);
}
