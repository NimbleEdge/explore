import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import breathingShape from "../../assets/animations/breathing-shape.json";
import pulse from "../../assets/animations/pulsating.json";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark, docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { darkula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { tomorrowNightBright } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { tomorrowNight } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { anOldHope } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { gruvboxDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function Homepage() {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [triggerAnimation2, setTriggerAnimation2] = useState(false);
  const [triggerAnimation3, setTriggerAnimation3] = useState(false);
  const [triggerAnimation4, setTriggerAnimation4] = useState(false);
  const [triggerAnimation5, setTriggerAnimation5] = useState(false);
  const codeString = ` import * as React from 'react';
  import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
  import { NativeModules } from 'react-native';
  const { NimbleNet } = NativeModules;
  
  export default function App() {
    const inputArrLength = 330;
    const productArrLength = 30;
  
    const [initialize, setInitialize] = React.useState(false);
    const [resultPredicted, setResultPredicted] = React.useState("Tap on predict");
  
    let contestRecommendationModel = "d11_Contest_Ranking"
  
    let userClicksTable = "UserClicks"  // Table Name to be used to store data for on device Feature Generation
    let deviceId = "sampledevice" // A unique device ID to identify to be passed per device/User 
    let clientId = "testclient"  // Unique identifer for the client onboarded to NimbleEdge Platform
    let clientSecret = "samplekey123"  // Secret identifier for the client to be kept safe and passed on to SDK to validate whether requests are coming from genuine client devices and NOT some unknown device
  
    const fetchContestsInput = () => {
      return Array.from(Array(productArrLength)).map((_x) => ({
        contestType: 0,
        productid: 1,
        roundid: 2,
        winnerPercent: 3,
        prizeAmount: 4,
        entryFee: 5,
        currentSize: 2437659,
        noofwinners: 43570,
        multipleentry: 1,
        actualcontestSize: 3465
      }));
    };
  
    const generateRandomInput = () => {
      return Array.from(Array(inputArrLength)).map((_x) => Math.random() * 15);
    };
  
    let events = [
      {
        'roundid': 45610, 'productid': 14929, 'currentSize': 397743, 'noofwinners': 3977433, 'entryFee': 49, 'prizeAmount': 800000, 'contestType': 'public', 'actualcontestSize': 5986394,
        'currentAccountBalance': 59.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 59.0, 'currentCashBonusBalance': 0.0
      },
      {
        'roundid': 45610, 'productid': 11840, 'currentSize': 1857749, 'noofwinners': 1857749, 'entryFee': 25, 'prizeAmount': 100000, 'contestType': 'public', 'actualcontestSize': 12195,
        'currentAccountBalance': 59.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 59.0, 'currentCashBonusBalance': 0.0
      },
      {
        'roundid': 45612, 'productid': 15554, 'currentSize': 7508, 'noofwinners': 7508, 'entryFee': 49, 'prizeAmount': 2500000, 'contestType': 'public', 'actualcontestSize': 2993197,
        'currentAccountBalance': 59.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 59.0, 'currentCashBonusBalance': 0.0
      },
      {
        'roundid': 45610, 'productid': 14929, 'currentSize': 3977433, 'noofwinners': 3977433, 'entryFee': 49, 'prizeAmount': 800000, 'contestType': 'public', 'actualcontestSize': 5986394,
        'currentAccountBalance': 108.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 98.0, 'currentCashBonusBalance': 10.0
      },
      {
        'roundid': 45614, 'productid': 13579, 'currentSize': 1224, 'noofwinners': 7637, 'entryFee': 249, 'prizeAmount': 2500000, 'contestType': 'special', 'actualcontestSize': 12244,
        'currentAccountBalance': 509.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 190.0, 'currentCashBonusBalance': 16.0
      },
      {
        'roundid': 45610, 'productid': 11297, 'currentSize': 24, 'noofwinners': 16, 'entryFee': 9999, 'prizeAmount': 200000, 'contestType': 'special', 'actualcontestSize': 24,
        'currentAccountBalance': 456.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 290.0, 'currentCashBonusBalance': 15.0
      },
      {
        'roundid': 45614, 'productid': 13294, 'currentSize': 215, 'noofwinners': 4597, 'entryFee': 15, 'prizeAmount': 100000, 'contestType': 'special', 'actualcontestSize': 7450,
        'currentAccountBalance': 10.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 1.0, 'currentCashBonusBalance': 108.0
      },
      {
        'roundid': 45610, 'productid': 13579, 'currentSize': 1224, 'noofwinners': 7637, 'entryFee': 249, 'prizeAmount': 2500000, 'contestType': 'special', 'actualcontestSize': 12244,
        'currentAccountBalance': 1000.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 968.0, 'currentCashBonusBalance': 100.0
      },
      {
        'roundid': 45614, 'productid': 13579, 'currentSize': 1225, 'noofwinners': 7637, 'entryFee': 249, 'prizeAmount': 2500000, 'contestType': 'special', 'actualcontestSize': 12244,
        'currentAccountBalance': 1000.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 968.0, 'currentCashBonusBalance': 100.0
      },
      {
        'roundid': 45610, 'productid': 13579, 'currentSize': 1228, 'noofwinners': 7637, 'entryFee': 249, 'prizeAmount': 2500000, 'contestType': 'special', 'actualcontestSize': 12244,
        'currentAccountBalance': 1000.0, 'currentDepositBalance': 0.0, 'currentWinningsBalance': 968.0, 'currentCashBonusBalance': 100.0
      }
    ]
    // Computation of winnerPercent to be done in the application before adding event to the NimbleSDK
    events.forEach(et => {
      et['winnerPercent'] = et['noofwinners'] / et['actualcontestSize']
    })
  
    // Helper function
    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  
  
    const addEventToDB = (index) => {
  
      NimbleNet.addEvent(
        events[index],
        userClicksTable,
        (status) => { console.log("Added event to DB", status) }
      );
    }
  
    let buckets = {
      "ef_bucket": [[0, 20, 1], [20, 40, 2], [40, 60, 3], [60, 100, 4], [100, 500, 5], [500, 2000, 6], [2000, 12000, 7]],
      "pa_bucket": [[0, 50, 1], [50, 100, 2], [100, 500, 3], [500, 1500, 4], [1500, 5000, 5], [5000, 500000, 6], [500000, 5000000, 7], [5000000, 50000000, 8], [50000000, 500000000, 9]],
      "wp_bucket": [[0.0, 0.2, 1], [0.2, 0.3, 2], [0.3, 0.5, 3], [0.5, 0.6, 4], [0.6, 0.7, 5], [0.7, 1.01, 6]]
    }
  
    function get_bucket(value, buckets) {
      buckets.forEach(bucket => {
        if (value >= bucket[0] && value < bucket[1])
          return bucket[2]
      })
      return 0
    }
  
  
    // Function call to get output from the inference
    const predictResults = () => {
      // input to be constructed to pass to the model directly 
      let flattenedInputToModel = []
  
      const contestsData = fetchContestsInput();
      let index = 0;
  
      contestsData.forEach(data => {
  
        // Transformation done for each contest to create model input. All transformation for each contest is flattened.
        flattenedInputToModel.push(index)
        let rank = index + 1
        index++
        flattenedInputToModel.push(rank)
        flattenedInputToModel.push(get_bucket(data['entryFee'], buckets['ef_bucket']))
        flattenedInputToModel.push(get_bucket(data['prizeAmount'], buckets['pa_bucket']))
        flattenedInputToModel.push(get_bucket(data['noofwinners'] / data['actualcontestSize'], buckets['ef_bucket']))
        flattenedInputToModel.push(data['contestType'])
        flattenedInputToModel.push(data['currentSize'])
        flattenedInputToModel.push(data['actualcontestSize'])
        flattenedInputToModel.push(data['entryFee'])
        flattenedInputToModel.push(data['prizeAmount'])
        flattenedInputToModel.push(data['noofwinners'] / data['actualcontestSize'])
      })
  
      NimbleNet.predictDictionary(
        contestRecommendationModel, // modelName
        {
          "inputsToModel": { data: flattenedInputToModel, type: 'double' },
        },
        {
          "inputToProcessor": contestsData
        },
        (_result: any, data: { [x: string]: any }) => {
          if (data?.status === 'Success') {
            console.log(data)
            console.log('Predict Success', data?.outputs);
            // "variable" is the outputName fixed in modelConfig(declared and defined by the ML Team)
            setResultPredicted(data?.outputs["variable"]["data"].toString());
          } else {
            console.log('Predict Failure', data);
            setResultPredicted("Predict Failure");
          }
        }
      );
    };
  
    React.useEffect(() => {
      NimbleNet.initializeAsync(
        clientId, // clientId
        clientSecret, // client Secret
        [contestRecommendationModel], // models to run
        'http://43.205.11.213', // hostname to be set to contact NimbleEdge servers.   Default is https://api.nimbleedgehq.ai
        deviceId, // deviceId
        true, // debug flag to enable additional logging. To be used during test to gather more information
        [], // featureStores
        [   // databaseConfig
          {
            tableName: userClicksTable,
            schema: {
              roundid: 'INT',
              productid: 'INT',
              currentSize: 'INT',
              noofwinners: 'INT',
              entryFee: 'INT',
              prizeAmount: 'INT',
              contestType: 'varchar(20)',
              actualcontestSize: 'INT',
              currentAccountBalance: 'FLOAT',
              currentDepositBalance: 'FLOAT',
              currentWinningsBalance: 'FLOAT',
              currentCashBonusBalance: 'FLOAT',
              winnerPercent: 'FLOAT',  // Computed by Frontend and provided to nimbleEdge SDK
            },
            expiryInMins: 60,
          },
        ],
        (result: string) => {
          console.log('Initialize Success from React Native', result);
          if (result === 'Success') {
            setInitialize(true);
          }
        }
      );
    }, []);
  
    return (
      <View style={styles.flexContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>First Fragment</Text>
        </View>
        <View style={styles.container}>
          <Image
            source={require('./images/logo.jpg')}
            style={styles.img}
            alt="logo"
          />
  
          <View style={styles.resultContainer}>
            <Text style={styles.title}>{'Output'}</Text>
            <Text style={styles.subTitle}>
              {resultPredicted}
            </Text>
          </View>
  
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              predictResults();
            }}
          //disabled={!initialize}
          >
            <Text style={styles.btnText}>{'PREDICT'}</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              let index = randomIntFromInterval(0, events.length - 1)
              addEventToDB(index);
            }}
          //disabled={!initialize}
          >
            <Text style={styles.btnText}>{'ADD EVENT'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    flexContainer: {
      flex: 1,
      backgroundColor: 'white',
    },
    headerContainer: {
      backgroundColor: '#3e3b4e',
      padding: 16,
    },
    headerText: {
      color: 'white',
      fontSize: 18,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    img: {
      width: 170,
      height: 170,
      borderRadius: 170,
      overflow: 'hidden',
    },
    resultContainer: {
      width: '100%',
      paddingHorizontal: '10%',
    },
    title: {
      fontWeight: '800',
      fontSize: 20,
      color: 'black',
    },
    subTitle: {
      fontSize: 16,
      color: 'black',
      marginTop: '4%',
    },
    btn: {
      borderRadius: 6,
      backgroundColor: '#3e3b4e',
    },
    btnText: {
      fontWeight: '700',
      color: 'white',
      alignSelf: 'center',
      fontSize: 16,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
  });
  `;

  useEffect(() => {
    if (triggerAnimation3) {
      var body = document.querySelector("body"),
        bar = document.querySelector(".progress-bar"),
        counter = document.querySelector(".count"),
        i = 0;

      (function draw() {
        if (i <= 100) {
          requestAnimationFrame(draw);
          bar.style.width = i + "%";
          counter.innerHTML = Math.round(i) + "%";

          i = i + 0.8;
        } else {
          bar.className += " done";
          setTimeout(() => {
            setTriggerAnimation4(true);
          }, 300);
          setTimeout(() => {
            setTriggerAnimation5(true);
          }, 800);
        }
      })();
    }
  }, [triggerAnimation3]);

  return (
    <div className="bg-slate-800 w-screen h-screen">
      {!triggerAnimation5 && (
        <div>
          <section
            className={`bg-backgroundColorLottie relative ${
              triggerAnimation ? "section-1" : ""
            }`}
          >
            <div className="bg-backgroundColor absolute w-screen h-screen opacity-50 z-10 rounded-3xl"></div>
            <Lottie
              className="h-screen"
              animationData={breathingShape}
              loop={true}
            />
            <div className="absolute container center-absolute z-20">
              <p className="title-local text-8xl text-white text-center font-bold leading-none">
                <span>SUPERCHARGE</span>
                <span>YOUR APPS WITH</span>
                <span className="nimbleedge-gradient">NIMBLEEDGE</span>
              </p>
              <p className="subtitle-local text-sm text-secondaryTextColor text-center font-bold leading-tight">
                <span className="mt-6">
                  Proceed to witness firsthand how Nimbleedge empowers
                  applications to achieve maximum efficiency
                </span>
              </p>
            </div>
            <p
              onClick={() => {
                setTriggerAnimation(true);
              }}
              className="link shiny-button-local z-20 text-secondaryTextColor text-lg absolute left-1/2 bottom-28 -translate-x-1/2 tracking-widest cursor-pointer"
            >
              PROCEED
            </p>
            <div className="absolute rotate-180 left-16 top-1/2 -translate-y-1/2">
              <Lottie className="h-8 w-8" animationData={pulse}></Lottie>
              <p
                style={{ writingMode: "vertical-rl" }}
                className="text-secondaryTextColor text-xs mx-auto"
              >
                Bandwidth available
              </p>
            </div>
          </section>

          {triggerAnimation && (
            <section
              className={
                "section-2 w-screen h-screen bg-red-500 z-50 absolute top-0 left-0 rounded-3xl"
              }
            >
              <p className="text-6xl filler-title-local text-center m-40">
                <span>select the usecase that fits the best</span>
              </p>
            </section>
          )}

          {triggerAnimation && (
            <section
              className={`${
                triggerAnimation2 ? "section-1" : "section-3"
              } bg-backgroundColor h-screen w-screen absolute top-0 left-0`}
            >
              <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative grid gap-2 grid-cols-2 grid-rows-2">
                <div
                  className="link choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end"
                  onClick={() => {
                    setTriggerAnimation2(true);
                  }}
                >
                  <img
                    src="/assets/images/ecom-usecase.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                      E-COM
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>

                <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
                  <img
                    src="/assets/images/gaming-usecase.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                      GAMING
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>

                <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end">
                  <img
                    src="/assets/images/media-usecase.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                      MEDIA
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>

                <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
                  <img
                    src="/assets/images/fintech-usecase.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-semibold z-10">
                      FINTECH
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {triggerAnimation2 && (
            <section
              className={
                "section-2 w-screen h-screen bg-red-500 z-50 absolute top-0 left-0 rounded-3xl"
              }
            >
              <p className="text-6xl filler-title-local text-center m-40">
                <span>select the ML model to use</span>
              </p>
            </section>
          )}

          {triggerAnimation2 && (
            <section
              className={`${
                triggerAnimation3 ? "section-1" : "section-3"
              } bg-backgroundColor h-screen w-screen absolute top-0 left-0`}
            >
              <div className="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 relative grid gap-2 grid-cols-2 grid-rows-2">
                <div
                  className="link choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end"
                  onClick={() => setTriggerAnimation3(true)}
                >
                  <img
                    src="/assets/images/models/ml-model-1.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                      Checkout
                      <br />
                      Recommendation
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>

                <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
                  <img
                    src="/assets/images/models/ml-model-2.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                      Discount
                      <br />
                      Matcher
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>

                <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-end">
                  <img
                    src="/assets/images/models/ml-model-3.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-medium z-10">
                      Route
                      <br />
                      Picker
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>

                <div className="choice-cell container w-1/2 relative max-w-xs rounded-2xl justify-self-start">
                  <img
                    src="/assets/images/models/ml-model-4.jpg"
                    className="w-full h-full rounded-2xl choice-cell-img"
                  />
                  <div className="choice-cell-hidden">
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-semibold z-10">
                      Fraud
                      <br />
                      Detection
                    </p>
                    <div className="bg-black opacity-80 w-full h-full absolute rounded-2xl top-0 left-0" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {triggerAnimation3 && (
            <section
              className={`${
                triggerAnimation4 ? "expand-to-emulator-screen" : "section-4"
              } bg-backgroundColor h-screen w-screen absolute top-0 left-0`}
            >
              <div className="progress-bar z-50"></div>
              <h1 className="count"></h1>
            </section>
          )}
        </div>
      )}

      {triggerAnimation5 && (
        <div className="w-screen h-screen bg-secondaryBackgroundColor relative">
          <div className="playground flex bg-backgroundColor absolute m-10 left-0 right-0 top-0 bottom-0 rounded-2xl divide-x divide-gray-600">
            <div className="code-pad h-full bg-backgroundColor flex-1 rounded-l-2xl overflow-y-scroll">
              <SyntaxHighlighter
                customStyle={{
                  fontSize: "14px",
                  fontFamily: "monospace",
                  whiteSpace: "pre",
                  padding: "0px",
                }}
                useInlineStyles={true}
                wrapLines={true}
                wrapLongLines={false}
                showLineNumbers={true}
                showInlineLineNumbers={true}
                language="typescript"
                style={anOldHope}
                lineNumberStyle={{ fontSize: "10px" }}
              >
                {codeString}
              </SyntaxHighlighter>
              {/* <code contentEditable="true">
                <p>function add(a, b) {"{"}</p>
                <p> //interesting fun</p>
                <p> return a + b;</p>
                <p>{"}"}</p>
              </code> */}
            </div>
            <div className="emulator-holder h-full bg-backgroundColor flex-1 rounded-r-2xl relative">
              <img
                src="/assets/images/emulator/iphone-mockup.png"
                className="emulator absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
