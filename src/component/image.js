import React from 'react';
import './image.css';
import box11 from '../images/box11.png';
import box12 from '../images/box12.png';


const Images = () => {
        return(
            <div>
             <div id="box1"></div>
    <div id="box2"></div>
    <div id="box3"></div>
    <div id="box4"></div>
    <div id="box5"></div>
    <div id="box6"></div>
    <div id="box7"></div>
    <div id="box8"></div>
    <div id="box9"></div>
    <div id="box10"></div>
    <div id="box11">
        <div class="left-box">
            <img class="box-img" src={box11} alt=""/>
        </div>
        <div class="right-box">
            <h3 class="right-heading">LET US DELIGHT YOU</h3>
            <p class="right-para">
                <em> Delicious, handcrafted beverages and great-tasting food. <p class="right-para">The secret to making life better.</p></em>
            </p>
            </div>
    </div>
    <div id="box12">
        <div class="left-box">
            <h3 class="left-heading">OPPORTUNITY</h3>
            <p class="left-para">
                <em>To be more than an employee, to be a partner.</em>
            </p>
        
        </div>
        <div class="right-box">
            <img class="box-img" src={box12} alt=""/>
        </div>
    </div>
            </div>
        )
    }


export default Images;