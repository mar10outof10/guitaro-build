import React from "react";
import "./TuningAccuracyLight.scss";
import { freqTable } from "../../../../../../assets/schema/constants";
import PropTypes from "prop-types";

const TuningAccuracyLight = ({ id, note, frequency }) => {
  // console.log(note);

  const [lowRange, setLowRange] = React.useState(freqTable[note].low);
  const [highRange, setHighRange] = React.useState(freqTable[note].high);
  const [mid, setMid] = React.useState(freqTable[note].freq);
  const [accuracy, setAccuracy] = React.useState(100);
  const [style, setStyle] = React.useState();

  React.useEffect(async () => {
    setMid(freqTable[note].freq);
    setLowRange(freqTable[note].freq - freqTable[note].low);
    setHighRange(freqTable[note].high - freqTable[note].freq);
  }, [note]);

  React.useEffect(() => {
    if (frequency >= mid) {
      setAccuracy(100 - (((frequency - mid) / highRange) * 100).toFixed(0));
    } else {
      setAccuracy(
        100 - Math.abs(((mid - frequency) / lowRange) * -100).toFixed(0)
      );
    }
  }, [frequency]);

  React.useEffect(() => {
    if (frequency > mid) {
      setStyle({
        background: `radial-gradient(circle at top, green, ${accuracy}%, transparent), radial-gradient(ellipse at bottom, red, #006f1600)`,
      });
    } else if (frequency < mid) {
      setStyle({
        background: `radial-gradient(circle at bottom, green, ${accuracy}%, transparent), radial-gradient(ellipse at top, red, #006f1600)`,
      });
    } else {
      setStyle({
        background: `radial-gradient(circle at center, green, ${accuracy}%, transparent), radial-gradient(ellipse at bottom, red, #006f1600)`,
        borderColor: `#016200`,
      });
    }
  }, [accuracy]);

  console.log(
    freqTable[note].low,
    lowRange,
    mid,
    freqTable[note].freq,
    freqTable[note].high,
    highRange
  );
  return <div className="tuningAccuracyLight" style={style}></div>;
};

TuningAccuracyLight.propTypes = {
  id: PropTypes.number,
  frequency: PropTypes.number,
  note: PropTypes.string,
};

export default TuningAccuracyLight;
