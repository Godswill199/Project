
import React from "react";


// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   InputGroupAddon,
//   InputGroupText,
//   InputGroup,
//   Row,
//   Col
// } from "reactstrap";



class Index extends React.Component {
  render() {
    return (
      <>


      <div className="card mt-4">
      
          <img alt="..." src={require("assets/img/theme/youth.jpg")} className="card-img-top img-fluid" />
          <div className="card-body">
            <h3 className="card-title">WILL YOU LOVE TO JOIN THE TEAM?</h3>
            
            <p className="card-text">There’s no single characteristic that makes up an Craybid Brand Ambassador. We’re looking for students, socialites, leaders and people who know how to have a good time.

We want to make sure you’re familiar with the Craybid experience. So if you haven’t used Craybid already, visit our website at craybid.com</p>
         
</div>

<h1 className="text-center" >Are You?</h1>
</div>

      <div className="row bg-grey fill img-fluid rounded">
        
      <div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src={require("assets/img/theme/fun.jpg")} alt=""/>
    <div class="card-body">
      <h4 class="card-title">Fun</h4>
      <p class="card-text">You’re a charismatic person that can talk to just about anyone. You’re fearless, flexible and want to share something awesome with the world.</p>
    </div>
  </div>
</div>

<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src={require("assets/img/theme/Organised.jpg")} alt=""/>
    <div class="card-body">
      <h4 class="card-title">Organized</h4>
      <p class="card-text">You follow through on tasks and know how to keep a calendar. It’s been a while since you were truly overwhelmed.</p>
    </div>
  </div>
</div>

<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src={require("assets/img/theme/social.jpg")}  alt="" />
    <div class="card-body">
      <h4 class="card-title">Connected</h4>
      <p class="card-text">You have a robust/active online presence and familiarity with social media, along with a strong knowledge of Lagos events and latest news.</p>
    </div>
  </div>
</div>

<div class="col-lg-3 col-md-6 mb-4">
  <div class="card h-100">
    <img class="card-img-top" src={require("assets/img/theme/motivation.jpg")} alt=""/>
    <div class="card-body">
      <h4 class="card-title">Motivated</h4>
      <p class="card-text">You have strong integrity and want to learn the Craybid ways.</p>
    </div>
  </div>
</div>


    </div>

<div className=" bg-white fill img-fluid rounded">
  <hr/>
<h2  className="text-center"> WHAT’S IN IT FOR YOU?</h2>

<div className="row  ">
      <div className="col-lg-6 ">
        
   
        <ul>
          <li>
          You’ll get hands-on experience growing the brand in and around Nigeria.
          </li>
          <li>You’ll partner with amazing events across the city and negotiate deals the CrayBid way!</li>
          <li>CrayBid credit and cash, based on the number of signups, events and partnerships you can hook up. And of    course,you’ll get branded item.</li>
          <li>You will be considered for employment (on priority) when CrayBid is hiring!</li>
      
        </ul>
        <p className="text-black" > <b>Plus!</b> We’ll provide you with a range of promo materials (Mailers, social content etc.) for you to communicate your promo code with friends!</p>
      </div>
      <div className="col-lg-6">
      <img alt="..." src={require("assets/img/theme/question.jpg")} className="img-fluid rounded" />
      </div>
    </div>

       
<div class="container">

<div class="row">


    <div class="card card-outline-secondary my-4">
      <div class="card-header text-center">
        RESPONSIBILITY
      </div>
      <div class="card-body">
        <p>Your job will be to tell more people about us and what we do, this includes telling students, faculty, staff, and anyone else who has not tried CrayBid yet. You'll spread the word around campus, both on the ground and via social media, email and any other ways you can think of to reach people.
          You'll also represent CrayBid at high-profile events around your area!.</p>
        {/* <hr/> */}
     
        {/* <a href="#" class="btn btn-success">Leave a Review</a> */}
      </div>
    </div>
    </div>
    </div> 
</div>

<hr/>


<section id="about">
    <div class="container bg-white">
      <div class="row">
        <ul>
          <h2>TERMS AND CONDITIONS</h2>
          </ul>
          <ul>
          <p class="lead">This campaign has some rules. Since we know how much you hate the fine print we are keeping it pretty simple.</p>
          <ul>
            <li>All ambassadors are representatives of CrayBid and should behave accordingly.</li>
            <li>Any ambassador caught fraudulent claiming signups (e.g duplicate accounts) will be banned from the         platform.</li>
            <li>Promo codes issued are unique and offers a free credit up to 20 credits to bid on the platform.</li>
            <li>Codes are valid throughout Nigeria and for  total of 3 months.</li>
          </ul>
          </ul>
      </div>
      <h3 className="card-title">SUBMIT AN APPLICATION</h3>
        <p className="card-text">If you think you’ve got what it takes, </p>
        <a href="/auth/signup" class="btn btn-success">Apply Now</a>
        <hr/>
</div>
  </section>




      </>
    );
  }
}

export default Index;
