import React from "react";
import TeamCard from "./TeamCard/TeamCard";
import "./TeamSection.scss"
function TeamSection() {
  return (
    <div className="team">
      <div className="team_container">
        <div className="team_container_head">
          <p>TEAM</p>
          <h6>Leadership</h6>
        </div>
        <div className="team_container_cards">
          <TeamCard
            image={
              "https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp"
            }
            name={"John Rooster"}
            role={"CO-FOUNDER, PRESIDENT"}
            desc={
              "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur."
            }
          />
          <TeamCard
            image={
              "https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp"
            }
            name={"John Rooster"}
            role={"CO-FOUNDER, PRESIDENT"}
            desc={
              "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur."
            }
          />
          <TeamCard
            image={
              "https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp"
            }
            name={"John Rooster"}
            role={"CO-FOUNDER, PRESIDENT"}
            desc={
              "Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
