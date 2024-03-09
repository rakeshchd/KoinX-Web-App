import React, { useState, useEffect } from "react";
import "./TeamStyles.css"
import FooterTrendingMobile from "./FooterTrendingMobile";

function Team(){

    const [count, setCount] = useState(0)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const team_data = [
        {
            image: "src/assets/person-1.jpg",
            name: "John Smith",
            position: "Designation here",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda earum ea reprehenderit explicabo ullam quis itaque commodi doloremque nostrum doloribus, qui et perferendis veritatis maiores omnis. Distinctio voluptates aspernatur facere eligendi laboriosam quis dolore et, necessitatibus iste repellendus incidunt consequuntur cumque ipsum tempora ipsam asperiores sunt perspiciatis illo atque?",
        },
        {
            image: "src/assets/person-2.jpg",
            name: "Elina Williams",
            position: "Designation here",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda earum ea reprehenderit explicabo ullam quis itaque commodi doloremque nostrum doloribus, qui et perferendis veritatis maiores omnis. Distinctio voluptates aspernatur facere eligendi laboriosam quis dolore et, necessitatibus iste repellendus incidunt consequuntur cumque ipsum tempora ipsam asperiores sunt perspiciatis illo atque?",
        },
        {
            image: "src/assets/person-3.jpg",
            name: "John Smith",
            position: "Designation here",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda earum ea reprehenderit explicabo ullam quis itaque commodi doloremque nostrum doloribus, qui et perferendis veritatis maiores omnis. Distinctio voluptates aspernatur facere eligendi laboriosam quis dolore et, necessitatibus iste repellendus incidunt consequuntur cumque ipsum tempora ipsam asperiores sunt perspiciatis illo atque?",
        },
    ]

    return (
        <div className="team">
            <h2 className='team-heading'>Team</h2>
            <p className="team-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatum, maiores dolorum ex voluptates vero praesentium mollitia ab. Ad, rem?</p>
            <div className="team-card">
                {team_data.map((d) => (
                    <div className="team-card-part">
                        <div className="card-profile">
                            <img src={d.image} alt="profile-image" className="profile-image"/>
                            <h3 className="profile-name">{d.name}</h3>
                            <h4 className="profile-position">{d.position}</h4>
                        </div>
                        <p>{d.description}</p>
                    </div>
                ))
                }
            </div>
            <div>
            {screenWidth <= 850 && ( <FooterTrendingMobile /> )}
            </div>
        </div>
    );
}

export default Team;