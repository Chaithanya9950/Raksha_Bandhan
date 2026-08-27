/* =========================================================
   RAKSHABANDHAN WEBSITE — COMPLETE JAVASCRIPT
   SHEETS 1–26
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     1. SHEET FLOW
     ======================================================= */

  const SHEET_TIMINGS = {

    sheet1: { manual: true },

    sheet2: { next: "sheet3", delay: 15000 },
    sheet3: { next: "sheet4", delay: 10000 },
    sheet4: { next: "sheet5a", delay: 15000 },

    sheet5a: { next: "sheet5b", delay: 15000 },
    sheet5b: { next: "sheet5c", delay: 15000 },
    sheet5c: { next: "sheet6", delay: 15000 },

    sheet6: { next: "sheet7", delay: 20000 },
    sheet7: { next: "sheet8", delay: 20000 },
    sheet8: { next: "sheet9", delay: 15000 },

    sheet9: { next: "sheet10", delay: 20000 },
    sheet10: { next: "sheet11", delay: 12000 },

    sheet11: { next: "sheet12", delay: 13000 },

    /* Rakhi ceremony */
    sheet12: { manual: true },

    /* Video 1 → Video 2 → 2 sec → Group Photo */
    sheet13: { manual: true },

    /* Group Photo */
    sheet14: { next: "sheet15", delay: 20000 },

    /* Camera */
    sheet15: { manual: true },

    /* Final Surprise */
    sheet16: { next: "sheet17", delay: 17000 },

    /* Existing visual sheets */
    sheet17: { next: "sheet18", delay: 8000 },
    sheet18: { next: "sheet19", delay: 8000 },
    sheet19: { next: "sheet20", delay: 8000 },
    sheet20: { next: "sheet21", delay: 9000 },
    sheet21: { next: "sheet22", delay: 9000 },

    /* NEW FULL-SCREEN PHOTO SHEETS */
    sheet22: { next: "sheet23", delay: 10000 },
    sheet23: { next: "sheet24", delay: 10000 },
    sheet24: { next: "sheet25", delay: 10000 },
    sheet25: { next: "sheet26", delay: 10000 },

    /* Last sheet */
    sheet26: { manual: true }

  };


  /* =======================================================
     2. ALL SHEETS
     ======================================================= */

  const allSheets =
    Array.from(
      document.querySelectorAll(".sheet")
    );


  let currentSheetId = null;

  let autoTimer = null;


  /* =======================================================
     3. SHEET COUNTER
     ======================================================= */

  function updateSheetCounter(id) {

    const counter =
      document.getElementById(
        "sheetCounter"
      );


    if (!counter) return;


    const sheetMap = {

      sheet1: 1,
      sheet2: 2,
      sheet3: 3,
      sheet4: 4,

      sheet5a: 5,
      sheet5b: 5,
      sheet5c: 5,

      sheet6: 6,
      sheet7: 7,
      sheet8: 8,
      sheet9: 9,
      sheet10: 10,
      sheet11: 11,
      sheet12: 12,
      sheet13: 13,
      sheet14: 14,
      sheet15: 15,
      sheet16: 16,

      sheet17: 17,
      sheet18: 18,
      sheet19: 19,
      sheet20: 20,
      sheet21: 21,
      sheet22: 22,

      sheet23: 23,
      sheet24: 24,
      sheet25: 25,
      sheet26: 26

    };


    const number =
      sheetMap[id];


    if (!number) return;


    counter.textContent =
      `${number} / 26`;


    counter.classList.remove(
      "sheet-counter-change"
    );


    void counter.offsetWidth;


    counter.classList.add(
      "sheet-counter-change"
    );

  }


  /* =======================================================
     4. TIMER
     ======================================================= */

  function clearAutoTimer() {

    if (autoTimer) {

      clearTimeout(
        autoTimer
      );

      autoTimer = null;

    }

  }


  /* =======================================================
     5. GO TO SHEET
     ======================================================= */

  function goToSheet(id) {

    const target =
      document.getElementById(
        id
      );


    if (!target) {

      console.warn(
        "Sheet not found:",
        id
      );

      return;

    }


    clearAutoTimer();


    /*
       Hide all sheets
    */

    allSheets.forEach(
      (sheet) => {

        sheet.classList.remove(
          "active"
        );

        sheet.classList.add(
          "sheet-hidden"
        );

      }
    );


    /*
       Show selected sheet
    */

    target.classList.remove(
      "sheet-hidden"
    );

    target.classList.add(
      "active"
    );


    currentSheetId =
      id;


    /*
       UPDATE COUNTER
    */

    updateSheetCounter(
      id
    );


    /*
       Scroll to top
    */

    window.scrollTo({

      top: 0,

      behavior: "smooth"

    });


    /*
       Schedule next page
    */

    scheduleAuto(
      id
    );


    /*
       Music
    */

    updateMusicForSheet(
      id
    );


    /*
       Sheet-specific animation
    */

    runEnterHook(
      id
    );


    console.log(
      "📖 Current sheet:",
      id
    );

  }


  /* =======================================================
     6. AUTOMATIC SHEET
     ======================================================= */

  function scheduleAuto(id) {

    const flow =
      SHEET_TIMINGS[id];


    if (
      !flow ||
      flow.manual
    ) {

      return;

    }


    autoTimer =
      setTimeout(
        () => {

          goToSheet(
            flow.next
          );

        },

        flow.delay

      );

  }


  /* =======================================================
     7. GLOBAL FLOW
     ======================================================= */

  window.RakshaFlow = {

    goToSheet,

    current: () =>
      currentSheetId

  };


  /* =======================================================
     8. SHEET 1
     ======================================================= */

  const enterBtn =
    document.getElementById(
      "enterSurpriseBtn"
    );


  enterBtn?.addEventListener(
    "click",
    () => {

      goToSheet(
        "sheet2"
      );

    }
  );


  /* =======================================================
     9. SHEET 2 ANIMATION
     ======================================================= */

  const sheet2Scene =
    document.getElementById(
      "sheet2Scene"
    );


  function playSheet2Scene() {

    if (!sheet2Scene) return;


    sheet2Scene.classList.remove(
      "ceremony-play"
    );


    void sheet2Scene.offsetWidth;


    sheet2Scene.classList.add(
      "ceremony-play"
    );

  }


  /* =======================================================
     10. SISTER BUTTONS
     ======================================================= */

  document
    .querySelectorAll(
      ".open-sister-surprise"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const target =
              button.dataset.target;


            if (target) {

              goToSheet(
                target
              );

            }

          }
        );

      }
    );


  /* =======================================================
     11. SISTER NEXT BUTTONS
     ======================================================= */

  document
    .querySelectorAll(
      ".sister-next-btn"
    )
    .forEach(
      (button) => {

        button.addEventListener(
          "click",
          () => {

            const target =
              button.dataset.target;


            if (target) {

              goToSheet(
                target
              );

            }

          }
        );

      }
    );


  /* =======================================================
     12. RAKHI CEREMONY — SHEET 12
     ======================================================= */

  const ceremonySheet =
    document.getElementById(
      "sheet12"
    );


  const ceremonyStart =
    ceremonySheet?.querySelector(
      ".ceremony-start"
    );


  const ceremonyStage =
    ceremonySheet?.querySelector(
      ".ceremony-stage"
    );


  const tieBtn =
    ceremonySheet?.querySelector(
      ".tie-rakhi-button"
    );


  const brotherHand =
    ceremonySheet?.querySelector(
      ".brother-hand"
    );


  const sisterHand =
    ceremonySheet?.querySelector(
      ".sister-hand"
    );


  const thali =
    ceremonySheet?.querySelector(
      ".rakhi-thali"
    );


  const diya =
    ceremonySheet?.querySelector(
      ".ceremony-diya"
    );


  const diyaFlame =
    ceremonySheet?.querySelector(
      ".diya-flame"
    );


  const kumkum =
    ceremonySheet?.querySelector(
      ".kumkum"
    );


  const akshathalu =
    ceremonySheet?.querySelector(
      ".akshathalu"
    );


  const rakhi =
    ceremonySheet?.querySelector(
      ".ceremony-rakhi"
    );


  const rakhiHomeParent =
    rakhi
      ? rakhi.parentElement
      : null;


  const aartiGlow =
    ceremonySheet?.querySelector(
      ".aarti-glow"
    );


  const celebrationBox =
    ceremonySheet?.querySelector(
      ".ceremony-celebration"
    );


  const finishMsg =
    ceremonySheet?.querySelector(
      ".ceremony-finish"
    );


  let ceremonyTimers = [];

  let ceremonyRunning =
    false;


  function cTimeout(
    fn,
    delay
  ) {

    const timer =
      setTimeout(
        fn,
        delay
      );


    ceremonyTimers.push(
      timer
    );

  }


  function clearCeremonyTimers() {

    ceremonyTimers.forEach(
      clearTimeout
    );


    ceremonyTimers = [];

  }


  function restoreRakhiHome() {

    if (!rakhi) return;


    rakhi.classList.remove(
      "rakhi-tied",
      "rakhi-visible"
    );


    if (
      rakhiHomeParent &&
      rakhi.parentElement !==
      rakhiHomeParent
    ) {

      rakhiHomeParent.appendChild(
        rakhi
      );

    }


    rakhi.style.position =
      "";


    rakhi.style.left =
      "";


    rakhi.style.top =
      "";


    rakhi.style.zIndex =
      "";


    rakhi.style.transform =
      "";

  }


  function resetCeremony() {

    clearCeremonyTimers();


    ceremonyRunning =
      false;


    ceremonyStart?.classList.remove(
      "hidden"
    );


    ceremonyStage?.classList.remove(
      "active"
    );


    brotherHand?.classList.remove(
      "hand-entered"
    );


    sisterHand?.classList.remove(
      "sister-hand-entered"
    );


    thali?.classList.remove(
      "thali-entered"
    );


    diya?.classList.remove(
      "diya-visible"
    );


    diyaFlame?.classList.remove(
      "flame-burning"
    );


    kumkum?.classList.remove(
      "kumkum-visible"
    );


    akshathalu?.classList.remove(
      "akshathalu-visible"
    );


    aartiGlow?.classList.remove(
      "glow-active"
    );


    finishMsg?.classList.remove(
      "finish-visible"
    );


    if (celebrationBox) {

      celebrationBox.innerHTML =
        "";

    }


    restoreRakhiHome();


    document.body.classList.remove(
      "scroll-locked"
    );

  }


  function sparkleBurst(
    count,
    spread
  ) {

    if (!celebrationBox) return;


    for (
      let i = 0;
      i < count;
      i++
    ) {

      const sparkle =
        document.createElement(
          "span"
        );


      sparkle.className =
        "rakhi-spark";


      sparkle.textContent =
        i % 2 === 0
          ? "✦"
          : "♥";


      sparkle.style.left =
        `${15 + Math.random() * spread}%`;


      sparkle.style.top =
        `${20 + Math.random() * 55}%`;


      sparkle.style.animationDelay =
        `${Math.random() * 600}ms`;


      celebrationBox.appendChild(
        sparkle
      );

    }


    cTimeout(
      () => {

        celebrationBox
          .querySelectorAll(
            ".rakhi-spark"
          )
          .forEach(
            (element) =>
              element.remove()
          );

      },
      2200
    );

  }


  function startCeremony() {

    if (ceremonyRunning) return;


    resetCeremony();


    ceremonyRunning =
      true;


    document.body.classList.add(
      "scroll-locked"
    );


    ceremonyStart?.classList.add(
      "hidden"
    );


    cTimeout(
      () =>
        ceremonyStage?.classList.add(
          "active"
        ),
      600
    );


    cTimeout(
      () =>
        brotherHand?.classList.add(
          "hand-entered"
        ),
      1200
    );


    cTimeout(
      () =>
        sisterHand?.classList.add(
          "sister-hand-entered"
        ),
      3200
    );


    cTimeout(
      () =>
        thali?.classList.add(
          "thali-entered"
        ),
      5200
    );


    cTimeout(
      () => {

        diya?.classList.add(
          "diya-visible"
        );


        kumkum?.classList.add(
          "kumkum-visible"
        );


        akshathalu?.classList.add(
          "akshathalu-visible"
        );

      },
      7600
    );


    cTimeout(
      () => {

        diyaFlame?.classList.add(
          "flame-burning"
        );


        aartiGlow?.classList.add(
          "glow-active"
        );

      },
      10000
    );


    cTimeout(
      () =>
        rakhi?.classList.add(
          "rakhi-visible"
        ),
      12500
    );


    cTimeout(
      () =>
        sparkleBurst(
          20,
          25
        ),
      15500
    );


    cTimeout(
      () => {

        if (
          !rakhi ||
          !brotherHand
        ) {

          return;

        }


        const wrist =
          brotherHand.querySelector(
            ".brother-wrist"
          );


        if (!wrist) return;


        const rakhiRect =
          rakhi.getBoundingClientRect();


        const wristRect =
          wrist.getBoundingClientRect();


        document.body.appendChild(
          rakhi
        );


        rakhi.style.position =
          "fixed";


        rakhi.style.left =
          `${rakhiRect.left + rakhiRect.width / 2}px`;


        rakhi.style.top =
          `${rakhiRect.top + rakhiRect.height / 2}px`;


        rakhi.style.zIndex =
          "9999";


        rakhi.style.transform =
          "translate(-50%, -50%) rotate(90deg) scale(.75)";


        void rakhi.offsetWidth;


        rakhi.classList.add(
          "rakhi-tied"
        );


        requestAnimationFrame(
          () => {

            rakhi.style.left =
              `${wristRect.left + wristRect.width * .85}px`;


            rakhi.style.top =
              `${wristRect.top + wristRect.height * .6}px`;

          }
        );


        cTimeout(
          () =>
            sparkleBurst(
              30,
              20
            ),
          1800
        );

      },
      18500
    );


    cTimeout(
      () =>
        sparkleBurst(
          40,
          60
        ),
      22000
    );


    /*
       Ceremony finished
       → Video sheet
    */

    cTimeout(
      () => {

        finishMsg?.classList.add(
          "finish-visible"
        );


        ceremonyRunning =
          false;


        document.body.classList.remove(
          "scroll-locked"
        );


        cTimeout(
          () => {

            restoreRakhiHome();


            goToSheet(
              "sheet13"
            );

          },
          3200
        );

      },
      25000
    );

  }


  tieBtn?.addEventListener(
    "click",
    startCeremony
  );
  /* =======================================================
   11. VIDEO SHEET 13

   VIDEO 1
       ↓
   VIDEO 2
       ↓
   2 seconds
       ↓
   SHEET 14
   ======================================================= */

