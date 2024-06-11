import React from "react";

export default function LanguageInfo({
	labelTitle,
	languageInfo,
	isMoreThanOneLanguage,
}) {
	const language = (code) => {
		if (code ==="en") return "Inglés";
		if (code ==="es") return "Español";
		if (code ==="it") return "Italiano";
		if (code ==="fr") return "Francés";
        if (code ==="ro") return "Rumano";
		if (code ==="ja") return "Japonés";
		if (code ==="hi") return "Hindi";
		if (code ==="sv") return "Sueco";
		if (code ==="de") return "Alemán";
		if (code ==="ko") return "Coreano";
		if (code ==="fi") return "Finlandia";
		if (code ==="ru") return "Ruso";
		if (code ==="zh") return "Chino";
		return code;
	};

	return (
		<>
			<dt>
				<em>
					<strong>{labelTitle}:</strong>
				</em>
			</dt>
			{isMoreThanOneLanguage 
            ? 
				<dd className="d-flex flex-column">
					{languageInfo.length > 0
						? languageInfo.map((e, i) => {
							return <span key={i}>{language(e.iso_639_1)}</span>;
						})
						: 'No disponible'
					}
				</dd>
			: 
				<dd>{languageInfo ? language(languageInfo) :'No disponible'}</dd>
			}
		</>
	);
}
