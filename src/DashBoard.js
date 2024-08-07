import React from "react";
import profPic1 from "./images/profile_pic1.png"
import profPic2 from "./images/profile_pic2.png"
import profPic3 from "./images/profile_pic3.png"
import graph from "./images/graph.png"
import profPic4 from "./images/profile_pic4.png"
import { FaRegBell } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { BsFillBasket2Fill } from "react-icons/bs";
import { PiHandbagSimpleLight } from "react-icons/pi";
import { TbShoppingBagX } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiWallet3Fill } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdMenuOpen } from "react-icons/md";
import { FaChevronCircleRight } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";
import './App.css';

export function DashBoard(){
    
    return(
        <div className="container">
            <div className="item header">
                <div className="menues">
                    <MdDashboard className="menu logo"/>
                    <GoHomeFill className="menu home"/>
                    <MdInsertChartOutlined className="menu chart"/>
                    <FaClipboardCheck className="menu board"/>
                    <IoBagCheckOutline className="menu charts"/>
                    <RiWallet3Fill className="menu chart"/>
                </div>
            </div>
            <div className="item row">
                <div className="search">
                    <input style={{width: '200px', fontSize:'15px', borderRadius:'5px', paddingRight:'20px', backgroundColor:'hsl(230deg 6.67% 17.65%)', height:'30px'}} placeholder="Search"></input>
                </div>
                <div className="profile">
                <GoMail className="icons mail"/>
                <MdSettings className="icons settings"/>
                <FaRegBell className="icons bell"/>
                <img src={profPic1} alt="" className="icons pic"/>
                </div>
            </div>
            <div className="item row2" style={{fontSize:'20px', backgroundColor:'black'}}><strong>Dashboard</strong></div>
            <div className="item row3">
                <div className="order">
                    <BsFillBasket2Fill className="icon basket"/>
                    <span className="ordersText">Total Orders</span>
                    <div className="odarw">
                        <div className="odn"><span className="OrdersNum"><strong>75</strong></span></div>
                        <div className="odnarw"><IoMdArrowDropup className="ord upArr" /> <span>3%</span></div>
                    </div>
                </div>
                <div className="order">
                    <PiHandbagSimpleLight className="icon bag"/>
                    <span className="ordersText">Total Delivered</span>
                    <div className="odarw">
                        <div className="odn"><span className="OrdersNum"><strong>70</strong></span></div>
                        <div className="odnarw"><IoMdArrowDropup className="ord upArr" /> <span>3%</span></div>
                    </div>
                </div>
                <div className="order">
                    <TbShoppingBagX className="icon bagx"/>
                    <span className="ordersText">Total Cancelled</span>
                    <div className="odarw">
                        <div className="odn"><span className="OrdersNum"><strong>05</strong></span></div>
                        <div className="odnarw"><IoMdArrowDropup className="ord upArr" /> <span>3%</span></div>
                    </div>
                </div>
                <div className="order">
                    <CiDollar className="icon dollar"/>
                    <span className="ordersText">Total Revenue</span>
                    <div className="odarw">
                        <div className="odn"><span className="OrdersNum"><strong>$12K</strong></span></div>
                        <div className="odnarw"><IoMdArrowDropup className="ord upArr" /> <span>3%</span></div>
                    </div>
                </div>    
            </div>
            <div className="item row4">
                <div className="netProfit">
                Net profit
                <span style={{fontSize:'50px',color:'white',display:'block'}}><strong>$6759.25</strong></span>
                <IoMdArrowDropup className="ntpft upArrow" /> <span>3%</span>
                </div>
                <div className="netProfitchart">
                    <FaCircleHalfStroke className="ntpft circle"/>
                </div>
            </div>
            <div className="item">
                <img src={graph} alt="" className="graph" />
            </div>
            <div className="item goals">
                <div className="list goal"><GoGoal  className="icn igoal"/><span className="goalText">Goals</span></div>
                <FaChevronCircleRight className="circleRight"/>
                <div className="list dish"><IoFastFoodOutline className="icn ifood"/><span className="goalText">Popular Dishes</span></div>
                <FaChevronCircleRight className="circleRight"/>
                <div className="list openMenu"><MdMenuOpen className="icn imenu"/><span className="goalText">Menus</span></div>
                <FaChevronCircleRight className="circleRight"/>
            </div>
            <div className="item RecentOrders">
                <h3><strong>Recent Orders</strong></h3>
                <table className="orders">
                    <tr>
                        <th>Customer</th>
                        <th>order No.</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td><img src={profPic3} alt="" className="custPic"/><span>Wade Warren</span></td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="del">Delivered</td>
                    </tr>
                    <tr>
                        <td><img src={profPic1} alt="" className="custPic"/><span>jane Cooper</span></td>
                        <td>48965786</td>
                        <td>$365.02</td>
                        <td className="del">Delivered</td>
                    </tr>
                    <tr>
                        <td><img src={profPic2} alt="" className="custPic"/><span>Guy Hawkins</span></td>
                        <td>78958215</td>
                        <td>$45.88</td>
                        <td className="can">Cancelled</td>
                    </tr>
                    <tr>
                        <td><img src={profPic3} alt="" className="custPic"/><span>Kristin Watson</span></td>
                        <td>20965732</td>
                        <td>$65.00</td>
                        <td className="pen">Pending</td>
                    </tr>
                    <tr>
                        <td><img src={profPic4} alt="" className="custPic"/><span>Cody Fisher</span></td>
                        <td>95715620</td>
                        <td>$545.00</td>
                        <td className="del">Delivered</td>
                    </tr>
                    <tr>
                        <td><img src={profPic1} alt="" className="custPic"/><span>Savannah</span></td>
                        <td>78514568</td>
                        <td>$128.20</td>
                        <td className="del">Delivered</td>
                    </tr>
                </table>
            </div>
            <div className="item feedback">
                <div className="creview">
                    <h2>Customer's Feedback</h2>
                    <div><img src={profPic2} alt="" className="custPic"/><span className="cName">Jenny Wilson</span></div>
                    <div className="stars"><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></div>
                    <span className="review">Need more choices, and in the morning should open before 7.30. It needs to either have a buffet service or faster serving time. It also needs to reduce mistakes in taking orders.</span>
                </div>
                <div className="creview">
                    <div><img src={profPic3} alt="" className="custPic"/><span className="cName">Dianne Russel</span></div>
                    <div className="stars"><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></div>
                    <span className="review">The Food we had enjoyed at the time of dinner. It was really delicious taste with great quality, everything had unique taste which we had ordered, nice arrangement and services from the staff while eating, we found nothing bad about this hotel.</span>
                </div>
                <div className="creview">
                    <div><img src={profPic4} alt="" className="custPic"/><span className="cName">Devon Lane</span></div>
                    <div className="stars"><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></div>
                    <span className="review">I and my friend had dinner here one of the nights we were in Kalpetta. The ambiance was good and the food recommendations were great. We had a traditional Arabian rice and chicken preparation, Kuzhi Manthi. It was our first experience having this dish, and although a bit dry, it tasted great. Would recommend this place that's easily noticed from a vehicle and has ample parking</span>
                </div>

            </div>
        </div>
    )
}