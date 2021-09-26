//import "./styles.css";
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const defaultValue = {
  subject: "",
  class: "",
  location: "",
  date: "",
  time: "",
  numOfLesson: "",
  requirement: "",
  budget: 0
};
const resultStr = (
  subject,
  clazz,
  location,
  date,
  time,
  numOfLesson,
  requirement,
  budget
) => {
  return `尋導師
科目：${subject}
學生年級：${clazz}
地點：${location}
時段：${date}
每堂時間：${time}
每星期堂數：${numOfLesson}
導師要求：
${requirement}
每小時預算：$${budget}

有意請WTS 66218507 謝謝`;
};

export default function App() {
  const [value, setValue] = React.useState(defaultValue);
  const [result, setResult] = React.useState(
    resultStr("", "", "", "", "", "", "", "")
  );

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    setResult(
      resultStr(
        event.target.name === "subject" ? event.target.value : value.subject,
        event.target.name === "class" ? event.target.value : value.class,
        event.target.name === "location" ? event.target.value : value.location,
        event.target.name === "date" ? event.target.value : value.date,
        event.target.name === "time" ? event.target.value : value.time,
        event.target.name === "numOfLesson"
          ? event.target.value
          : value.numOfLesson,
        event.target.name === "requirement"
          ? event.target.value
          : value.requirement,
        event.target.name === "budget" ? event.target.value : value.budget
      )
    );
    //console.log(result);
    //navigator.clipboard.writeText(decrypted);
  };

  const copyTextBtnOnClick = () => {
    navigator.clipboard.writeText(result);
  };

  return (
    <div className="App">
      <table>
        <td>
          <div style={{ width: "30vw", maxWidth: "40vw" }}>
            <TextField
              fullWidth
              name="subject"
              label="科目"
              value={value.subject}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="class"
              label="學生年級"
              value={value.class}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="location"
              label="地點"
              multiline
              value={value.location}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="date"
              label="時段"
              multiline
              value={value.date}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="time"
              label="每堂時間"
              multiline
              value={value.time}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="numOfLesson"
              label="每星期堂數"
              multiline
              value={value.numOfLesson}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="requirement"
              label="導師要求"
              multiline
              value={value.requirement}
              onChange={handleChange}
            />
            <br />
            <TextField
              fullWidth
              name="budget"
              label="每小時預算"
              type="number"
              value={value.budget}
              onChange={handleChange}
            />
          </div>
        </td>
        <td>
          <div style={{ width: "60vw", whiteSpace: "pre-wrap" }}>
            <TextField fullWidth multiline value={result} />
            <Button variant="contained" onClick={copyTextBtnOnClick}>
              Copy text
            </Button>
          </div>
        </td>
      </table>
    </div>
  );
}
