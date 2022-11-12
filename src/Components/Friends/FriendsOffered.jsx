
import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
function FriendsOffered() {
    const navigate = useNavigate();
    const goback = () => {
        navigate("/");
    }
    return (
        <>

            <section className="codes">
            <div>UI/UX &gt; Refer & Earn &gt; Friends Offered</div>
                <span onClick={goback} className="goback">Go Back</span>
                <div className=" row">
                    <div className="ref-code col-8">
                        <span className="your">Your Referral Code</span>
                        <div className="ref border border-grey">
                            <p className="code">EDCH54</p>
                        </div>
                    </div>
                    <div className=" col-4">
                        <div className="wallet1 border">
                            <span className="balance">Wallet Balance</span>
                            <br></br>
                            <span className="rupees">₹ 500</span>
                        </div>
                    </div>
                </div>
            </section>



            <section className="cards">
                <div className="enrolled">
                    <p className="text">Friends Who Enrolled(3)</p>
                </div>
                <div className="row">
                    <div className=" friends col-lg-4">
                        <div className="row inside">
                            <div className="col-7">
                                <span className="name">Dhiraj Saxena</span>
                            </div>
                            <div className="col-4">
                                <span className="date">14 Sep, 2022</span>
                            </div>
                        </div>
                        <span className="courses">Courses Enrolled(6)</span>
                        <div className="skills">
                            <div className=" values">
                                  UI/UX
                            </div>
                            <div className=" values">
                                  Photoshop
                            </div>
                            <div className=" values">
                                  Illustrator
                            </div>
                            <div className=" values">
                                  Python
                            </div>
                            <div className=" values">
                                  MERN
                            </div>
                            <div className=" values">
                                  DSA
                            </div>
                            <div className=" values">
                                  C/C++
                            </div>
                            <div className=" values">
                                  Java
                            </div>
                        </div>
                        <span className="end">Refferal Amount ₹ 185</span>
                    </div>
                    <div className=" friends col-lg-4">
                        <div className="row inside ">
                            <div className="col-7 ">
                                <span className="name">Subhash Mishra</span>
                            </div>
                            <div className="col-4 ">
                                <span className="date">15 Sep, 2022</span>
                            </div>
                        </div>
                        <span className="courses">Courses Enrolled(23)</span>
                        <div className="skills">
                            <div className=" values">
                                  UI/UX
                            </div>
                            <div className=" values">
                                  Photoshop
                            </div>
                            <div className=" values">
                                  Illustrator
                            </div>
                            <div className=" values">
                                  Python
                            </div>
                            <div className=" values">
                                  MERN
                            </div>
                            <div className=" values">
                                  DSA
                            </div>
                            <div className=" values">
                                  C/C++
                            </div>
                            <div className=" values">
                                  Java
                            </div>
                        </div>
                        <span className="end">Refferal Amount ₹ 485</span>
                    </div>
                    <div className=" friends col-lg-3">
                        <div className="row inside">
                            <div className="col-7">
                                <span className="name">Prafull Kumar</span>
                            </div>
                            <div className="col-4">

                            </div>
                        </div>
                        <span className="courses">Courses Enrolled(23)</span>
                        <div className="skills">
                            <div className=" values">
                                  UI/UX
                            </div>
                            <div className=" values">
                                  Photoshop
                            </div>
                            <div className=" values">
                                  DSA
                            </div>
                            <div className=" values">
                                  Python
                            </div>
                            <div className=" values">
                                  Illustrator
                            </div>
                        </div>
                        <span className="end">Refferal Amount ₹ 485</span>
                    </div>
                </div>
                <span className="last">Terms & Conditions</span>
            </section>
        </>
    )
}
export default FriendsOffered;