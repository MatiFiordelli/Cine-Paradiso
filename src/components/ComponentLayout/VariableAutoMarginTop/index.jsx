import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import pathroutes from '../../../helpers/pathroutes.js'

export default function VariableAutoMarginTop({children}) {
    const [margin, setMargin] = useState('0');
	const location = useLocation();
	const isHomePageOrDetailsPage =
		location.pathname === `${pathroutes.home}` ||
		location.pathname.includes(`${pathroutes.details}`);

	useEffect(() => {
		isHomePageOrDetailsPage
			? setMargin('0')
			: setMargin('100px');

		window.scrollTo(0,0)
	}, [location]);

    return (
        <div style={{marginTop: `${margin}`}}>
            {children}
        </div>
    )
}
