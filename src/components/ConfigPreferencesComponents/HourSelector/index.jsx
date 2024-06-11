import React, { useContext, memo, useEffect, useState } from "react";
import "./index.css";
import { ConfigPreferencesCtx } from "../../../contexts";

const HourSelector = () => {
	const { 
		fetchedHours, 
		setHourSelection, 
		dateSelection, 
		} = useContext(ConfigPreferencesCtx);

	const resetHoursStyles = () => {
		const el = document.querySelectorAll('.hours-group__title--hour')
		Array.from(el).forEach((e)=>{
			e.style.filter='none';
			e.style.pointerEvents='auto';
			e.style.boxShadow='none';
			e.style.border='none';
		})
	}

	const setActiveElement = (ev) => {
		const el = document.querySelectorAll('.hours-group__title--hour')
		Array.from(el).forEach((e)=>{
			e.style.boxShadow='none';
			e.style.border='none';
		})
		
		ev.currentTarget.style.boxShadow='0px 0px 7px 1px #999';
		ev.currentTarget.style.border='1px solid #dc1e1e';
	}

	const handleClick = (e, ev) => {
		setHourSelection(e)
		setActiveElement(ev)
	}

	useEffect(()=>{
		resetHoursStyles()

		if(dateSelection){
			const date = new Date().toLocaleDateString().split('/')
			const currentDay = date[0]
			const currentMonth = date[1]
			const time = new Date().toLocaleTimeString('en-US', {hour12: false}).split(':')
			const currentHour = time[0]
			const currentMinute = time[1]
			const isToday_Condition = dateSelection.monthNumber===currentMonth && dateSelection.dayNumber===currentDay
			
			if(isToday_Condition){
				const el = document.querySelectorAll('.hours-group__title--hour')
				Array.from(el).forEach((e)=>{
					const innerTextHour = Number(e.innerHTML.split(':')[0])
					const innerTextMinute = Number(e.innerHTML.split(':')[1])

					const itsSameHour = innerTextHour===Number(currentHour)
					const itsLaterInMinutes = innerTextMinute<Number(currentMinute)
					const sameHourLaterInMinutes = itsSameHour && itsLaterInMinutes
					const itsLateinHour = innerTextHour<Number(currentHour)

					if(itsLateinHour || sameHourLaterInMinutes){
						e.style.filter='grayscale(1)'
						e.style.pointerEvents = 'none'
						e.style.boxShadow='none';
						e.style.border='none';
					}
				})
			}
		}
	},[dateSelection])

	return (
		<>
		{dateSelection && 
		<section className="hours-group">
			<div>
				<p className="hours-group__title">Horarios de la Tarde</p>
				<div>
					{fetchedHours &&
						fetchedHours[0].afternoon.map((e, i) => (
							<span
								key={i}
								className="hours-group__title--hour"
								onClick={(ev) => handleClick(e, ev)}
							>
								{e}
							</span>
						))}
				</div>
			</div>
			<div>
				<p className="hours-group__title">Horarios de la Noche</p>
				<div>
					{fetchedHours &&
						fetchedHours[0].evening.map((e, i) => (
							<span
								key={i}
								className="hours-group__title--hour"
								onClick={(ev) => handleClick(e,ev)}
							>
								{e}
							</span>
						))}
				</div>
			</div>
		</section>
		}
		</>
	);
}
export default memo(HourSelector)