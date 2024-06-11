import React from "react";
import { useState, useEffect } from "react"
import "./indexDemo.scss"


export default function PriceSectionDemo() {

    const [ticket, setTicket] = useState([])

    const fetchPrices = () => {
        fetch("https://api-cine-paradiso.vercel.app/get-prices")
            .then((res) => res.json())
            .then((data) => {
                setTicket(data);
            })
    };
    useEffect(() => {
        fetchPrices();
    }, []);


    return (
        <section className="container-fluid sectHero mb-5 mt-5 shadow p-5" >
            <h2 className="text-center  priceHead22 mb-3">Precios</h2>
            <div className=" row justify-content-center align-items-start d-flex">
                <div className="col ">
                    <div className="card mt-4 ">
                        <div className="card-header text-center cardBk align-items-center"><h2 >{ticket.length > 0 && ticket[0].type} </h2></div>
                        <h3 className="text-center">{ticket.length > 0 && `Precio ARS $${ticket[0].price}`}</h3>
                        <div className="cardWrap">

                            <div className="cardHero cardLeft">
                                <div className="superiorContainer">
                                    <p className="priceHead2 align-items-center">Cine Paradiso</p>
                                </div>

                                <div className="lowerContainer">
                                    <div className="titleHero">
                                        <p className="spanHead">movie</p>
                                        <p className="priceHead2">Pelicula</p>
                                    </div>
                                    <div className="name">
                                        <p className="spanHead">name</p>
                                        <p className="priceHead2">Tu nombre</p>
                                    </div>
                                    <div className="time">
                                        <p className="spanHead" >time</p>
                                        <p className="priceHead2">Hora</p>
                                    </div>

                                </div>

                            </div>
                            <div className="cardHero cardRight">
                                <div className="superiorContainer">
                                    <div className="eye"></div>
                                </div>
                                <div className="lowerContainer2 d-flex flex-column align-items-center">
                                    <div className="number">
                                        <h3 className="priceHead3">***</h3>
                                        <p className="spanHead">SEAT</p>
                                    </div>
                                    <div className="barcode"><img src="src\assets\images\CineParadiso\barcode.svg" alt="codigo de barras para ticket"  /></div>
                                </div>

                            </div>

                        </div>




                    </div>




                </div>
                <div className="col container-fluid ">
                    <div className="card mt-4 ">
                        <div className="card-header text-center cardBk align-items-center"><h2>{ticket.length > 1 && ticket[1].type} </h2></div>
                        <h3 className="text-center">{ticket.length > 1 && `Precio ARS $${ticket[1].price}`} </h3>
                        <div className="cardWrap">
                            <div className="cardHero2 cardLeft">
                                <div className="superiorContainer">
                                    <p className="priceHead2 align-items-center ">Cine Paradiso</p>
                                </div>
                                <div className="lowerContainer">
                                    <div className="titleHero">
                                        <p className="spanHead">movie</p>
                                        <p className="priceHead2 priceHead4">Pelicula</p>
                                    </div>
                                    <div className="name">
                                        <p className="spanHead">name</p>
                                        <p className="priceHead2 priceHead4">Tu nombre</p>
                                    </div>
                                    <div className="time">
                                        <p className="spanHead">time</p>
                                        <p className="priceHead2 priceHead4">Hora</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cardHero2 cardRight2">
                                <div className="superiorContainer">
                                    <div className="eye"></div>
                                </div>
                                <div className="lowerContainer d-flex flex-column align-items-center">
                                    <div className="number">
                                        <h3 className=" priceHead3 priceHead5">***</h3>
                                        <p className="spanHead">SEAT</p>
                                    </div>
                                    <div className="barcode"><img src="src\assets\images\CineParadiso\barcode.svg" alt="codigo de barras para ticket"  /></div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>









            </div>

        </section>
    )
}