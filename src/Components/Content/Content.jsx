import React from "react";
import people from "../../assests/people.svg";
import coupon from "../../assests/coupon.svg";
import discount from "../../assests/discount.svg";
import rupee from "../../assests/rupee.svg";
import wallet from "../../assests/wallet.svg";
import "./index.css";
function Content() {
  return (
    <div className="content">
      <div className="heading">How does it work ?</div>
      <div className="working">
        <div>
          <div className="img">
            <img src={people} />
          </div>
          <div>
            <h4>Invite your Friends</h4>
            <div>Share the link tutedude.com with your friends</div>
          </div>
        </div>
        <div>
          <div className="img">
            <img src={coupon} />
          </div>
          <div>
            <h4>Friend purchases any course</h4>
            <div>Using your REFERRAL CODE in the payments page</div>
          </div>
        </div>
        <div>
          <div className="img">
            <img src={rupee} />
          </div>
          <div>
            <h4>You get ₹ 200 as referral money</h4>
            <div>On total purchase the friend makes, into your wallet</div>
          </div>
        </div>
        <div>
          <div className="img">
            <img src={discount} />
          </div>
          <div>
            <h4>Your Friend gets ₹ 200 Off </h4>
            <div>
              On his overall fee on successful purchase using your referral code{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="img">
            <img src={wallet} />
          </div>
          <div>
            <h4>Transfer money from wallet</h4>
            <div>
              When the wallet balance reaches ₹200 or more, you can withdraw it
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;