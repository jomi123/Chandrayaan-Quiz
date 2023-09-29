var chalk = require("chalk");
var readline = require("readline-sync");
var userName = readline.question("Please Enter your name: ");
var score = 0;
console.log(
  chalk.magenta("\n\nHello " + userName) +
    "\n******************************************************************************************************************\n" +
    chalk.bold(
      "\n\nPlease read the instructions written in README.md file carefully before starting the quiz\n\n"
    ) +
    chalk.green("\n\nWelcome to Chandrayaan 3 Mission Quiz!!!.") +
    chalk.bgCyan("\n\n\nALL THE BEST LETS BEGIN!!!!\n\n\n")
);

var qnAns = [
  {
    qn: "1. Chandrayaan-3 has been launched form which of the following centres?",
    options: {
      a: "Vikram Sarabhai Space Centre",
      b: "Satish Dhawan Space Centre",
      c: "ISRO",
      d: "Dr. Abdul Kalam Island",
    },

    ans: "b",
  },

  {
    qn: "2. Which launching vehicle is used in the launch of Chandrayaan-3?",
    options: {
      a: "GSLV",
      b: "ASLV",
      c: "PSLV",
      d: "SLV",
    },
    ans: "a",
  },
  {
    qn: "3. What is the mass of propulsion module used in Chnadrayaan-3?",
    options: {
      a: 2145,
      b: 2245,
      c: 2148,
      d: 2543,
    },
    ans: "c",
  },

  {
    qn: "4. The mission life of the Lander and Rover of Chandrayaan-3 equals to:",
    options: {
      a: "24 Earth Days",
      b: "16 Earth Days",
      c: "14 Earth Days",
      d: "20 Earth Days",
    },
    ans: "c",
  },

  {
    qn: "5. The Chandrayaan-3 mission’s Lander is known as:",
    options: {
      a: "Vikram",
      b: "Bheem",
      c: "Pragyaan",
      d: "Dhruv",
    },
    ans: "a",
  },

  {
    qn: "6. Which part of the Moon is Chandrayaan-3 aiming to land near?",
    options: {
      a: "North Pole",
      b: "Equator",
      c: "South Pole",
      d: "Far Side",
    },
    ans: "c",
  },

  {
    qn: "7. When was Chandrayaan-3 launched?",
    options: {
      a: "14th August",
      b: "14th July",
      c: "30th June",
      d: "10th September",
    },
    ans: "b",
  },

  {
    qn: "8. What is the unique feature of Chandrayaan-3’s landing in comparison to other nation’s lunar missions?",
    options: {
      a: "landing on the dark side of the moon",
      b: "landing on the Moon’s far side",
      c: "landing on Moon’s North pole",
      d: "landing on Moon’s South pole",
    },
    ans: "d",
  },

  {
    qn: "9. Where is the ISRO Telemetry, Tracking and Command Network (ISTRAC) located?",
    options: {
      a: "New Delhi",
      b: "Mumbai",
      c: "Chennai",
      d: "Bengaluru",
    },
    ans: "d",
  },

  {
    qn: "10. Who is the director of the Chandrayaan-3 mission?",
    options: {
      a: "Veeramuthuvel",
      b: "M Vanitha",
      c: "K Sivan",
      d: "Ritu Karidhal",
    },
    ans: "d",
  },
];

function beginQuiz() {
  for (i = 0; i < qnAns.length; i++) {
    console.log("\n" + qnAns[i].qn + "\n");
    console.log(
      "a." +
        qnAns[i].options.a +
        "\n" +
        "b." +
        qnAns[i].options.b +
        "\n" +
        "c." +
        qnAns[i].options.c +
        "\n" +
        "d." +
        qnAns[i].options.d +
        "\n"
    );

    var userAns = readline.question("Enter your answer: ");
    if (userAns.toUpperCase() === qnAns[i].ans.toUpperCase()) {
      if (i <= 4) {
        score += 1000;
      } else {
        score += 2000;
      }
      console.log(
        chalk.green("\n\nCONGRATULATIONS!!YOUR ANSWER IS RIGHT") +
          "\n\nYour Amount is: " +
          score
      );

      if (i == 4) {
        console.log(
          chalk.bgBlue("CONGRATULATIONS YOU HAVE PASSED THE SAFE ZONE!!!")
        );
      }
    } else {
      console.log("\n\nSorry the answer is wrong");
      if (i >= 5) {
        console.log(
          chalk.green(
            "\n\nCONGRATULATIONS!! SINCE YOU CROSSED THE SAFE ZONE YOU WILL GET 5000 RUPEES"
          ) +
            "\n\nThe Game ends here. You were a great participant. \n\n" +
            chalk.red("Better luck next time\n\n")
        );
        process.exit(0);
      } else {
        console.log(
          "\nSorry to loose you.\n\n" + chalk.red("Better luck next time\n")
        );
        process.exit(0);
      }
    }
    if (i != 9) {
      // var userQuit = readline.question(
      //   "\n\nDo you want to continue?\n\nPRESS q TO QUIT FROM QUIZ.\n\nPress any other key to continue: "
      // );
      // if (userQuit.toUpperCase() === "q".toUpperCase()) {
      //   console.log("Your final amount=" + score);
      //   process.exit(0);
      // }

      if (!readline.keyInYN("\n\nDo you want to continue: ")) {
        console.log(
          "\n\nYour Final Amount is: " + score + "\n\nThe Quiz Ended"
        );
        process.exit(0);
      }
    }
  }

  if (i === 10) {
    console.log(
      chalk.bgMagentaBright("\nCONGRATULATIONS!!!YOU WON THE QUIZ.\n\n")
    );
  }
}

beginQuiz();
