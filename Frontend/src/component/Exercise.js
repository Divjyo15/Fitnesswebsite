import React from "react";
import './Exercise.css';
import lunges from '../images/lunges.png';
import yoga from '../images/yoga.png';
import extended from '../images/extended.png';
const Exercise = () =>
{
    return <section id="Schedule">
        <div className="Container exercise_container">
        <div className="exercise_top">
            <h2 className="section_title">
            Benefits of <span className="highlights">Exercise</span></h2>
<p>  </p>
        </div>
   {/* exercise list*/}
<div className="exercise_wrapper">
<div className="exercise_item"
data-aos="zoom in"
data-aos-duration="1800">

<span className="exercise_icon">
<img src={yoga} alt=" "/>
</span>
<div className="exercise_content">
<h4> Healthy Life</h4>
<p> lorem ipsum  dolor sit amet consectetur adipisicing elit. Quisquam, quia!</p>
</div>
</div>
<div className="exercise_item" data-aos="zoom in"
data-aos-duration="1800">
<span className="exercise_icon">
<img src={lunges} alt=" "/>
</span>
<div className="exercise_content">
<h4 > Increased Flexibility </h4>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!
</p>
</div>
</div>
    <div className="exercise_item"
    data-aos="zoom in"
data-aos-duration="1800">


<span className="exercise_icon">
<img src={extended} alt=" "/>
</span>

<div className="exercise_content">
<h4>Reducing Blood Pressure</h4>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia!
</p>
</div>


</div>
</div>
</div>
    </section>
    
};
export default Exercise;