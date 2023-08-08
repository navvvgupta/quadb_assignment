import React, { useState,useEffect, Component } from 'react';
import "./styles.css";
import {Header} from "./Header";
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';

export const MainPage = () => {
    return (
        <React.Fragment>
            <div class="main-color">
            <Header/>
            <div class="Container-fluid " style={{ padding: "0px 30px" }}>
                <div class="d-flex justify-content-around align-items-center average-header" style={{ padding: "10px 0px",color: "white" }}>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">0.47 %</div>
                        <div class="average-header-subHeading color-white">5 Mins</div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">0.98 %</div>
                        <div class="average-header-subHeading color-white">1 Hour</div>
                    </div>
                    <div style={{ "max-width": "40%" }}>
                        <div class="text-center font-32 average-block">
                            <div class="average-subText">
                                <span class="subText-heading color-white">Best Price to Trade</span>
                            </div>
                            <div class="average-heading" style={{ "padding-bottom": "10px" }}>₹ 1,67,334</div>
                            <div class="average-subText color-white">Average ETH/INR net price including commission</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">5.86 %</div>
                        <div class="average-header-subHeading color-white">1 Day</div>
                    </div>
                    <div class="text-center">
                        <div class="average-header-maintext color-green">6.41 %</div>
                        <div class="average-header-subHeading  color-white">7 Days</div>
                    </div>
                </div>
            </div>
            <div class="fiat-crypto-table table-responsive main-color" style={{ margin: "0px auto" }}>
                <table class="table table-borderless text-center main-color">
                    <thead class=" main-color">
                        <tr >
                            <th class='main-color'>
                                <h4><span class="pointer main-color-white main-color-white main-color">#</span></h4>
                            </th>
                            <th class='main-color'>
                                <h4><span class="pointer main-color-white">Platform</span></h4>
                            </th>
                            <th class='main-color'>
                                <h4><span class="pointer main-color-white">Last Traded Price</span></h4>
                            </th>
                            <th class='main-color'><h4><span class="pointer main-color-white">Buy / Sell Price</span></h4>
                            </th>
                            <th class='main-color'><h4><span class="pointer main-color-white">Difference</span></h4>
                            </th>
                            <th class='main-color'>
                                <h4><span class="pointer main-color-white">Savings</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">1</h4></td>
                            <td class="align-middle main-color"><a target="_blank" href="">
                                <h4 class="table-text"> <span class="exchange-name main-color-white" style={{textDecoration:'none'}}>WazirX</span></h4>
                            </a></td><td class="align-middle main-color"><h4 class="table-text main-color-white">₹ 1,79,500</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white"><span>₹ 1,79,200 / ₹ 1,79,500</span></h4></td>
                            <td class="align-middle main-color"><h4 class="table-text color-green main-color-white">7.27 %</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text color-green main-color-white">▲ ₹ 12,165</h4></td>
                        </tr>
                        <tr><td class="align-middle main-color"><h4 class="table-text main-color-white">2</h4></td>
                            <td class="align-middle main-color"><a target="_blank" href="https://bit.ly/2BJxccc">
                                <h4 class="table-text">
                                    
                                    <span class="exchange-name main-color-white">Bitbns</span>
                                </h4></a></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">₹ 1,76,875</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white"><span>₹ 1,75,745 / ₹ 1,76,801</span></h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">5.70 %</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green">▲ ₹ 9,540</h4></td>
                        </tr><tr><td class="align-middle main-color"><h4 class="table-text main-color-white">3</h4></td>
                            <td class="align-middle main-color"><a target="_blank" href=" "><h4 class="table-text main-color-white">
                                <span class="exchange-name ">Giotus</span></h4></a></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">₹ 1,79,000</h4></td><td class="align-middle main-color"><h4 class="table-text main-color-white"><span>₹ 1,78,010 / ₹ 1,79,000</span></h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">6.97 %</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">▲ ₹ 11,665</h4></td>
                        </tr>
                        <tr>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">4</h4></td>
                            <td class="align-middle main-color"><a target="_blank" href=" "><h4 class="table-text main-color-white">
                                <span class="exchange-name ">Colodax</span></h4></a></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">₹ 1,08,675</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white"><span>₹ 1,08,675 / ₹ 1,10,469</span></h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-red">-35.06 %</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-red">▼ ₹ 58,659</h4></td>
                        </tr>
                        <tr>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">5</h4></td>
                            <td class="align-middle main-color"><a target="_blank" href=""><h4 class="table-text">
                               <span class="exchange-name main-color-white">Zebpay</span></h4></a></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">₹ 1,82,000</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white"><span>₹ 1,82,200 / ₹ 1,82,000</span></h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">8.76 %</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">▲ ₹ 14,665</h4></td>
                        </tr>
                        <tr>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">6</h4></td>
                            <td class="align-middle main-color"><a target="_blank" href=" "><h4 class="table-text">
                               <span class="exchange-name main-color-white">CoinDCX</span></h4></a></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white">₹ 1,77,959</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white"><span>₹ 1,77,959 / ₹ 1,78,763</span></h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">6.35 %</h4></td>
                            <td class="align-middle main-color"><h4 class="table-text main-color-white color-green main-color-white">▲ ₹ 10,624</h4></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        <div class="d-flex justify-content-center" style={{border:"solid 1px #191d28","background-color":"#191d28",position:"fixed",left:"0","align-items":"center",width:"100vw",height:"47px",bottom:"0","z-index":"8"}}><button class="add-button btn btn-outline-info" style={{display: "block"}}>Add hodlinfo to home screen</button></div>
        </div>

        </React.Fragment>
    )
};
