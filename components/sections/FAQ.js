import faqStyles from "@styles/sections/FAQ.module.css";

const questions = [
  {
    question: "WHAT IS A HACKATHON?",
    answer:
      "A hackathon is a short event focused on creating projects that typically have something to do with computer engineering or computer science.",
  },
  {
    question: "WHO CAN ATTEND?",
    answer:
      "Students who are currently enrolled at Bronx Science are allowed to attend the hackathon!",
  },
  {
    question: "HOW LARGE CAN MY TEAM BE?",
    answer:
      "Teams may not have more than 4 members. Students are also welcome to work solo.",
  },
  {
    question: "CAN I START WORKING IN ADVANCE?",
    answer:
      "To keep the competition fair, all code used in your project must be written at the hackathon.",
  },
];

const FAQ = () => {
  return (
    <div className={faqStyles.FAQdiv} id="faq">
      <div>
        <h1 className={faqStyles.title}>faq</h1>
      </div>
      <div className={faqStyles.questionsDiv}>
        {questions.map((ques, i) => (
          <div key={i}>
            <h1 className={faqStyles.question}>{ques.question}</h1>
            <p className={faqStyles.answer}>{ques.answer}</p>
          </div>
        ))}
        <div>
          <h1 className={faqStyles.question}>WHAT CAN I CREATE?</h1>
          <p className={faqStyles.answer}>
            You can create anything you want, as long as your hack does not
            violate our{" "}
            <a
              href="https://docs.google.com/document/d/1fMx-8iApjgRuAs0mH2T4yCz6WGrwTwNGHS854C-fmKQ/edit?usp=sharingcode"
              target="_blank"
              rel="noreferrer"
            >
              <u>code of conduct.</u>
            </a>{" "}
          </p>
        </div>
        <div>
          <h1 className={faqStyles.question}>WHEN IS ATOMHACKS?</h1>
          <p className={faqStyles.answer}>March 26th, 2022!</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
