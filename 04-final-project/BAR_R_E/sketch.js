//https://editor.p5js.org/dcarroll.education@gmail.com/sketches/9_9QI9QGb

//30: ______________________________

// if cipher = 10, cipherKey - 10 in function encrypt()

let firstClick = false; //to let it load

let cols = 30;
let rows = 30;
let startCols, startRows;
let cellWidth, cellHeight;

let level = 0;
let ciphKey = 0;
let cipher = 0;
let lastKey = -1;
let decoded;

let starLvl = false;

let chordProgression = [
  "G4",
  "F4",
  "E4",
  "F4",
  "C4",
  "G4",
  "F4",
  "E4",
  "A4",
  "B4",
];

let chordIndex = 0;

function setup() {
  var cnv = createCanvas(600, 600);
  var cnvX = (windowWidth - width) / 2;
  var cnvY = (windowHeight - height) / 2;
  cnv.mousePressed(userStartAudio);
  cnv.position(cnvX, cnvY);

  frameRate(30);

  cellWidth = width / cols;
  cellHeight = height / rows;

  textAlign(LEFT);
  textSize(17);
  textFont("Stack Sans Notch");

  monoSynth = new p5.MonoSynth();
  mic = new p5.AudioIn();
  mic.start();
  mic.amp(8);
}

function draw() {
  background(220);

  if (starLvl == false) {
    for (let x = 0; x < width; x += cellWidth) {
      for (let y = 0; y < height; y += cellHeight) {
        push();
        noStroke();
        rect(x, y, cellWidth, cellHeight);
        pop();
      }
    }
  } else {
    for (let x = 0; x < width; x += cellWidth / 2) {
      for (let y = 0; y < height; y += cellHeight / 2) {
        line(x, y, mouseX, mouseY);
      }
    }
  }

  if (level === 0) {
    scene0();
  } else if (level === 1) {
    scene1();
  } else if (level === 2) {
    scene2();
  } else if (level === 3) {
    scene3();
  } else if (level === 4) {
    endofDemo();
  }
}

function scene0() {
  let startCols = 10;
  let startRows = 10;

  let tutText =
    "bar_r_e___DEMO___an interactive short story_______words are hard____be patient________________take your time_____move your mouse to decode _the message on screen_______________when you find it________click___________________________to proceed__________________________________happy chatting_____________________________________click anywhere to start__________";
  let bgText =
    "progforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforint____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________progforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintprogforintp";

  for (let c = 0; c < tutText.length; c++) {
    let co = (c % cols) + startCols;
    let ro = floor(c / cols) + startRows;

    co = co % cols;
    ro = floor((c + startCols) / cols) + startRows;

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    push();
    textStyle(BOLD);
    micLevel = round(mic.getLevel() * 500);
    fill(0, micLevel);
    text(encrypt(tutText[c], 0), x, y);
    pop();
  }

  let ciphKey = mouseX % 27;

  if (ciphKey !== lastKey) {
    playSynth();
    lastKey = ciphKey;
  }

  for (let d = 0; d < bgText.length; d++) {
    let co = d % cols;
    let ro = floor(d / cols);

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    text(encrypt(bgText[d], ciphKey), x, y);
  }
  console.log(ciphKey, micLevel);
}

