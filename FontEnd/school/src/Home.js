import React from 'react';


function Home() {
    return (
        <div>
            <h2>Welcome to Our School</h2>
           <div className='bg' ></div>
            <p>Our school is dedicated to providing quality education and fostering a supportive learning environment for all students.</p>
            
            <h3>About Us</h3>
            <p>We strive to offer a comprehensive curriculum that meets the needs of our diverse student body. Our experienced faculty members are committed to helping students achieve academic success and personal growth.</p>
            
            <h3>Our Mission</h3>
            <p>Our mission is to inspire a lifelong love of learning and to empower students to reach their full potential.</p>
            
            <h3>School Facilities</h3>
            <p>Our school boasts state-of-the-art facilities, including:</p>
            <ul>
                <li>Modern classrooms equipped with interactive whiteboards</li>
                <li>Science laboratories for hands-on experiments</li>
                <li>Library with a vast collection of books and resources</li>
                <li>Sports fields and gymnasium for physical activities</li>
                <li>Computer labs with internet access</li>
            </ul>
            
            <h3>Extracurricular Activities</h3>
            <p>Students can participate in a variety of extracurricular activities, such as:</p>
            <ul>
                <li>Sports teams (e.g., basketball, soccer, volleyball)</li>
                <li>Clubs and organizations (e.g., debate club, drama club, student council)</li>
                <li>Community service projects</li>
                <li>Music and arts programs</li>
            </ul>
            
            <h3>Gallery</h3>
            <div className="gallery">
                <img src="https://www.example.com/school-image1.jpg" alt="School Image 1" />
                <img src="https://www.example.com/school-image2.jpg" alt="School Image 2" />
                <img src="https://www.example.com/school-image3.jpg" alt="School Image 3" />
            </div>
        </div>
    );
}

export default Home;
