import React from 'react';

//CV function displays CV content
const CV = () => {
    return(
        <div className='cv'>
            {/* about me section */}
            <section className='about'>
                <p className='heading'><i className='fa fa-lg fa-user' />ABOUT</p>
                <div>
                    Over the past three years I have learnt and been exposed to multiple programming languages that offer different perspectives of the industry and challenges which have allowed me to learn more about my strengths and weaknesses. I'm currently enrolled at WeThinkCode. 
                </div>
            </section>

            {/* various experiences */}
            <section className='xp'>
                <p className='heading'><i className='fa fa-lg fa-building' />WORK EXPERIENCE</p>
                <div>
                    <p className='cv-title'>Producer and Presenter, Rhodes Music Radio</p>
                    <span>Feb 2017 - Nov 2018</span>
                    <p>I experienced a lot of growth at RMR after being part of the team for just over a year and a half. I worked my way from being a co-host of the drive time show (The Drive-by Show) to being a host of my own show (The Weekend Wake Up Call). My roles included presenting and producing content for the music chart show (RMR Top 40).</p>
                    
                    <p className='cv-title'>Student Volunteer, Rhodes University (Rhodes Engaged Citizen Programme)</p>
                    <span>Feb 2017 - Nov 2018</span>
                    <p>As a student voluteer at Rhodes I learnt that everyone has something to offer, regardless of your background and status in society. I voluteered as a mentor and a tutor, assisting high school and primary school students with their school work while learning the value of knowledge together.</p>

                    <p className='cv-title'>Vac Subwarden, Rhodes University</p>
                    <span>{"Apr, Jun & Sep 2018"}</span>
                    <p>During the school holidays, RU offers various job oportunities to students. The university uses its residence facilities to accomodate guests who go to Grahamstown for various reasons. My role during the mentioned dates was to look after the res I was assigned to, tend to the needs of the guests as well as being a liaison for the guests should they need to communicate with the university.</p>
                    
                    <p className='cv-title'>Tutor, Inspire Foundation Group Africa</p>
                    <span>Jan 2018</span>
                    <p>Through high impact education programs, <a href='http://ifgafrica.org.za/' target='blank'>IFG</a> is an NPO that aims to bridge education gaps between rural-township youth with their private school counterparts. I was part of this program in the last 3 years of my high school so I sa it fitting to give back to the program by being part of their tutoring program. I was tasked with tutoring and assisting grade 7 students with learning computer skills.</p>

                    
                </div>
            </section>

            {/* skills section */}
            <section className='skills'>
                <p className='heading'><i className='fa fa-lg fa-code'/>SKILLS</p>
                <ul>
                    <li>C#</li>
                    <li>C</li>
                    <li>Python</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </section>

            {/* education level */}
            <section className='education'>
                <p className='heading'><i className='fa fa-lg fa-mortar-board' />EDUCATION and training</p>
                <div>
                    <p className='cv-title'>Matric (NQF4)</p>
                    <p><a target='blank' href='https://dalecollege.co.za/'>Dale College Boys' High School</a></p>
                    <p className='cv-title'>Coding Bootcamp</p>
                    <p><a target='blank' href='https://www.lifechoices.co.za/'>Life Choices Academy powered by CoGrammar</a></p>
                    <p className='cv-title'>Coding Academy</p>
                    <p><a target='blank' href='https://www.wethinkcode.co.za/'>WeThinkCode</a></p>
                </div>
            </section>
        </div>
    )
}

//export to allow use on other components
export default CV;
