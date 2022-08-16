import React,{Component} from 'react';
import './header.css';
import logo from './logo.svg';


class Header extends Component {

    render(){

        return(
            <header id='header'>
            <div className="head"></div>
                 <nav className="navbar">
            <div className="logo">
                <a href="index.html"></a>
                <img src={logo} alt="Starbucks"/>
            </div>
            <div className="left">
                <ul className="nav-options">
                    <li onmousemove="mouseOverCoffee()" onmouseout="mouseOutCoffee()"> COFFEE</li>
                    <li onmousemove="mouseOverMenu()" onmouseout="mouseOutMenu()"> MENU</li>
                    <li onmousemove="mouseOverCoffeeHouse()" onmouseout="mouseOutCoffeeHouse()">COFFEHOUSE</li>
                    <li onmousemove="mouseOverResponsibility()" onmouseout="mouseOutResponsibility()">RESPONSIBILITY</li>
                    <li>REWARDS</li>
                    <li>CARRIER</li>
                    <li>STARBUCKS SEASON'S GIFTING</li>
                    <li>STARBUCKS DELIVERY</li>
                    <li onmousemove="mouseOverAboutUs()" onmouseout="mouseOutAboutUs()">ABOUT US</li>
                </ul>
            </div>
            <div className="right">
                <p className="find"><i class="fa-solid fa-location-dot"></i> Find A Store</p>
                <ul className="nav-options">
                </ul>
            </div>
        </nav>

        {/* <!-- --------Hoverable DropDown Starts------- --> */}

        {/* <!-- ----------CoffeeDropDown Starts---------- --> */}

        <div className="container-fluid" id="coffeeDropDown" onmousemove="mouseOverCoffee()" onmouseout="mouseOutCoffee()">
            <div id="coffeeDropDown1">
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Our Coffees</a></li>
                    <li><a href="#">Starbucks VIA®</a></li>
                    <li><a href="#">Whole Bean Coffee</a></li>
                    <li><a href="#">View All Coffees</a></li>
                </div>

                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Find Your Perfect Coffee</a></li>
                </div>

                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Espresso</a></li>
                    <li><a href="#">The ingredients</a></li>
                    <li><a href="#">The Best Equipments</a></li>
                    <li><a href="#">Who Makes it</a></li>
                </div>    
                
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">How To Brew Great Coffee</a></li>
                    <li><a href="#">Coffee Press</a></li>
                    <li><a href="#">Pour Over</a></li>
                    <li><a href="#">Iced Pour Over</a></li>
                    <li><a href="#">Coffee Brewer</a></li>
                </div>
    
                <div className="list-unstyled" >
                    <li><a href="#" className="list-heading">Ethical Sourcing</a></li>
                    <li><a href="#">Coffee</a></li>
                    <li><a href="#">Coffee Quality</a></li>
                    <li><a href="#">Farmer Support</a></li>
                </div>
    
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Learn More</a></li>
                    <li><a href="#">Starbucks Roast Spectrum</a></li>
                    <li><a href="#">Coffee By Form</a></li>
                    <li><a href="#">Flavors in Your Cup</a></li>
                    <li><a href="#">Coffee FAQ</a></li>
                </div>
                <hr/>
    
                <div className="list-unstyled" id="sub-coffeelist">
                    <p>Looking for Coffee Beverages?</p>
                    <li><a href="#">Drinks</a></li>
                </div>
            </div>

            <div id="coffeeDropDown2">
                <img src="pattern_stars.png" alt="starsPattern"/>
                <img src="pattern_stars.png" alt="starsPattern"/>
                <img src="pattern_stars.png" alt="starsPattern"/>
            </div>
        </div>

        {/* <!-- -----------MenuDropDown Starts--------- --> */}

        <div className="container-fluid" id="menuDropDown" onmousemove="mouseOverMenu()" onmouseout="mouseOutMenu()">
            <div id="menuDropDown1">
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Drinks</a></li>
                    <li><a href="#">Featured Beverages</a></li>
                    <li><a href="#">Espresso</a></li>
                    <li><a href="#">Freshly Brewed Coffee</a></li>
                    <li><a href="#">Coffee Frappuccino®</a></li>
                    <li><a href="#">Crème Frappuccino®</a></li>
                    <li><a href="#">Other Beverages</a></li>
                    <li><a href="#">Cold Brew</a></li>
                    <li><a href="#">Teavana® Tea</a></li>
                    <li><a href="#">Iced Shaken</a></li>
                </div>  
                
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Food</a></li>
                    <li><a href="#">Featured Food</a></li>
                    <li><a href="#">Sweet Bakery</a></li>
                    <li><a href="#">Savoury Bakery</a></li>
                    <li><a href="#">Sandwiches & wraps</a></li>
                    <li><a href="#">Salads & Museli</a></li>
                    <li><a href="#">Desserts</a></li>
                </div>
                <hr/>
            </div>

            <div id="menuDropDown2">
                <img src="pattern_stars.png" alt="starsPattern"/>
                <img src="pattern_stars.png" alt="starsPattern"/>
            </div>
        </div>

        {/* <!-- ----------- CoffeeHouse DropDown Starts-------  --> */}

        
        <div className="container-fluid" id="coffeeHouseDropDown" onmousemove="mouseOverCoffeeHouse()" onmouseout="mouseOutCoffeeHouse()">
            <div id="coffeeHouseDropDown1">
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Wireless Internet</a></li>
                </div> 

                <div className ="list-unstyled">
                    <li><a href="#" className ="list-heading">Store Locations</a></li>
                </div> 

                <div className ="list-unstyled">
                    <li><a href="#" className ="list-heading">Store Design</a></li>
                    <li><a href="#">Fort-Mumbai</a></li>
                    <li><a href="#">Indiranagar Bangalore</a></li>
                    <li><a href="#">Koregaon Park Pune</a></li>
                    <li><a href="#">Hamilton House Delhi</a></li>
                    <li><a href="#">Jubiliee Hills Hydreabad</a></li>
                    <li><a href="#">Phoenix Market City Chennai</a></li>
                    <li><a href="#">Park Mansions Kolkata</a></li>
                </div>  
                <hr/>
            </div>

            <div id="coffeeHouseDropDown2">
                <img src="pattern_stars.png" alt="starsPattern"/>
                <img src="pattern_stars.png" alt="starsPattern"/>
                <a href="#" id="downloadApp">
                    <div id="starbucksApp">
                        <img src="starbucksapp.png" alt="promomobile"/>
                        <h6>Starbucks® India Mobile App</h6>
                        <p>Scan, Pay and earn rewards. It's that simple. Get our mobile app today!</p>
                    </div>
                </a>
                
            </div>
        </div>

        {/* <!-- --------- Responsibility DropDown Starst------- --> */}

        <div className="container-fluid" id="responsibilityDropDown" onmousemove="mouseOverResponsibility()" onmouseout="mouseOutResponsibility()">
            <div id="responsibilityDropDown1">
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Community</a></li>
                    <li><a href="#">Local Area Management</a></li>
                    <li><a href="#">Empowering Girls And Young Women</a></li>
                    <li><a href="#">Swastha</a></li>
                    <li><a href="#">Chai Project</a></li>
                </div>

                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Ethical Sourcing</a></li>
                    <li><a href="#">Coffee Sourcing</a></li>
                    <li><a href="#">Farmer Support</a></li>
                    <li><a href="#">Tea Sourcing</a></li>
                    <li><a href="#">Cocoa Sourcing</a></li>
                </div>    
                
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Environment</a></li>
                    <li><a href="#">Recycling</a></li>
                    <li><a href="#">Energy</a></li>
                    <li><a href="#">Water</a></li>
                    <li><a href="#">Green Building</a></li>
                    <li><a href="#">Climate Change</a></li>
                </div>

                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Diversity</a></li>
                </div>
    
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Learn More</a></li>
                    <li><a href="#">Starbucks Shared Planet</a></li>
                    <li><a href="#">Policies</a></li>
                </div>
                <hr/>
            </div>

            <div id="responsibilityDropDown2">
                <img src="pattern_stars.png" alt="starsPattern"/>
                <img src="pattern_stars.png" alt="starsPattern"/>
                <img src="pattern_stars.png" alt="starsPattern"/>
            </div>
        </div>

        {/* <!-- -------------About DropDown Starts-------- --> */}

        <div className="container-fluid" id="aboutUsDropDown" onmousemove="mouseOverAboutUs()" onmouseout="mouseOutAboutUs()">
            <div id="aboutUsDropDown1">
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Our Heritage</a></li>
                </div> 

                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Our Company</a></li>
                    <li><a href="#">Mission Statement</a></li>
                    <li><a href="#">Business Ethics And Compliance</a></li>
                    <li><a href="#">Online Policies</a></li>
                </div>  
                
                <div className="list-unstyled">
                    <li><a href="#" className="list-heading">Career Center</a></li>
                </div> 
                 <hr/>
            </div>

            <div id="aboutUsDropDown2">
                <img src="pattern_stars.png" alt="starsPattern"/>
            </div>
        </div>
        </header>
        )
    }
}

export default Header;