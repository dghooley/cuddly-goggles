import React from "react";
import "./work.css";

export default function Work() {
    return (
        <>
            <div className="work-inside-new mx-2 my-4">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                        <span className="company-name">Self Employed</span>
                        <span className="year-passedout">2021-present</span>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <span className="position">Full Stack Developer</span>
                    <span className="description-position">
                        <ul>
                            <li> Created multiple applications using MERN stack</li>
                            <li> Created multiple applications using MERN stack</li>
                            <li> Created multiple applications using MERN stack</li>
                        </ul>
                    </span>
                </div>
            </div>
        </>
    );
}