const tributeVideo1 =
  document.getElementById(
    "tributeVideo1"
  );


const tributeVideo2 =
  document.getElementById(
    "tributeVideo2"
  );


const tributeCard1 =
  document.getElementById(
    "tributeVideoCard1"
  );


const tributeCard2 =
  document.getElementById(
    "tributeVideoCard2"
  );


let videoTributeRun =
  0;


function resetVideoTribute() {

  videoTributeRun++;


  [
    tributeVideo1,
    tributeVideo2

  ].forEach(
    (video) => {

      if (!video) return;


      video.pause();


      video.currentTime =
        0;


      /*
         Video audio ON.
         No mute button.
      */

      video.muted =
        false;


      video.volume =
        1;

    }
  );


  if (tributeCard1) {

    tributeCard1.hidden =
      false;

  }


  if (tributeCard2) {

    tributeCard2.hidden =
      true;

  }

}


async function playTributeVideo(
  video
) {

  if (!video) return;


  try {

    await video.play();

  }

  catch (error) {

    console.log(
      "Video autoplay with sound was blocked."
    );

  }

}


function startVideoTribute() {

  resetVideoTribute();


  const run =
    videoTributeRun;


  /*
     VIDEO 1
  */

  if (tributeVideo1) {

    tributeVideo1.onended =
      () => {

        if (
          run !==
          videoTributeRun
        ) return;


        if (
          RakshaFlow.current() !==
          "sheet13"
        ) return;


        /*
           Hide Video 1
        */

        if (tributeCard1) {

          tributeCard1.hidden =
            true;

        }


        /*
           Show Video 2
        */

        if (tributeCard2) {

          tributeCard2.hidden =
            false;

        }


        /*
           Start Video 2
        */

        if (tributeVideo2) {

          tributeVideo2.currentTime =
            0;


          tributeVideo2.muted =
            false;


          tributeVideo2.volume =
            1;


          playTributeVideo(
            tributeVideo2
          );

        }

      };


    playTributeVideo(
      tributeVideo1
    );

  }


  /*
     VIDEO 2
  */

  if (tributeVideo2) {

    tributeVideo2.onended =
      () => {

        if (
          run !==
          videoTributeRun
        ) return;


        if (
          RakshaFlow.current() !==
          "sheet13"
        ) return;


        /*
           Wait exactly 2 seconds
        */

        setTimeout(
          () => {

            if (
              run ===
              videoTributeRun &&
              RakshaFlow.current() ===
              "sheet13"
            ) {

              goToSheet(
                "sheet14"
              );

            }

          },
          2000
        );

      };

  }

}


