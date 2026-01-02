import React, { useState } from "react";
import '../../styles/home.css'

const Home = () => {
	const [sectedColor, setSectedColor ] = useState("redLight")
	return (
		<div className="trafficLight">
		<div className="cable"></div>
		<div className="box">
			<div onClick={()=> setSectedColor("redLight")} className={"light redLight"+(sectedColor === "redLight" ? " glow" : "")}></div>
			<div onClick={()=> setSectedColor("yellowLight")}className={"light yellowLight"+(sectedColor === "yellowLight" ? " glow" : "")}></div>
			<div onClick={()=> setSectedColor("greenLight")}className={"light greenLight"+(sectedColor === "greenLight" ? " glow" : "")}></div>
		</div>
		</div>
	);
};

export default Home;