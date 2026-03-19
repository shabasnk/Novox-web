// // components/CourseCard.jsx
// import React from 'react';
// import './Courses.css';

// const CourseCard = ({ course }) => {
//   return (
//     <div className="course-card">
//       <h3 className="course-title">{course.title}</h3>
//       <p className="course-description">{course.description}</p>
      
//       <div className="course-meta">
//         <span className="duration-badge">📅 {course.duration}</span>
//         {course.hasAdvancedTag && (
//           <span className="advanced-badge">⭐ Advanced</span>
//         )}
//       </div>

//       <div className="course-actions">
//         <button className="btn-curriculum">Curriculum</button>
//         <button className="btn-manage">Manage</button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;











// components/CourseCard.jsx
import React from 'react';
import './Courses.css';

const courseIcons = {
  1: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="13" height="16" rx="2" stroke="#3B82F6" strokeWidth="1.8"/>
      <rect x="6" y="2" width="7" height="3" rx="1" stroke="#3B82F6" strokeWidth="1.8"/>
      <line x1="7" y1="11" x2="13" y2="11" stroke="#3B82F6" strokeWidth="1.5"/>
      <line x1="7" y1="14" x2="11" y2="14" stroke="#3B82F6" strokeWidth="1.5"/>
    </svg>
  ),
  2: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="2.5" rx="1" fill="#6366F1"/>
      <rect x="3" y="10.5" width="18" height="2.5" rx="1" fill="#6366F1"/>
      <rect x="3" y="16" width="18" height="2.5" rx="1" fill="#6366F1"/>
    </svg>
  ),
  3: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <polyline points="3,17 8,11 13,14 20,6" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="17,6 20,6 20,9" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  4: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 19l7-7-3-3-7 7v3h3z" stroke="#EF4444" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M16 5l3 3" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  5: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L4 7v5c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V7L12 3z" stroke="#EF4444" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  6: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" stroke="#F59E0B" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
    </svg>
  ),
};

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      {/* Icon + Title */}
      <div className="course-header">
        <div className="course-icon" style={{ background: course.iconBg }}>
          {courseIcons[course.id]}
        </div>
        <h3 className="course-title">{course.title}</h3>
      </div>

      {/* Description */}
      <p className="course-description">{course.description}</p>

      {/* Duration + Level */}
      <div className="course-meta">
        <span className="duration-badge">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          {course.duration}
        </span>
        <span className={`level-badge level-${course.level.toLowerCase()}`}>
          {course.level}
        </span>
      </div>

      {/* Actions */}
      <div className="course-actions">
        <button className="btn-curriculum">Curriculum</button>
        <button className="btn-manage">Manage</button>
      </div>
    </div>
  );
};

export default CourseCard;