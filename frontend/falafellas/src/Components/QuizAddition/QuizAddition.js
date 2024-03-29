import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import "./CreateQuizForm.css";

const CreateQuizForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timeLimitType, setTimeLimitType] = useState("fixed");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [courseStartDate, setCourseStartDate] = useState(new Date());
  const [personName, setPersonName] = useState([]);
  const [existingQuestions, setExistingQuestions] = useState([]);
  const [existingQuestionsSelected, setExistingQuestionsSelected] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await axios.get("/api/question/get/all"); // Fetch all questions
        setExistingQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }
    fetchQuestions();
  }, []);

  const handleChange = (event, value) => {
    console.log("Selected questions:", value);
    setPersonName(value);
    setExistingQuestionsSelected(value.length > 0);
  };

  const handleToggleChange = (event) => {
    const value = event.target.value;
    setTimeLimitType(value);
    if (value === "fixed") {
      setNumberOfDays("");
    } else {
      setCourseStartDate(new Date());
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a POST request to add quiz
      const response = await axios.post("/quiz/add", {
        name,
        description,
        timeLimitType,
        numberOfDays,
        courseStartDate,
      });

      // Assuming response.data contains the newly created quiz ID
      const quizId = response.data._id;

      // Update the relevant questions with the quiz reference
      await Promise.all(
        personName.map(async (question) => {
          await axios.post(`/question/${question._id}/addQuiz`, { quizId });
        })
      );

      // navigate("/associate-module");
    } catch (error) {
      console.error("Error adding quiz:", error);
    }
  };

  const handleCreateNew = () => {
    navigate("/create-new-question");
  };

  return (
    <div className="create-quiz-container">
      <h2>Add Quiz</h2>
      <form onSubmit={handleSubmit} className="create-quiz-form">
        <div className="align">
          <div className="left-half">
            <label>
              Name:
              <input
                className="input-field"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Description:
              <textarea
                className="input-field des-height"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div className="right-half">
            <label>
              Time Limit:
              <select
                className="input-field"
                value={timeLimitType}
                onChange={handleToggleChange}
              >
                <option value="fixed">Fixed Deadline</option>
                <option value="daysFromStart">
                  Number of Days from Course Start
                </option>
              </select>
              {timeLimitType === "fixed" ? (
                <label>
                  Quiz End Date:
                  <input
                    className="input-field"
                    type="date"
                    value={courseStartDate}
                    onChange={(e) => setCourseStartDate(e.target.value)}
                    required
                  />
                </label>
              ) : (
                <label>
                  Number of Days:
                  <input
                    className="input-field"
                    type="text"
                    value={numberOfDays}
                    onChange={(e) => setNumberOfDays(e.target.value)}
                    placeholder="Enter number of days"
                    required
                  />
                </label>
              )}
            </label>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Randomize the questions in the quiz"
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="divider">Questions:</div>
        <div className="search-dropdown"></div>
        <div className="side">
          <div className="add-new-q">
            <FormControl sx={{ m: 1, width: 600 }}>
              <Autocomplete
                multiple
                id="tags-outlined"
                options={existingQuestions} // You can use options fetched from API here
                getOptionLabel={(option) => option.question} // Assuming each question object has a title property
                value={personName}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Add Existing Question"
                    placeholder="Add Existing Question"
                    className="custom-autocomplete"
                  />
                )}
              />
            </FormControl>
          </div>
          <div className="button-container">
            <div className="create-new-button">
              <button
                className="submit-button"
                type="button"
                onClick={handleCreateNew}
              >
                CREATE NEW
              </button>
            </div>
            <div className="save-and-next">
              <button
                className="submit-button"
                type="submit"
                disabled={!existingQuestionsSelected}
              >
                SAVE AND GO TO NEXT STEP
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuizForm;
