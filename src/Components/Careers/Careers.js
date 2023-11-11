import React, { Component } from "react";
import "./index.css";

export default class Careers extends Component {
  render() {
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="services-head1 text-center">Careers</h1>
            </div>

            <div className="col-12 col-lg-6 mb-4">
              <div className="career-card shadow">
                <h4><span class="badge bg-success ">NOW HIRING</span></h4>
                <h1>Software developer</h1>
                <p className="mb-4">No. of position: <span class="badge bg-light text-dark">1</span></p>

                <h5>Description</h5>
                <p>
                  Job Summary

As a MERN STACK developer, you will be responsible for developing and maintaining our water treatment management software. You will work in our software department and handle all the aspects of front-end and back-end development. You will also collaborate with the hardware engineer and the founders to ensure that our software meets the needs of our clients and users.

Job Duties and Responsibilities

Design, develop, test, deploy, and maintain our web-based water treatment management software using react.js, node.js, MySQL, and python.
Implement user interface components and features using HTML, CSS, JavaScript, and react.js.
Build and integrate APIs and services using node.js, express.js, and python.
Manage and optimize databases using MySQL and other tools.
Ensure the performance, security, scalability, and reliability of our software.
Troubleshoot, debug, and fix bugs and issues in the software.
Write clean, readable, and maintainable code following best practices and standards.
Write technical documentation and user manuals for the software.
Research and learn new technologies and frameworks to improve the software.
Provide technical support and assistance to clients and users.

Job Qualifications and Requirements

Proven experience as a Mainstream Developer or similar role.
Strong knowledge of front-end technologies such as HTML, CSS, JavaScript, and react.js.
Strong knowledge of back-end technologies such as node.js, express.js, python, and MySQL.
Experience with web development tools such as webpack, babel, npm, git, etc.
Experience with web application security, authentication, authorization, encryption, etc.
Experience with web application testing tools such as jest, mocha, chai, selenium, etc.
Experience with web application deployment tools such as AWS, Heroku, Docker, etc.
Experience with water treatment management software or similar domain is a plus.
Excellent problem-solving and analytical skills.
Excellent communication and collaboration skills.
Ability to work independently and manage multiple tasks.
Bachelor's degree in computer science or related field or equivalent work experience.

Job Expectations

- Work hours: Monday to Friday from 9 am to 5 pm (flexible).
- Work location: Our office is located in Kanayannur, Kerala. Remote work is possible depending on the situation.
- Salary: Negotiable based on experience and qualifications.



                </p>

                <p className="mb-3">
                  How to Apply

If you are interested in applying for this position, please send your resume and portfolio to our email address: hello@ebhoom.com. Please include "Mainstream Developer Application" in the subject line. We will review your application and contact you for an interview if you meet our requirements. Thank you for your interest in working with us!

We hope this manual helps you find the best candidate for your Mainstream Developer position. If you have any questions or feedback, please let me know. We’re always happy to help 😊.{" "}
                  
                </p>
                <p className="mb-3">Internship Location: <span class="badge bg-light text-dark">Ernakulam</span></p>
                <p className="mb-3">Internship Nature: <span class="badge bg-light text-dark">Hybrid</span></p>
                <p className="mb-3">Last date to apply: <span class="badge bg-light text-dark">31/11/2023</span></p>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img
                className="nature"
                src="assets/images/earth.gif"
                alt="ebhoom"
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="p-5"></div>

        {/* divider */}
      </>
    );
  }
}
