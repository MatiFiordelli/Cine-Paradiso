// App.jsx
import React, { Suspense, useState } from "react";
import Router from "./components/Router";
import OverlaySpinner from "./components/Resources/OverlaySpinner";
import ComponentLayout from "./components/ComponentLayout";
import { PreferencesCtx } from "./contexts";

export default function App() {
	const [preferences, setPreferences] = useState({date: null, hour: null, seats: []})

	return (
		<PreferencesCtx.Provider value={{preferences, setPreferences}}>
			<Suspense fallback={<OverlaySpinner />}>
				<ComponentLayout>
					<Router />
				</ComponentLayout>
			</Suspense>
		</PreferencesCtx.Provider>
	);
}
