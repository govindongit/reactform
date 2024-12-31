
import {React, useState} from "react";
import './Form.css';

function FormReact() {
  const[firstName, setFirstName] = useState ("");
  const[middleName, setMiddleName] = useState("");
  const[lastName, setLastName] = useState ("");
  const[email, setEmail] = useState ("");
  const[gender, setGender] = useState("male");
  const[subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const[selectedOption, setSelectedOption]= useState("");
  const[message, setMessage] = useState("");
  const[resume,setResume] = useState("");

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
        ...prev,
        [sub]: !prev[sub],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        firstName,
        middleName,
        lastName, 
        email,
        gender,
        selectedOption,
        resume,
        message
    );
  };

  const handleReset = () => {
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setEmail("");
      setGender("male");
      setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
      setSelectedOption("");
      setResume("");
      setMessage("");
  };
  
return(
  <div className="App">
    <h1>
      React Form 
    </h1>
    <fieldset>
      <form action="#" method="get">

        <label>First Name*</label>
        <input type="text" name="firstname" id="firstname" value={firstName}  
        onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" required/>
        
        <label> Middle Name*</label>
        <input type="text" name="middlename" id="middlename" value={middleName} 
        onChange={(e)=> setMiddleName(e.target.value)} placeholder="Enter Middle Name" required/>

        <label>Last  Name*</label>
        <input type="text" name="lastname" id="lastname" value={lastName}  
        onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" required/>

        <label for="email"> Email*</label>
        <input type="email" name="email" id="email" value={email} 
        onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Mail" required/>

        <label for="gender">Gender*</label>
        <input type="radio" name="gender" value="male"id="male" checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
            />
            Male
            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
            />
            Female
            <input type="radio" name="gender" value="other" id="other"checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
            />
            Other

        <label for="lang"> Your Best Subject </label>
        <input type="checkbox" name="lang" id="english" checked={subjects.english === true}
                        onChange={(e) =>
                            handleSubjectChange("english")
                        }
        />
        English
        <input type="checkbox" name="lang" id="maths" checked={subjects.maths === true}
                        onChange={(e) =>
                            handleSubjectChange("maths")
                        }
        />
        Maths
        <input type="checkbox" name="lang" id="physics" checked={subjects.physics === true}
                        onChange={(e) =>
                            handleSubjectChange("physics")
                        }
        />
        Physics
        <label>Select Your Choice</label>
        <select name="select" id="select" value={selectedOption}
              onChange={(e) => setSelectedOption( e.target.value) } >
              
              <option value="" disabled selected={selectedOption === ""} > Select Your</option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">
                                JavaScript
                            </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6"> Express</option>
                            <option value="7"> MongoDB</option>
                        </optgroup>
                    </select>
        <label for="file"> Upload Resume* </label>
        <input type="file" name="file" id="file" 
        onChange={(e)=> setResume(e.target.files[0])} placeholder="Upload File" required />
        
        <label for="message">Meesage</label>
        <textarea name="message" id="message" cols="30" rows="5" 
        onChange={(e)=> setMessage(e.target.value) } 
        placeholder="Write down message!" required
        ></textarea>

        <button type="reset" value="Reset" onClick={() => handleReset()}>
                        Reset
        </button>

        <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)}>
                        Submit
        </button>

      </form>
    </fieldset>
  </div>
)
}
export default FormReact;