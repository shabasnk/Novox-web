// // pages/Courses.jsx
// import React from 'react';
// import CourseCard from './courseCard';
// import { coursesData } from './coursesData';
// import './Courses.css';

// const Courses = () => {
//   return (
//     <div className="courses-page">
//       {/* Header Section */}
//       <header className="courses-header">
//         <h1>Active Courses</h1>
//         <p className="subtitle">Manage and monitor your industry-focused programs.</p>
//       </header>

//       {/* Courses Grid */}
//       <div className="courses-grid">
//         {coursesData.map(course => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;








// pages/Courses.jsx
import React, { useState } from 'react';
import CourseCard from './courseCard';
import { coursesData } from './coursesData';
import './Courses.css';

const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const Courses = () => {
  const [search, setSearch] = useState('');

  const filtered = coursesData.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">

      {/* Header */}
      <header className="courses-header">
        <div className="courses-header-left">
          <h1>Active Courses</h1>
          <p className="subtitle">Manage and monitor your industry-focused programs.</p>
        </div>

        <div className="courses-header-right">
          <div className="search-box">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="btn-new-course">+ New Course</button>
        </div>
      </header>

      {/* Courses Grid */}
      <div className="courses-grid">
        {filtered.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default Courses;

