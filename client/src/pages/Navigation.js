// Navigation Tab
// AcPortfolio
// Customer
// Report
// SingleAc

import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row">
				<li className={currentTab === "AcPortfolio" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("AcPortfolio")}>AcPortfolio</span>
				</li>
				<li className={currentTab === "Customer" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("Customer")}>Customer</span>
				</li>
				<li className={currentTab === "Report" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("Report")}>Report</span>
				</li>
				<li className={currentTab === "SingleAc" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("SingleAc")}>SingleAc</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;