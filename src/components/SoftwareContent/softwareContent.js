import "./softwareContent.css";

const Project = ({ title, description, technologies }) => (
  <div className="project">
    <p className="heading">{title}</p>
    <hr className="line" />
    <div className="row">
      <div className="grid">
        <div className="empty" />
        <div className="project-summary">{description}</div>

        <div className="heading2">TECHNOLOGIES USED</div>
        <div className="project-summary">
          <div className="tech-container">
            {technologies.map((tech, idx) => (
              <div key={idx} className={`tech ${tech.highlight ? "pink" : ""}`}>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SoftwareContent = () => {
  return (
    <div className="creative-direction-container">
      <Project
        title="HeartBeats"
        description={
          <>
            HeartBeats is a song intensity classification tool that uses Spotify
            audio features to recommend music based on listener activity. After
            preprocessing and standardizing attributes like tempo, energy,
            loudness, and valence, songs are clustered into low, medium, or high
            intensity using KMeans. A neural network, trained with ReLU and
            softmax layers, classifies songs and is evaluated through accuracy
            metrics and a confusion matrix. The system enables real-time
            predictions and links intensity levels to heart rate ranges,
            aligning music with the listener’s physical state.
          </>
        }
        technologies={[
          { name: "Python" },
          { name: "Pandas" },
          { name: "scikit-learn" },
          {
            name: "Neural Networks with ReLU and Softmax activations",
            highlight: true,
          },
          { name: "He Initialization" },
        ]}
      />

      <Project
        title="House Price Predictor"
        description={
          <>
            The House Price Predictor utilizes AWS Linear Learner Regression
            with comprehensive data preprocessing to estimate house prices.
            Through effective hyperparameter tuning, the model's performance
            improved by 15%, enhancing its adaptability across diverse datasets.
            A web interface - built using AWS Cloud9 and Flask - connects to a
            SageMaker endpoint, enabling real-time predictions. Users can input
            various housing parameters and receive immediate price estimates,
            supporting informed decision-making within the real estate market.
          </>
        }
        technologies={[
          { name: "Python" },
          { name: "AWS SageMaker" },
          { name: "Pandas", highlight: true },
          { name: "NumPy" },
          { name: "AWS SageMaker Tuning Jobs" },
          { name: "Flask" },
          { name: "AWS Cloud9" },
        ]}
      />

      <Project
        title="Sentiment Analysis on Public Outrage"
        description={
          <>
            The Public Outrage Sentiment Analysis Tool is a Python-based system
            that investigates public outrage on Reddit using advanced NLP
            techniques. It collects user comments via the Reddit API and
            preprocesses the data—filtering noise and toxic language with 95%
            accuracy. The cleaned data is then analyzed through tokenization,
            TF-IDF, and topic modeling to identify key themes and recurring
            concerns. This analysis helps organizations better understand public
            sentiment and craft targeted responses addressing core issues. The
            project was presented at the Canadian Undergraduate AI Conference,
            highlighting its academic and practical impact in social media
            analysis and crisis communication.
          </>
        }
        technologies={[
          { name: "Python" },
          { name: "NLTK", highlight: true },
          { name: "spaCy" },
          { name: "scikit-learn", highlight: true },
          { name: "Reddit APIs" },
        ]}
      />

      <Project
        title="Torvan Medical AutoSink"
        description={
          <>
            This project involved developing software for a new medical Auto
            Sink device in collaboration with Torvan Medical’s engineering team.
            Key responsibilities included designing a user interface with over
            40 screens using QML and Figma, engineering backend logic with C++
            and SQL for efficient data handling, and integrating the system with
            hardware components via CANopen for seamless communication. A state
            design pattern was also implemented to manage software states and
            transitions.
          </>
        }
        technologies={[
          { name: "QML", highlight: true },
          { name: "Figma" },
          { name: "C++" },
          { name: "SQL" },
          { name: "CANopen" },
        ]}
      />
    </div>
  );
};

export default SoftwareContent;
