import React from "react";
import "./education.css";

export default function Education() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">Butler University </span>
                        <span className="university-degree">
                            Web Development Certification{" "}
                        </span>
                    </div>{" "}
                    <div>
                        <span className="year-passedout">2021-2022</span>
                    </div>
                </div>
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">Ivy Tech Community College </span>
                        <span className="university-degree">UX/UI Development </span>
                    </div>{" "}
                    <div>
                        <span className="year-passedout">2017-2018</span>
                    </div>
                </div>
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="university-name">
                            University of Southern Indiana{" "}
                        </span>
                        <span className="university-degree">B.S. Graphic Design </span>
                    </div>{" "}
                    <div>
                        <span className="year-passedout">2004-2006</span>
                    </div>
                </div>
            </div>
        </>
    );
}
