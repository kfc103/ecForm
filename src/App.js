//import "./styles.css";
import * as React from "react";
import TextField from "@material-ui/core/TextField";

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
export default function App() {
  const [value, setValue] = React.useState(defaultValue);
  const [result, setResult] = React.useState();

  const handleChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    //if (event.target.name === "name") setValue(event.target.value);
    //else if (event.target.name === "gender") setGender(event.target.value);
    //else
    setValue({ ...value, [event.target.name]: event.target.value });
    const result = `尋導師
科目：${event.target.name === "subject" ? event.target.value : value.subject}
學生年級：${event.target.name === "class" ? event.target.value : value.class}
地點：${event.target.name === "location" ? event.target.value : value.location}
時段：${event.target.name === "date" ? event.target.value : value.date}
每堂時間：${event.target.name === "time" ? event.target.value : value.time}
每星期堂數：${
      event.target.name === "numOfLesson"
        ? event.target.value
        : value.numOfLesson
    }
導師要求：
${event.target.name === "requirement" ? event.target.value : value.requirement}
每小時預算：$${
      event.target.name === "budget" ? event.target.value : value.budget
    }

有意請WTS 66218507 謝謝`;
    setResult(result);
    //console.log(result);
  };

  return (
    <div className="App">
      <table>
        <td>
          <div>
            <TextField
              name="subject"
              label="科目"
              value={value.subject}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="class"
              label="學生年級"
              value={value.class}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="location"
              label="地點"
              multiline
              value={value.location}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="date"
              label="時段"
              multiline
              value={value.date}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="time"
              label="每堂時間"
              multiline
              value={value.time}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="numOfLesson"
              label="每星期堂數"
              multiline
              value={value.numOfLesson}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="requirement"
              label="導師要求"
              multiline
              value={value.requirement}
              onChange={handleChange}
            />
            <br />
            <TextField
              name="budget"
              label="每小時預算"
              type="number"
              value={value.budget}
              onChange={handleChange}
            />
          </div>
        </td>
        <td>
          <div style={{ whiteSpace: "pre-wrap" }}>
            <TextField multiline value={result} />
          </div>
        </td>
      </table>
    </div>
  );
}
