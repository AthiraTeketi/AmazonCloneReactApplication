import './App.css'
import React from 'react';
import Sliding from './Sliding.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faFontAwesome} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Amazon(){

   return(
  <div className='AmazonWebsite'>
    {/* Navigating Bar */}
    <div className='navBar'>
          <div className='navlogo border'>
            <img src='/amazon.PNG' alt=''></img>
          </div>
          <div className='navLocation border'>
            <p> Deliver To  <b className='icon'><FontAwesomeIcon icon={faLocationDot} /></b> <b className='locationCtry'>India</b></p>
          </div>
          <div className='navSelect border'>
            <select className='optionDD'>
              <option className='selectoption'>All</option>
            </select>
            <input placeholder='search Amazon'></input>
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div className='countryList border'>
            <FontAwesomeIcon icon={faFontAwesome} />
            <select className='ctryLstOpt'>
              <option><b className='clist'>EN..</b></option>
            </select>
          </div>
          <div className='AccountDetails border'>
            <p className='accText'>Hello, sign in</p> 
            <select className='Acclist'>
              <option className='accOption'>Account & Lists</option>
            </select>   
          </div>
          <div className='Orders border'>
            <p>Returns</p>
            <p><b>& Orders</b></p>
          </div>
          <div className='Cart'>
          <FontAwesomeIcon icon={faCartShopping} />
          <p><b>cart</b></p>
          </div>
    </div>
                {/* Second navBar for Offers */}
        <div className='navBar_2'>
            <div className='selectCategory'>
              <p><FontAwesomeIcon icon={faBars} /> All</p>
            </div>
            <div>
              <p>Today's Deals</p>
            </div>
            <div>
              <p>Customer Service</p>
            </div>
            <div>
              <p>Registry</p>
            </div>
            <div><p>Gift cards</p></div>
            <div><p>Sell</p></div>
            <div className='great_deals'>
              <p><b>Shop great deals now</b></p>
            </div>
        </div>
    
    <div className='Content'>
        
        {/* HeroElements "big offers image display " */}
      
        <Sliding/>

        {/* Empty Div */}
                
        {/* Alert Box of Website */}
        <div className='AlertMsg'>
          <p style={{wordSpacing :'8px'}}>you are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery</p>
        </div>

        {/* Empty Div */}
        <div className='emptyDivs'>

        </div> 
        <div className='ContentDivision'>
              
          <div>    
              {/* First Product Flex Block */}
              <div className='Products1'>
                    <div className='fashion'>
                      <h3>Fashion</h3>
                      <img src='/fashion.PNG' alt=''></img>
                    </div>
                    <div className='PersonalCare'>
                      <h3>Beauty epic</h3>
                      <img src='/beautyPic.PNG' alt=''></img>
                    </div>
                    <div className='HomeApplience'>
                      <h3>Gift Hampers</h3>
                      <img src='/basketHamper.PNG' alt=''></img>
                    </div>
                    
              </div>

              
              <div className='Products3'>
                  <div className='HomeDecor'>
                    <h3>Home Decor</h3>
                    <img src='/homeDecor1.PNG' alt=''></img>
                    <img src='/homeDecor2.PNG' alt=''></img>
                    <img src='/homeDecor3.PNG' alt=''></img>
                    <img src='/homeDecor4.PNG' alt=''></img>
                  </div>
                  <div className='kitchen'>
                    <h3>Home Appliences</h3>
                    <img src='/kitchenAppliences.PNG' alt=''></img>
                    <img src='/homeAppliences.PNG' alt=''></img>
                  </div>
              </div>
              {/* Empty Div
              <div className='emptyDivs'>

              </div> */}
              
          </div> 
              <div className='SignInDiv'>
                  
                  <div className='signBox'>
                    <h3>Sign in for the best Experience</h3>
                    <button>Sign In Securely</button>
                  </div>
                  <div className='ShippingImage'>
                    <img src='/shipping.PNG' alt=''></img>
                  </div>
                  <div className='Registration'>
                    <h3>Create Account </h3>
                    <form >
                      <label>Name : </label><br></br><input></input>
                      <br></br>
                      <label>Email Address : </label><br></br><input></input>
                      <br></br>
                      <label>Phone number : </label><br></br><input></input>
                      <br></br>
                      <label>Address : </label><br></br><input></input>
                      <br></br>
                      <br></br>
                      <button>Submit</button>
                    </form>
                  </div>
              </div>
       
          </div>

          <div className='Products4'>
              <div className='PrdctImg1'>
                  <h3>Fitness Freak</h3>
                  <img src='/fitnessGym.PNG' alt=''></img>
              </div>
              <div className='PrdctImg2'>
                  <h3>Pet Care</h3>
                  <img src='/petare.PNG' alt=''></img>
              </div>
              <div className='PrdctImg3'>
                  <h3>Furniture</h3>
                  <img src='/furniture.PNG' alt=''></img>
              </div>
              <div className='PrdctImg4'>
                  <h3>Personal Care</h3>
                  <img src='/PersonalCare.PNG' alt=''></img>
              </div>
              <div className='PrdctImg5'>
                  <h3>Gaming Accessiors</h3>
                  <img src='/gamingAcces.PNG' alt=''></img> 
              </div>
            
        </div>
          {/* Second Product Flex Block */}
          <div className='Products2'>
              
              <h3>Popular Items This Week</h3>
              <div className='pictures'>
                      <div className='PopularItem1'>
                        <img src='/PopularItem1.PNG' alt=''></img>
                      </div>
                      <div className='PopularItem2'>
                        <img src='/PopularItem3.PNG' alt=''></img>
                      </div>
                      <div className='PopularItem3'>
                        <img src='/PopularItem4.PNG' alt=''></img>
                      </div>
                      <div className='PopularItem4'>
                        <img src='/PopularItem2.PNG' alt=''></img>
                      </div>
                      <div className='PopularItem5'>
                        <img src='/SmartWatches.PNG' alt=''></img>
                      </div>
              </div>
           </div>
    
  </div>
  <div className='Description'>
            <div className='DescDivs1'>
              <h3>Get to Know Us</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Press Release</p>
              <p>Amazon Science</p>
            </div >
            <div className='DescDivs'>
            <h3>Connect with Us</h3>
              <p>Adress</p>
              <p>contact with us</p>
              <p>Office Adress</p>
              <p>Careers</p>
            </div>
            <div className='DescDivs'>
            <h3>Make Money with Us</h3>
              <p>Buy with us</p>
              <p>purchase from us </p>
              <p>sell goods</p>
              <p>@amazon.com</p>
            </div>
            <div className='DescDivs'>
            <h3>Let Us help You</h3>
              <p>@sellgoods.com</p>
              <p>@buygoods.com</p>
              <p>@India.com</p>
            </div>
        </div>
  </div>
  )
}

export default Amazon