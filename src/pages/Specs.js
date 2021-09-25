import React from 'react';

import freegologo from '../img/freego-logo.png'
import razorlogo from '../img/razor-logo.png'
import nanrobotlogo from '../img/nanrobot-logo.png'

const Specs = () => {
    return(
        <div className="specs">
            <table>
                <tr>
                    <th></th>
                    <th><img src={freegologo} alt="freego-logo"/></th>
                    <th><img src={razorlogo} alt="razor-logo"/></th>
                    <th><img src={nanrobotlogo} alt="nanrobot-logo"/></th>
                </tr>
                <tr>
                    <td>Model Number</td>
                    <td></td>
                    <td></td>
                    <td>Alpha 250e</td>
                </tr>
                <tr>
                    <td>Voltage</td>
                    <td>30V</td>
                    <td>36V</td>
                    <td>36V</td>
                </tr>
                <tr>
                    <td>Charging Time</td>
                    <td>3-4 hrs</td>
                    <td>4-5 hrs</td>
                    <td>5-6 hrs</td>
                </tr>
                <tr>
                    <td>Range (per charge)</td>
                    <td>20 mi</td>
                    <td>18 mi</td>
                    <td>24 mi</td>
                </tr>
                <tr>
                    <td>Max Load</td>
                    <td>275 lbs</td>
                    <td>285 lbs</td>
                    <td>300 lbs</td>
                </tr>
                <tr>
                    <td>Brake</td>
                    <td>Disk + Pad</td>
                    <td>Electric</td>
                    <td>Electric + Disk</td>
                </tr>
                <tr>
                    <td>Material</td>
                    <td>Aluminum Alloy</td>
                    <td>Aluminum Alloy</td>
                    <td>Aluminum + Copper Alloy</td>
                </tr>
                <tr>
                    <td>Motor Power</td>
                    <td>380W</td>
                    <td>350W</td>
                    <td>400W</td>
                </tr>
                <tr>
                    <td>Foldable</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Max Speed</td>
                    <td>24 mph</td>
                    <td>18 mph</td>
                    <td>30 mph</td>
                </tr>
                <tr>
                    <td>Battery</td>
                    <td>7AH Lithium</td>
                    <td>8AH Lithium</td>
                    <td>10AH Lithium</td>
                </tr>
                <tr>
                    <td>Motor</td>
                    <td>8.5 inch</td>
                    <td>8 inch</td>
                    <td>10 inch</td>
                </tr>
                <tr>
                    <td>Display</td>
                    <td>LCD</td>
                    <td>Digital</td>
                    <td>Colorful LCD</td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>Black</td>
                    <td>Black/Red</td>
                    <td>Black/Grey</td>
                </tr>
            </table>
        </div>
        
    )
}

export default Specs;