/* =======================================================
   12. CAMERA — SHEET 15
   ======================================================= */

const cameraSheet =
  document.getElementById(
    "sheet15"
  );


const openCameraBtn =
  document.getElementById(
    "openCameraBtn"
  );


const captureBtn =
  document.getElementById(
    "capturePhotoBtn"
  );


const retakeBtn =
  document.getElementById(
    "retakePhotoBtn"
  );


const shareBtn =
  document.getElementById(
    "sharePhotoBtn"
  );


const continueBtn =
  document.getElementById(
    "continueFinalBtn"
  );


const cameraVideo =
  document.getElementById(
    "cameraVideo"
  );


const canvas =
  document.getElementById(
    "cameraCanvas"
  );


const capturedBox =
  document.getElementById(
    "capturedPhotoContainer"
  );


const capturedImg =
  document.getElementById(
    "capturedPhoto"
  );


const capturedMsg =
  document.getElementById(
    "capturedPhotoMessage"
  );


const messageInput =
  document.getElementById(
    "cameraMessageInput"
  );


let cameraStream =
  null;


let capturedBlob =
  null;


function stopCameraStream() {

  if (cameraStream) {

    cameraStream
      .getTracks()
      .forEach(
        (track) =>
          track.stop()
      );


    cameraStream =
      null;

  }


  if (cameraVideo) {

    cameraVideo.srcObject =
      null;

  }

}


