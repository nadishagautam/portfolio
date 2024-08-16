import "./cdContent.css";
import React from "react";
import FadeInSection from "../FadeInSection"; 
import Will01 from "../../assets/images/Will/MUSE-Will-01.jpg";
import Will02 from "../../assets/images/Will/MUSE-Will-02.jpg";
import Will03 from "../../assets/images/Will/MUSE-Will-03.jpg";
import Will04 from "../../assets/images/Will/MUSE-Will-04.jpg";
import Will05 from "../../assets/images/Will/MUSE-Will-05.jpg";
import Will06 from "../../assets/images/Will/MUSE-Will-06.jpg";
import Framework01 from "../../assets/images/TheFramework/MUSE-Framework-01.jpg";
import Framework02 from "../../assets/images/TheFramework/MUSE-Framework-02.jpg";
import Framework03 from "../../assets/images/TheFramework/MUSE-Framework-03.jpg";
import Framework04 from "../../assets/images/TheFramework/MUSE-Framework-04.jpg";
import Framework05 from "../../assets/images/TheFramework/MUSE-Framework-05.jpg";
import Framework06 from "../../assets/images/TheFramework/MUSE-Framework-06.jpg";
import Her01 from "../../assets/images/Her/MUSE-Her-01.png";
import Her02 from "../../assets/images/Her/MUSE-Her-02.png";
import Her03 from "../../assets/images/Her/MUSE-Her-03.png";
import Her04 from "../../assets/images/Her/MUSE-Her-04.png";
import Her05 from "../../assets/images/Her/MUSE-Her-05.png";
import Fluent01 from "../../assets/images/Fluent/MUSE-Fluent-01.JPG";
import Fluent02 from "../../assets/images/Fluent/MUSE-Fluent-02.JPG";
import Fluent03 from "../../assets/images/Fluent/MUSE-Fluent-03.JPG";
import Fluent05 from "../../assets/images/Fluent/MUSE-Fluent-05.JPG";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CreativeDirectionContent = () => {
  return (
    <div className="creative-direction-container">
      <div className="project">
        <p className="heading">This is Will</p>
        <hr className="line" />
        <div className="row">
          <div className="cdGrid">
            <p>
              “This is Will” is an editorial for MUSE Magazine that encapsulates
              Will's journey of self-discovery, pride, and identity. It
              highlights his defiance against societal norms, the importance of
              community support in finding comfort with one's identity, and his
              use of fashion as a tool for expression and confidence.
            </p>
            <div className="credits-div">
              <div className="credits">
                <p> Creative Director: Nadisha Gautam</p>
                <p> Photographer: Jade Robinson</p>
                <p> Make Up Artist: Khush Sagar</p>
                <p> Model: Will Finlayson</p>
              </div>
            </div>

            <div className="content">
              <div className="photo-grid">
                <FadeInSection>
                  <LazyLoadImage src={Will01} alt="Will 01" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Will02} alt="Will 02" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Will03} alt="Will 03" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Will04} alt="Will 04" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Will05} alt="Will 05" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Will06} alt="Will 06" />
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <p className="heading">The Framework</p>
        <hr className="line" />

        <div className="row">
          <div className="cdGrid">
            <p>
              “The Framework” is an editorial for MUSE Magazine Issue XXVII
              which explores the importance of individuality, creativity, and
              identity in a digital world. Despite the significant role
              technology plays in our lives, creativity and human individuality
              will always prevail. It explores how technology influences our
              identities but emphasizes that our unique, creative selves will
              always shine through.
            </p>
            <div className="credits-div">
              <div className="credits">
                <p> Creative Director: Nadisha Gautam</p>
                <p> Photographer: Jade Robinson</p>
                <p> Videographer: Bronwyn Tyndall </p>
                <p> Make Up Artist: Khush Sagar</p>
                <p> Model: Avery Simard</p>
              </div>
            </div>

            <div className="content">
              <div className="photo-grid">
                <FadeInSection>
                  <LazyLoadImage src={Framework01} alt="Framework 01" effect="blur" />
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Framework02} alt="Framework 02" effect="blur" />
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Framework05} alt="Framework 05" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Framework03} alt="Framework 03" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Framework04} alt="Framework 04" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Framework06} alt="Framework 06" effect="blur"/>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <p className="heading">Her</p>
        <hr className="line" />
        <div className="row">
          <div className="cdGrid">
            <p>
              “Her” is an editorial for MUSE Magazine Issue XXVII which
              reinterprets women engaged in traditional domestic activities with
              a fantastical twist. By infusing an otherworldly aesthetic, the
              shoot challenges gender norms, underscoring these roles are not
              inherently bound to women.
            </p>
            <div className="credits-div">
              <div className="credits">
                <p> Creative Director: Nadisha Gautam</p>
                <p> Photographer: Cat Rose</p>
                <p> Videographer: Bronwyn Tyndall </p>
                <p> Make Up Artist: Khush Sagar</p>
                <p> Model: Maya Elliot & Ying Feng</p>
              </div>
            </div>

            <div className="content">
              <div className="photo-grid">
                <FadeInSection>
                  <LazyLoadImage src={Her01} alt="Her 01" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Her02} alt="Her 02" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Her03} alt="Her 03" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Her04} alt="Her 04" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Her05} alt="Her 05" effect="blur"/>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <p className="heading">Fluent</p>
        <hr className="line" />
        <div className="row">
          <div className="cdGrid">
            <p>
              “Fluent” is an editorial for MUSE Magazine that highlights the
              beauty and fashion heritage of South Asia. The editorial
              celebrates the mesmerizing tapestry of colors, fabrics, and
              craftsmanship that defines South Asian fashion.
            </p>
            <div className="credits-div">
              <div className="credits">
                <p> Creative Director: Nadisha Gautam</p>
                <p> Photographer: Bronwyn Tyndall</p>
                <p> Videographer: Bronwyn Tyndall </p>
                <p> Model: Nadisha Gautam & Aaliyah Mansuri</p>
              </div>
            </div>

            <div className="content">
              <div className="photo-grid">
                <FadeInSection>
                  <LazyLoadImage src={Fluent01} alt="Fluent 01" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Fluent02} alt="Fluent 02" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Fluent03} alt="Fluent 03" effect="blur"/>
                </FadeInSection>
                <FadeInSection>
                  <LazyLoadImage src={Fluent05} alt="Fluent 05" effect="blur"/>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeDirectionContent;
