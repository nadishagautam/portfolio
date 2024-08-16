import "./softwareContent.css";

const SoftwareContent = () => {
  return (
    <div className="creative-direction-container">
      <div className="project">
        <p className="heading">House Price Predictor</p>
        <hr className="line"></hr>
        <div className="row">
          <div className="grid">
            <div className="empty"> </div>
            <div className="project-summary">
              I implemented AWS Linear Learner Regression with data
              preprocessing for predicting house prices. With hyperparameter
              tuning, I significantly improved the model's performance by 15%,
              ensuring the model's optimal adaptability to diverse datasets. I
              also constructed a comprehensive web interface using AWS Cloud9
              and Flask. This interface transmits user inputs to the SageMaker
              endpoint, facilitating real-time model predictions. Users can
              enter various parameters related to house prices and instantly
              receive predictions. This tool empowers users, particularly in the
              real estate market, by enabling informed decision-making based on
              accurate and up-to-date data.
            </div>
            
            <div className="heading2"> TECHNOLOGIES USED</div>
            <div className="project-summary">
              <div className="tech-container">
                <div className="tech"> Python</div>
                <div className="tech"> AWS SageMaker</div>
                <div className="tech pink"> Pandas</div>
                <div className="tech"> NumPy</div>
                <div className="tech"> AWS SageMaker Tuning Jobs</div>
                <div className="tech"> Flask</div>
                <div className="tech"> AWS Cloud9</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <p className="heading">Sentiment Analysis on Public Outrage</p>
        <hr className="line"></hr>
        <div className="row">
          <div className="grid">
          <div className="empty"> </div>
            <div className="project-summary">
              The project involves developing a Python program that analyzes
              public outrage events on Reddit using natural language processing
              (NLP) techniques. By accessing comments related to contentious
              topics via the Reddit API, the program cleans and filters the
              data, achieving a 95% accuracy in removing irrelevant and toxic
              content. Advanced NLP methods such as tokenization, TF-IDF, and
              topic modeling are applied to extract significant themes and
              recurring issues from the comments. This analysis provides
              organizations with deeper insights into public sentiment, enabling
              them to craft more effective responses or apologies by addressing
              the core concerns and points of outrage identified in the data.
              This project was presented at the Canadian Undergraduate AI
              Conference, showcasing its relevance and impact in understanding
              and responding to public sentiment.
            </div>

            <div className="heading2"> TECHNOLOGIES USED</div>
            <div className="project-summary">
              <div className="tech-container">
                <div className="tech"> Python</div>
                <div className="tech pink"> NLTK</div>
                <div className="tech"> spaCy</div>
                <div className="tech pink"> Scikit-learn</div>
                <div className="tech"> Reddit APIs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project">
        <p className="heading">Torvan Medical Auto Sink</p>
        <hr className="line"></hr>
        <div className="row">
          <div className="grid">
          <div className="empty"> </div>
          <div className="project-summary">
              I contributed to the development of a new medical Auto Sink
              device, collaborating closely with Torvan Medical’s engineering
              team. My responsibilities included designing a user interface with
              over 40 screens using QML and Figma. For the backend, I engineered
              robust logic using C++ and SQL to handle data storage efficiently,
              and integrated the system with hardware components via CANopen,
              ensuring smooth operation and reliable communication. To manage
              different software states and transitions, I implemented a state
              design pattern, which enhanced the reliability of the system.
            </div>

            <div className="heading2"> TECHNOLOGIES USED</div>
            <div className="project-summary">
              <div className="tech-container">
                <div className="tech pink"> QML</div>
                <div className="tech"> Figma</div>
                <div className="tech"> C++</div>
                <div className="tech"> SQL</div>
                <div className="tech"> CANopen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareContent;