async function openCamera() {

  if (
    !navigator.mediaDevices ||
    !navigator.mediaDevices.getUserMedia
  ) {

    alert(
      "Camera is not supported in this browser."
    );


    return;

  }


  try {

    cameraStream =
      await navigator
        .mediaDevices
        .getUserMedia({

          video: {
            facingMode:
              "user"
          },

          audio:
            false

        });


    if (!cameraVideo) return;


    cameraVideo.srcObject =
      cameraStream;


    await cameraVideo.play();


    cameraSheet
      ?.querySelector(
        ".camera-container"
      )
      ?.classList.add(
        "camera-opened"
      );


    if (openCameraBtn) {

      openCameraBtn.style.display =
        "none";

    }


    if (captureBtn) {

      captureBtn.style.display =
        "inline-flex";

    }

  }

  catch (error) {

    console.error(
      error
    );


    alert(
      "Please allow camera access to take your Raksha Bandhan photo ❤️"
    );

  }

}


function capturePhoto() {

  if (
    !cameraVideo ||
    !canvas ||
    !cameraVideo.videoWidth
  ) {

    return;

  }


  canvas.width =
    cameraVideo.videoWidth;


  canvas.height =
    cameraVideo.videoHeight;


  const context =
    canvas.getContext(
      "2d"
    );


  context.drawImage(

    cameraVideo,

    0,
    0,

    canvas.width,
    canvas.height

  );


  canvas.toBlob(

    (blob) => {

      if (!blob) return;


      capturedBlob =
        blob;


      if (capturedImg) {

        capturedImg.src =
          URL.createObjectURL(
            blob
          );

      }


      capturedBox?.classList.add(
        "show"
      );


      if (capturedMsg) {

        capturedMsg.textContent =
          "❤️ Beautiful memory captured!";

      }


      cameraVideo.style.display =
        "none";


      if (captureBtn) {

        captureBtn.style.display =
          "none";

      }


      if (retakeBtn) {

        retakeBtn.style.display =
          "inline-flex";

      }


      if (shareBtn) {

        shareBtn.style.display =
          "inline-flex";

      }


      if (continueBtn) {

        continueBtn.style.display =
          "inline-flex";

      }


      stopCameraStream();


      capturedBox?.scrollIntoView({

        behavior:
          "smooth",

        block:
          "center"

      });

    },

    "image/jpeg",

    .92

  );

}


