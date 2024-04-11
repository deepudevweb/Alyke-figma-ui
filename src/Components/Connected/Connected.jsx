import React, { useState, useEffect } from "react";
import "./Connected.css";
import { GrBusinessService } from "react-icons/gr";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RiContactsBook2Line } from "react-icons/ri";
import Connect from "../../assets/connect.jpeg";
import { Carousel } from "../Carousel/Carousel";

function Connected() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  return (
    <div className={`connected ${animate ? "animate" : ""}`}>
      <Carousel>
        <Connected1 />
        <Connected2 />
        <Connected3 />
      </Carousel>
    </div>
  );
}

export default Connected;

function Connected1() {
  return (
    <div className="connected">
      <div className="left-side">
        <h2 className="left-heading">
          We <span className="heading-color">stay connected</span>
        </h2>
        <div className="left-inner">
          <h3 className="business-top">
            <span className="business">
              <GrBusinessService size={32} className="business-icon" />
            </span>
            Quarterly Business Updates
          </h3>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium eaque corrupti dolores eum distinctio, accusantium fuga
            exercitationem molestias deserunt odit cupiditate, tenetur
            consequuntur, temporibus quibusdam dolore? Ea voluptatem neque
            quasi. Perferendis voluptates tenetur quo doloribus error nemo aut
            veritatis, assumenda quia temporibus asperiores. Modi atque
            perferendis fugit velit earum nisi voluptatibus obcaecati labore.
            Numquam non itaque omnis nobis distinctio voluptatem ab praesentium
            eos, sit saepe corrupti! Vero accusamus rerum quasi laboriosam.
            Officia culpa totam aliquam, obcaecati aperiam autem laboriosam
            possimus?
          </p>
          <h3 className="business-heading">
            <span className="business">
              <HiOutlineChatBubbleLeftRight
                size={32}
                className="business-icon"
              />
            </span>
            Industery Events & Networking
          </h3>
          <h3 className="business-heading">
            <span className="business">
              <RiContactsBook2Line size={32} className="business-icon" />
            </span>
            Associations Memberships
          </h3>
        </div>
      </div>
      <div
        className="rightImage"
        style={{ backgroundImage: `url(${Connect})` }}
      >
        <div className="blackoverlay"></div>
      </div>
    </div>
  );
}
function Connected2() {
  return (
    <div className="connected">
      <div className="left-side">
        <h2 className="left-heading">
          We <span className="heading-color">stay calm</span>
        </h2>
        <div className="left-inner">
          <h3 className="business-top">
            <span className="business">
              <GrBusinessService size={32} className="business-icon" />
            </span>
            Quarterly Business Updates
          </h3>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium eaque corrupti dolores eum distinctio, accusantium fuga
            exercitationem molestias deserunt odit cupiditate, tenetur
            consequuntur, temporibus quibusdam dolore? Ea voluptatem neque
            quasi. Perferendis voluptates tenetur quo doloribus error nemo aut
            veritatis, assumenda quia temporibus asperiores. Modi atque
            perferendis fugit velit earum nisi voluptatibus obcaecati labore.
            Numquam non itaque omnis nobis distinctio voluptatem ab praesentium
            eos, sit saepe corrupti! Vero accusamus rerum quasi laboriosam.
            Officia culpa totam aliquam, obcaecati aperiam autem laboriosam
            possimus?
          </p>
          <h3 className="business-heading">
            <span className="business">
              <HiOutlineChatBubbleLeftRight
                size={32}
                className="business-icon"
              />
            </span>
            Industery Events & Networking
          </h3>
          <h3 className="business-heading">
            <span className="business">
              <RiContactsBook2Line size={32} className="business-icon" />
            </span>
            Associations Memberships
          </h3>
        </div>
      </div>
      <div
        className="rightImage"
        style={{ backgroundImage: `url(${Connect})` }}
      >
        <div className="blackoverlay"></div>
      </div>
    </div>
  );
}
function Connected3() {
  return (
    <div className="connected">
      <div className="left-side">
        <h2 className="left-heading">
          We <span className="heading-color">are productive</span>
        </h2>
        <div className="left-inner">
          <h3 className="business-top">
            <span className="business">
              <GrBusinessService size={32} className="business-icon" />
            </span>
            Quarterly Business Updates
          </h3>
          <p className="para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium eaque corrupti dolores eum distinctio, accusantium fuga
            exercitationem molestias deserunt odit cupiditate, tenetur
            consequuntur, temporibus quibusdam dolore? Ea voluptatem neque
            quasi. Perferendis voluptates tenetur quo doloribus error nemo aut
            veritatis, assumenda quia temporibus asperiores. Modi atque
            perferendis fugit velit earum nisi voluptatibus obcaecati labore.
            Numquam non itaque omnis nobis distinctio voluptatem ab praesentium
            eos, sit saepe corrupti! Vero accusamus rerum quasi laboriosam.
            Officia culpa totam aliquam, obcaecati aperiam autem laboriosam
            possimus?
          </p>
          <h3 className="business-heading">
            <span className="business">
              <HiOutlineChatBubbleLeftRight
                size={32}
                className="business-icon"
              />
            </span>
            Industery Events & Networking
          </h3>
          <h3 className="business-heading">
            <span className="business">
              <RiContactsBook2Line size={32} className="business-icon" />
            </span>
            Associations Memberships
          </h3>
        </div>
      </div>
      <div
        className="rightImage"
        style={{ backgroundImage: `url(${Connect})` }}
      >
        <div className="blackoverlay"></div>
      </div>
    </div>
  );
}