function scene1() {
  let startCols = 10;
  let startRows = 10;

  let tutText =
    "H___H__IIIII__________________H___H____I____________________HHHHH____I____________________H___H____I____________________H___H__IIIII";
  let bgText =
    "jhjhjhjhfjhgjhjdhjhfgkjdhsdksjhjgldgfjdhlsjddlsjlflfjjkfdlsfljhjgkdlfjkhjklfjdjhjkljkfjkglkljkfldjfgkdfjcsskjjhfkalslkjdfakjfdadfkfajkdlslfajklffajdkldsjlksglkjjfklfkgkgrdsjkifksjdnkjfnoaljkfndaoilkjfnoaidlkjrgwisjknwrsgdjhjhjhjhfjhgjhjdhjhfgkjdhsdkjdhakdndkdsjhjglsdsbfgkjdhsdkjdhakdndkdsjhjglsdsbfovujyfjyfde_uyd_oj_____hdsbjhvbsikdjhdijz_djx_gusi_bucdiuiuiujkhdnisjkh_____bdkn_iycduakjhicukjshodnc_jhd_ksnn_hdsbjhudvbsikdjhdijz_hdj_wo_____fihefkjkdjsbnvjkndfksnodlakjnoisdlksjlndvskckjhfoaisjkhfnoiskdjnvlkjdfakjfdadfkfajkdjdhjhfgkjdhsdksjhjgldgfjdhlsjddlsjlflfjjkfdlsfljhjgkdlfjkhjklfjdjhjkljkfjkglkljkfldjfgkdfjcsskjjhfkalslkjdfakjfdadfkfajkdlslfajklffajdkldsjlksglkjjfklfkgkgrdsjkifksjdnkjfnoaljkfndaoilkjfnoaidlkjrgwisjknwrsieuugdjhjhjhjhfjhgjhjdhjhlslfasfjncosljklffajddjhfsoikvkldsjlksglkjjfeuiydfshvolklfkgkgrdsjkifksjdjdbfienkjfnoaljkfndaoilkoiksjdnfvjhjjdfkejbfdnjujesodiruvuihfdiffsjkfnd";

  for (let c = 0; c < tutText.length; c++) {
    let co = (c % cols) + startCols;
    let ro = floor(c / cols) + startRows;

    co = co % cols;
    ro = floor((c + startCols) / cols) + startRows;

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    push();
    textStyle(BOLD);
    micLevel = round(mic.getLevel() * 500);
    fill(0, micLevel);
    text(encrypt(tutText[c], 0), x, y);
    pop();
  }

  ciphKey = mouseX % 27;
  cipher = ciphKey;

  if (ciphKey !== lastKey) {
    playSynth();
    lastKey = ciphKey;
  }

  if (ciphKey === cipher) {
    decoded = true;
    //textStyle(BOLD);
  } else {
    decoded = false;
    textStyle(NORMAL);
  }

  console.log(ciphKey, decoded);

  for (let d = 0; d < bgText.length; d++) {
    let co = d % cols;
    let ro = floor(d / cols);

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    text(encrypt(bgText[d], ciphKey), x, y);
  }
  console.log(ciphKey, decoded, micLevel);
}

function scene2() {
  let text2w =
    "______________________________hi_there__im_not_sure_what_brings_you_here_but___welcome_yay________________________________do_you_________________________________wanna_hear_a_joke_______________________________________uhhhh________knock_____knock_____________who__who_______________________________________knock_____________knock___________________________________________________________________________________________________________________________________________________________you_are___noooooooooooooooooooooooooooooooooooo______fun__________________________________________________________________________________________________________________________________________________________________________________________________________________________now_____________________________________________what________________________________________________________________________________hmmmmmmmmmm";

  let text2b =
    "wow_someone_is_actually_here______________________________________________________________wait_i_dont_know_what_to_say______________________________________________________________idontknowjokesimnotfunnyohshit_____________________________________________________________wait___why____are____you_here_______________________________________________________________who_are_you_____who__am___i____________________________________________________________girl_notanexistentialcrisis_rn_________________________________________________________________do_you_hear_that_____________________________________________________________________hmm______since_we_are_here________________________________________________________________what___is_your____name_______________________________________________________________________can_you_even_answer_me_____";

  for (let x = 0; x < width; x += cellWidth) {
    for (let y = 0; y < height; y += cellHeight * 3) {
      push();
      micLevel = round(mic.getLevel() * 500);
      fill(30, micLevel);
      noStroke();
      rect(x, y, cellWidth, cellHeight);
      pop();
    }
  }

   ciphKey = mouseX % 27;
   cipher = 10;

  for (let c = 0; c < text2b.length; c++) {
    let co = c % cols;
    let ro = floor(c / cols);

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    push();

    if (ciphKey === 2) {
      textStyle(BOLD);
    } else {
      textStyle(NORMAL);
    }

    text(encrypt(text2b[c], ciphKey - 2), x, y);
    pop();
  }

  if (ciphKey !== lastKey) {
    playSynth();
    lastKey = ciphKey;
  }

  for (let d = 0; d < text2w.length; d++) {
    let co = d % cols;
    let ro = floor(d / cols);

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    text(encrypt(text2w[d], ciphKey - 10), x, y);
  }
  console.log(ciphKey, decoded, micLevel);

  if (ciphKey === cipher) {
    decoded = true;
    textStyle(BOLD);
  } else {
    decoded = false;
    textStyle(NORMAL);
  }
}