function retakePhoto() {

  capturedBlob =
    null;


  capturedBox?.classList.remove(
    "show"
  );


  capturedImg?.removeAttribute(
    "src"
  );


  if (cameraVideo) {

    cameraVideo.style.display =
      "block";

  }


  if (retakeBtn) {

    retakeBtn.style.display =
      "none";

  }


  if (shareBtn) {

    shareBtn.style.display =
      "none";

  }


  if (continueBtn) {

    continueBtn.style.display =
      "none";

  }


  openCamera();

}


async function sharePhoto() {

  if (!capturedBlob) return;


  const message =
    (
      messageInput?.value ||
      "❤️ A beautiful Raksha Bandhan memory"
    ).trim();


  const file =
    new File(

      [
        capturedBlob
      ],

      "Rakshabandhan_Memory.jpg",

      {
        type:
          "image/jpeg"
      }

    );


  if (
    navigator.share &&
    navigator.canShare &&
    navigator.canShare({
      files: [file]
    })
  ) {

    try {

      await navigator.share({

        title:
          "Raksha Bandhan ❤️",

        text:
          message,

        files: [
          file
        ]

      });


      return;

    }

    catch (error) {

      console.log(
        "Share cancelled."
      );

    }

  }


  /*
     Desktop fallback
  */

  const url =
    URL.createObjectURL(
      capturedBlob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    "Rakshabandhan_Memory.jpg";


  link.click();


  URL.revokeObjectURL(
    url
  );


  alert(
    "Photo saved ❤️\n\nMessage:\n" +
    message
  );

}


openCameraBtn?.addEventListener(
  "click",
  openCamera
);


captureBtn?.addEventListener(
  "click",
  capturePhoto
);


retakeBtn?.addEventListener(
  "click",
  retakePhoto
);


shareBtn?.addEventListener(
  "click",
  sharePhoto
);


/*
   Camera → Sheet 16
*/

continueBtn?.addEventListener(
  "click",
  () => {

    goToSheet(
      "sheet16"
    );

  }
);


/* =======================================================
   13. FINAL SURPRISE — SHEET 16
   ======================================================= */

const finalSuspense =
  document.getElementById(
    "finalSuspense"
  );


const finalGift =
  document.getElementById(
    "finalGift"
  );


const finalReveal =
  document.getElementById(
    "finalReveal"
  );


const openGiftBtn =
  document.getElementById(
    "openFinalGiftBtn"
  );


const finalHeartBtn =
  document.getElementById(
    "finalHeartBtn"
  );


const finalLoveMsg =
  document.getElementById(
    "finalLoveMessage"
  );


const finalNameHeartBtn =
  document.getElementById(
    "finalNameHeartBtn"
  );


const finalNameHeartMsg =
  document.getElementById(
    "finalNameHeartMsg"
  );


openGiftBtn?.addEventListener(
  "click",
  () => {

    finalSuspense?.classList.add(
      "hidden"
    );


    finalGift?.classList.add(
      "hidden"
    );


    finalReveal?.classList.add(
      "show"
    );

  }
);


finalHeartBtn?.addEventListener(
  "click",
  () => {

    finalLoveMsg?.classList.add(
      "show"
    );

  }
);


finalNameHeartBtn?.addEventListener(
  "click",
  () => {

    finalNameHeartMsg?.classList.add(
      "show"
    );

  }
);


/* =======================================================
   14. NEW VISUAL SHEETS 17–22
   ======================================================= */

function resetVisualAnimation(id) {

  const sheet =
    document.getElementById(
      id
    );


  if (!sheet) return;


  /*
     Restart SVG/CSS animations
     whenever the sheet is entered.
  */

  const animated =
    sheet.querySelectorAll(
      "svg, svg *"
    );


  animated.forEach(
    (element) => {

      element.style.animation =
        "none";

    }
  );


  void sheet.offsetWidth;


  animated.forEach(
    (element) => {

      element.style.animation =
        "";

    }
  );

}


/* =======================================================
   15. SHEET ENTER HOOK
   ======================================================= */

function runEnterHook(id) {

  /*
     Sheet 2
  */

  if (
    id === "sheet2"
  ) {

    playSheet2Scene();

  }


  /*
     Sheet 12
  */

  if (
    id === "sheet12"
  ) {

    resetCeremony();

  }

  else {

    restoreRakhiHome();

  }


  /*
     Sheet 13
  */

  if (
    id === "sheet13"
  ) {

    startVideoTribute();

  }


  /*
     Stop videos everywhere
     except Sheet 13.
  */

  if (
    id !== "sheet13"
  ) {

    resetVideoTribute();

  }


  /*
     Stop camera everywhere
     except Sheet 15.
  */

  if (
    id !== "sheet15"
  ) {

    stopCameraStream();

  }


  /*
     Restart existing visual sketches
  */

  if (
    id === "sheet17" ||
    id === "sheet18" ||
    id === "sheet19" ||
    id === "sheet20" ||
    id === "sheet21" ||
    id === "sheet22"
  ) {

    resetVisualAnimation(
      id
    );

  }


  /*
     NEW FULL-SCREEN PHOTO SHEETS
  */

  if (
    id === "sheet23" ||
    id === "sheet24" ||
    id === "sheet25" ||
    id === "sheet26"
  ) {

    const sheet =
      document.getElementById(
        id
      );


    const image =
      sheet?.querySelector(
        ".photo-sheet-content img"
      );


    if (image) {

      image.style.animation =
        "none";


      void image.offsetWidth;


      image.style.animation =
        "fullScreenPhotoReveal .9s ease both";

    }

  }

}


/* =======================================================
   16. MUSIC
   ======================================================= */

const audioFiles = {

  intro:
    "audio/sheet1-intro.mp3",

  rakhiPromise:
    "audio/sheets2-3-4.mp3",

  history:
    "audio/sheets9-10-history.mp3",

  remaining:
    "audio/sheets13-14-15.mp3"

};


const audio = {};


Object.keys(
  audioFiles
).forEach(
  (key) => {

    audio[key] =
      new Audio(
        audioFiles[key]
      );


    audio[key].preload =
      "auto";


    audio[key].loop =
      true;


    audio[key].volume =
      .6;

  }
);


let currentAudioKey =
  null;


/* =======================================================
   17. MUSIC GROUP
   ======================================================= */

function musicGroupFor(
  id
) {

  /*
     Sheet 1
  */

  if (
    id === "sheet1"
  ) {

    return "intro";

  }


  /*
     Sheets 2–8
  */

  if (
    [
      "sheet2",
      "sheet3",
      "sheet4",
      "sheet5a",
      "sheet5b",
      "sheet5c",
      "sheet6",
      "sheet7",
      "sheet8"

    ].includes(id)
  ) {

    return "rakhiPromise";

  }


  /*
     Sheets 9–10
  */

  if (
    id === "sheet9" ||
    id === "sheet10"
  ) {

    return "history";

  }


  /*
     Sheets 11–26
  */

  if (
    [
      "sheet11",
      "sheet12",
      "sheet13",
      "sheet14",
      "sheet15",
      "sheet16",
      "sheet17",
      "sheet18",
      "sheet19",
      "sheet20",
      "sheet21",
      "sheet22",
      "sheet23",
      "sheet24",
      "sheet25",
      "sheet26"

    ].includes(id)
  ) {

    return "remaining";

  }


  return null;

}


/* =======================================================
   18. STOP AUDIO
   ======================================================= */

function stopAudio(
  key
) {

  if (!audio[key]) return;


  audio[key].pause();


  audio[key].currentTime =
    0;

}


function stopAllAudio() {

  Object.keys(
    audio
  ).forEach(
    (key) => {

      stopAudio(
        key
      );

    }
  );

}


/* =======================================================
   19. PLAY MUSIC
   ======================================================= */

function playMusic(
  key
) {

  if (!audio[key]) {

    console.warn(
      "Audio not found:",
      key
    );


    return;

  }


  /*
     Stop previous music
  */

  if (
    currentAudioKey &&
    currentAudioKey !== key
  ) {

    stopAudio(
      currentAudioKey
    );

  }


  currentAudioKey =
    key;


  audio[key]
    .play()
    .then(
      () => {

        console.log(
          "🎵 Playing:",
          audioFiles[key]
        );

      }
    )
    .catch(
      () => {

        console.log(
          "🎵 Waiting for user interaction..."
        );

      }
    );

}


/* =======================================================
   20. UPDATE MUSIC
   ======================================================= */

function updateMusicForSheet(
  id
) {

  const key =
    musicGroupFor(
      id
    );


  if (!key) return;


  playMusic(
    key
  );

}


/* =======================================================
   21. UNLOCK AUDIO AFTER USER INTERACTION
   ======================================================= */

function unlockAudio() {

  if (!currentSheetId) return;


  const key =
    musicGroupFor(
      currentSheetId
    );


  if (!key) return;


  if (
    audio[key] &&
    audio[key].paused
  ) {

    audio[key]
      .play()
      .catch(
        () => {}
      );

  }

}


document.addEventListener(
  "click",
  unlockAudio
);


document.addEventListener(
  "touchstart",
  unlockAudio,
  {
    passive: true
  }
);


/* =======================================================
   22. VISIBILITY CHANGE
   ======================================================= */

document.addEventListener(
  "visibilitychange",
  () => {

    if (!currentAudioKey) return;


    const sound =
      audio[
        currentAudioKey
      ];


    if (!sound) return;


    if (
      document.hidden
    ) {

      sound.pause();

    }

    else {

      sound
        .play()
        .catch(
          () => {}
        );

    }

  }
);


/* =======================================================
   23. CLEANUP
   ======================================================= */

window.addEventListener(
  "beforeunload",
  () => {

    clearAutoTimer();

    clearCeremonyTimers();

    stopAllAudio();

    stopCameraStream();

    resetVideoTribute();

  }
);


/* =======================================================
   24. START PROJECT
   ======================================================= */

goToSheet(
  "sheet1"
);


/*
   Initial counter
*/

updateSheetCounter(
  "sheet1"
);


console.log(
  "❤️ Raksha Bandhan website loaded — 26 sheets"
);

});
