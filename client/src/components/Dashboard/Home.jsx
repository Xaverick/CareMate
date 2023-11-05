/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BarChart } from "@mui/x-charts/BarChart";
import badge1 from "../../assets/badge1.png";
import fire from "../../assets/fire.png";
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Home.scss";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import img1 from '../../assets/heartbeat.gif';
import img2 from '../../assets/medicine.gif';
import img3 from '../../assets/hand.gif';


const ValuePiece = Date | null;
const Value = ValuePiece | [ValuePiece, ValuePiece];

function Home() {
  const { loggedDetails, taskScore } = useUserContext();
  const [userDetailsDb,setUserDetailsDb]=useState({});

  useEffect(() => {
    getUserDetailsByemail();
  }, [userDetailsDb]);

  // function or in login page we can keep the userdetails in context
  // in loggedDetails will get all the name, user diseases names
  async function getUserDetailsByemail() {
    try {
      let email = localStorage.getItem("userEmail");
      const response = await axios.get(`/user/email/${email}`);

      if (response.status === 200) {
        console.log("User exists:", response.data.user);
        setUserDetailsDb(response.data.user);
      } else if (response.status === 404) {
        console.log("User not found");
        alert("User not found");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  }
  const [value, onChange] = useState(new Date());

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="blue">
      <div className="main-title">
        <h3>Hi {userDetailsDb.name}</h3>
      </div>

      <div className="upper-section">
        <div className="Graph">
          <h3>LifeStyle Analytics</h3>
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={400}
            height={300}
          />

          <div className="content"></div>
        </div>

        <div className="Graph Goal">
          <h3>Goals</h3>
          <CircularProgressbar
            value={50 + taskScore}
            text={`${50 + taskScore}%`}
            className="progress-bar"
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",

              // Text size
              textSize: "1rem",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: `rgba(62, 152, 199, ${75 / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "white",
            })}
          />
          <div className="content"></div>
        </div>

        <div className="group">
          <div className=" badges">
            <h3>Badges</h3>
            <div className="badge">
              <img src={badge1} alt="" />
            </div>
            <div className="icons">
              <div className="badge">
                <img src={badge1} alt="" />
              </div>
              <div className="badge">
                <img src={badge1} alt="" />
              </div>
              <div className="badge">
                <img src={badge1} alt="" />
              </div>
              <div className="badge">
                <img src={badge1} alt="" />
              </div>
              <div className="badge">
                <img src={badge1} alt="" />
              </div>
              <div className="badge"></div>
              <div className="badge"></div>
              <div className="badge"></div>
              <div className="badge"></div>
              <div className="badge"></div>
            </div>
          </div>
          <div className="Graph streak">
            <h3>Streak</h3>
            <div className="count">
              <img src={fire} alt="Streakfire" />
              <h4>4</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="mid-section">
        <div className="notes">
          <textarea
            name="notes"
            id="notes"
            cols="30"
            rows="10"
            placeholder="write a note"
          ></textarea>
        </div>

        <div className="calendar">
            <Calendar className='content' onChange={onChange}   value={value} />
        </div>

        
      </div>

      <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"3rem",
    gap:"3rem"}}>
     <Card sx={{ maxWidth: 385 }} style={{display:"flex", alignItems:"center", flexDirection:"column",gap:"1rem"}}>
      <CardMedia
        sx={{ height: 245, width: 200 }}
        style={{width:"120px",height:"120px"}}
        image={img1}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Write Question 1 here 
        </Typography>
      </CardContent>
      <CardActions>
    <FormGroup>
      <FormControlLabel  control={<Checkbox />} label="Done" />
    </FormGroup>

      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} style={{display:"flex", alignItems:"center", flexDirection:"column",gap:"1rem"}}>
      <CardMedia
        sx={{ height: 245, width: 200 }}
        style={{width:"120px",height:"120px"}}
        image={img2}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Write Question 1 here 
        </Typography>
      </CardContent>
      <CardActions>
    <FormGroup>
      <FormControlLabel  control={<Checkbox />} label="Done" />
    </FormGroup>

      </CardActions>
    </Card>


    <Card sx={{ maxWidth: 400, maxHeight: 600 }} style={{display:"flex", alignItems:"center", flexDirection:"column",gap:"1rem"}}>
      <CardMedia
        sx={{ height: 245, width: 200 }}
        style={{width:"120px",height:"120px"}}
        image={img3}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Write Question 1 here 
        </Typography>
      </CardContent>
      <CardActions>
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="Done" />
    </FormGroup>

      </CardActions>
    </Card>
    </div>


    </main>
  );
}

export default Home;