function scene3() {
  let text3 =
    "auhjgfbrsiuhjdnoiwlshdgniskjehdfnoiwjelshdnfoiheuisdjgkhnsoirgldkhjneadfl____________i_guess_ill_start_talking_then_ejsdhvnoisefhdniurjlkhgsdfvniueljkfhdsniwuleskjfdhvniwueskdjfhnwieusdkjlfhnseiludkjhvnirsdflkucjxhnsk_____________gosh___gotta_do_everything_around_here_________________ukdjhfiaujhknlgiurslfdhjgnliwuraskdjhfniuweksdjhfiuwjsHDniuweklhsjdfoiwesljzdhffhisdvkjfeudskjhfiiufadsjhniwuefjkdshniefwuskdjhfeilkdjhnfewlisdkjhfdsnzkljhefsi_______________hmm_____________euifdjkshiusgdkjhifgkjv_hot_take_ehuifjksdhnaiuwefjdkhsiugsjkfdhiudsljkhigfudsj________________words_are_hard_________________________________iejfsdghniusjhgdueajhdfniowrghjsoioweihdsnosiklrdouwehfjsdnoiowerfdhsnowielfiehouaf______________and_i_think_its_because_people____________are_afraid______efijdkshiueoajfhdoiewfdhsjowrlshgdniosrjhdgiorwgjhsf________afraid_of_being_real_______iusdhgoiaehfoiwhrsdfoiwhedsfoijwhenoidsfjhowhrgoiqefhoweihfoeiadfjosr";

  for (let x = 0; x < width; x += cellWidth) {
    for (let y = 0; y < height; y += cellHeight * 3) {
      push();
      noStroke();
      rect(x, y, cellWidth, cellHeight);
      pop();
    }
  }

  for (let c = 0; c < text3.length; c++) {
    let co = c % cols;
    let ro = floor(c / cols);

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

     ciphKey = mouseX % 27;
     cipher = 21;

    if (ciphKey !== lastKey) {
      playSynth();
      lastKey = ciphKey;
    } 

    if (ciphKey === cipher) {
      decoded = true;
      textStyle(ITALIC);
    } else {
      decoded = false;
      textStyle(NORMAL);
    }

    console.log(ciphKey, decoded);

    push();    
    text(encrypt(text3[c], ciphKey - 21), x, y);
    pop();
  }
}

function endofDemo() {
  starLvl = true;

  let endText = "end of demo";
  let startCols = 10;
  let startRows = 10;

  push();
  stroke(220);
  line(240, 239, 354, 239);
  line(297, 229, 297, 249);
  pop();

  for (let c = 0; c < endText.length; c++) {
    let co = (c % cols) + startCols;
    let ro = floor(c / cols) + startRows;

    co = co % cols;
    ro = floor((c + startCols) / cols) + startRows;

    let x = co * cellWidth + cellWidth * 0.3;
    let y = ro * cellHeight + cellHeight * 0.75;

    let ciphKey = mouseX % 27;

    if (ciphKey !== lastKey) {
      playSynth();
      lastKey = ciphKey;
    }

    console.log(ciphKey, mouseX, mouseY);

    push();
    fill(220);
    text(encrypt(endText[c], ciphKey), x, y);
    pop();
  }
}

function encrypt(plainText, key) {
  plainText = plainText.toUpperCase();
  let cipherText = "";
  for (let i = 0; i < plainText.length; i++) {
    let asciiCode = plainText.charCodeAt(i) - 65;
    if (asciiCode >= 0 && asciiCode <= 26) {
      asciiCode = (asciiCode + ((key % 26) + 26)) % 26;
      cipherText += String.fromCharCode(asciiCode + 65);
    }
  }
  return cipherText;
}

function mousePressed() {
  if (!firstClick) {
    firstClick = true;
  } else if (level === 0) {
    playSynthN();
    level = 1;
  } else if (level === 1 && decoded == true) {
    playSynthN();
    level = 2;
  } else if (level === 2 && decoded == true) {
    playSynthN();
    level = 3;
  } else if (level === 3 && decoded == true) {
    playSynthN();
    level = 4;
  }
}

function playSynth() {
  if (ciphKey === cipher) {
    let note = "C5"; // note velocity (volume, from 0 to 1)
    let velocity = 0.4;
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur = 1 / 6;
    monoSynth.play(note, velocity, time, dur);
  } else {
    let note = chordProgression[chordIndex]; // note velocity (volume, from 0 to 1)
    let velocity = 0.6;
    // time from now (in seconds)
    let time = 0;
    // note duration (in seconds)
    let dur = 1 / 6;

    monoSynth.play(note, velocity, time, dur);
    chordIndex = (chordIndex + 1) % chordProgression.length;
  }
}

function playSynthN() {
  let note = "C5"; // note velocity (volume, from 0 to 1)
  let velocity = 0.4;
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1 / 6;

  monoSynth.play(note, velocity, time, dur);
}
