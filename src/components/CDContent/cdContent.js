// src/components/CreativeDirectionContent.jsx
import "./cdContent.css";
import React from "react";
import PhotoGrid from "../PhotoGrid";
import {
  willImages,
  frameworkImages,
  herImages,
  nadishaImages,
  jinxImages,
  scottyImages,
  oldEnoughImages,
  feelYouImages,
} from "../photoData";

const CreativeDirectionContent = () => {
  return (
    <div className="creative-direction-container">
      {/* NADISHA */}
      <Project
        title="NADISHA"
        description="“Nadisha” is an editorial featured in MUSE Magazine Issue XXX that encapsulates my creative journey over the past four years. It’s a celebration of pushing boundaries, embracing the unconventional, and giving myself permission to get weird."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Videography: Hadleigh Green",
          "Make Up Artist: Khush Sagar",
          "Model: Nadisha Gautam",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={nadishaImages}
        smallScreenImages={[
          nadishaImages[0],
          nadishaImages[1],
          nadishaImages[3],
          nadishaImages[2],
          nadishaImages[4],
        ]}
      />

      {/* JINX */}
      <Project
        title="JINX"
        description="“JINX” is an upcoming band I had the privilege of meeting and photographing as they headlined MUSE Magazine's biannual concert, MINI DESK."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Videography: Hadleigh Green",
          "Make Up Artist: Anika Tasneem",
          "Band: JINX",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={jinxImages}
      />

      {/* MEET SCOTTY */}
      <Project
        title="Meet Scotty"
        description="“Meet Scotty” is an editorial featuring Scott Dias Fordham, an emerging DJ and creative. I had the chance to ask him a few questions about his music and creative process. The shoot reflects his personality both on and off the decks."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Model: Scott Dias Fordham",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={scottyImages}
      />

      {/* Feel You */}
      <Project
        title="Feel You"
        description="“Feel You” is an editorial for MUSE Magazine’s annual Valentine’s Day zine. Part of the trilogy — Meet You, Feel You, and Know You — Feel You captures the euphoric essence of new love."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Models: Camden Szumlansk & Zahara Groenewald",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={feelYouImages}
        smallScreenImages={[
          feelYouImages[0],
          feelYouImages[1],
          feelYouImages[3],
          feelYouImages[2],
          feelYouImages[4],
        ]}
      />

      {/* OLD ENOUGH */}
      <Project
        title="Old Enough"
        description="“Old Enough” is an editorial for MUSE Magazine Issue XXIX. Growing up, I always heard the term “how old are you?” when acting “childish” - a question that often defined what we were allowed to do. “Old Enough” challenges that idea, celebrating the energy of childhood, reminding us that living fully has no age limit."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Videography: Hadleigh Green",
          "Make Up Artist: Anika Tasneem",
          "Models: Camden Szumlansk, Zoë Mickelson & Kailey Curran",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={oldEnoughImages}
        smallScreenImages={[
          oldEnoughImages[0],
          oldEnoughImages[1],
          oldEnoughImages[3],
          oldEnoughImages[2],
          oldEnoughImages[4],
        ]}
      />

      {/* THIS IS WILL */}
      <Project
        title="This is Will"
        description="This is Will” is an editorial for MUSE Magazine that encapsulates Will's journey of self-discovery, pride, and identity. It highlights his defiance against societal norms, the importance of community support in finding comfort with one's identity, and his use of fashion as a tool for expression and confidence."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Make Up Artist: Khush Sagar",
          "Model: Will Finlayson",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={willImages}
      />

      {/* THE FRAMEWORK */}
      <Project
        title="The Framework"
        description="““The Framework” is an editorial for MUSE Magazine Issue XXVII which explores the importance of individuality, creativity and identity in a digital world. Despite the significant role technology plays in our lives, creativity and human individuality will always prevail. It explores how technology influences our identities but emphasizes that our unique, creative selves will always shine through."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Jade Robinson",
          "Videographer: Bronwyn Tyndall",
          "Make Up Artist: Khush Sagar",
          "Model: Avery Simard",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={frameworkImages}
      />

      {/* HER */}
      <Project
        title="Her"
        description="““Her” is an editorial for MUSE Magazine Issue XXVII which reinterprets women engaged in traditional domestic activities with a fantastical twist. By infusing an otherworldly aesthetic, the shoot challenges gender norms, underscoring these roles are not inherently bound to women."
        credits={[
          "Creative Director: Nadisha Gautam",
          "Photographer: Cat Rose",
          "Videographer: Bronwyn Tyndall",
          "Make Up Artist: Khush Sagar",
          "Model: Maya Elliot & Ying Feng",
          "Graphic Designer: Nadisha Gautam",
        ]}
        images={herImages}
      />
    </div>
  );
};

// Reusable sub-component for each editorial
const Project = ({
  title,
  description,
  credits,
  images,
  smallScreenImages,
}) => (
  <div className="project">
    <p className="heading">{title}</p>
    <hr className="line" />
    <div className="row">
      <div className="cdGrid">
        <p>{description}</p>
        <div className="credits-div">
          <div className="credits">
            {credits.map((credit, i) => (
              <p key={i}>{credit}</p>
            ))}
          </div>
        </div>
        <div className="content">
          <PhotoGrid images={images} smallScreenImages={smallScreenImages} />
        </div>
      </div>
    </div>
  </div>
);

export default CreativeDirectionContent;
