import React from 'react';

const sections = [
  {
    title: 'PROFILE SETUP',
    percent: '73%',
    percentValue: 73,
    bg: 'bg-gray-100',
    percentColor: 'text-blue-600',
    items: [
      { label: 'Upload your Profile Picture', checked: true },
      { label: 'Complete Public Profile Information', checked: false },
      { label: 'Add your Physical Location', checked: true },
      { label: 'Connect a Social Media Account', checked: true },
      { label: 'Select Your Area of Expertise', checked: true },
      { label: 'Add Your First Bio/Blurb', checked: true },
    ],
  },
  {
    title: 'NETWORKING',
    percent: '100%',
    percentValue: 100,
    bg: 'bg-blue-100',
    percentColor: 'text-blue-600',
    items: [
      { label: 'Make Your First Connection', checked: true },
      { label: 'Explore Potential Connections', checked: true },
      { label: 'Invite Someone to ReiDirectory', checked: true },
      { label: 'Add a Key Role for Buyer', checked: true },
    ],
  },
  {
    title: 'PROPERTY TOOLS',
    percent: '100%',
    percentValue: 100,
    bg: 'bg-purple-100',
    percentColor: 'text-purple-600',
    items: [
      { label: 'Add a First Property Card', checked: true },
      { label: 'Share a Property with Others', checked: true },
      { label: 'Publish a Property', checked: true },
    ],
  },
  {
    title: 'COMMUNICATION',
    percent: '80%',
    percentValue: 80,
    bg: 'bg-green-100',
    percentColor: 'text-green-600',
    items: [
      { label: 'Send Your First Message', checked: true },
      { label: 'Start a Property Thread', checked: true },
      { label: 'Enable Notifications', checked: false },
    ],
  },
];

const checkIcon = () => (
  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-500 mr-2">
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M3 6.2l2 2.1 3-3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const dotIcon = () => (
  <span className="inline-block w-4 h-4 rounded-full mr-2 bg-white border-2 border-blue-500" />
);

const ProfileStatusTiles: React.FC = () => (
  <section className="bg-white dark:bg-gray-800 mt-6 md:mt-16 rounded-2xl shadow p-3 md:p-4 w-full max-w-full md:max-w-xs flex flex-col gap-2 mx-auto transition-colors duration-300">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-[13px] text-gray-900 dark:text-gray-100">Complete Your Home Dispo Setup</h3>
      <a href="#" className="flex items-center gap-1 text-xs text-blue-500 font-semibold hover:underline">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="3,2 8,5 3,8" fill="white" />
          </svg>
        </span>
        Learn More
      </a>
    </div>
    {sections.map((section) => {
      // Map light bg to dark bg
      let darkBg = '';
      if (section.bg === 'bg-gray-100') darkBg = 'dark:bg-gray-800';
      if (section.bg === 'bg-blue-100') darkBg = 'dark:bg-blue-900';
      if (section.bg === 'bg-purple-100') darkBg = 'dark:bg-purple-900';
      if (section.bg === 'bg-green-100') darkBg = 'dark:bg-green-900';
      return (
        <div
          key={section.title}
          className={`rounded-xl p-3 mb-1 last:mb-0 relative overflow-hidden ${section.bg} ${darkBg} transition-colors duration-300`}
        >
          {/* Dynamic background for percentValue% of each section */}
          <div
            className={`absolute top-0 left-0 h-full z-0 rounded-xl ${section.bg} ${darkBg}`}
            style={{ width: `${section.percentValue}%` }}
          />
          <div className="flex items-center mb-1 relative z-10">
            <span className="font-bold text-xs text-gray-700 dark:text-gray-100 mr-2">{section.title} <span className={`${section.percentColor}`}>({section.percent})</span></span>
          </div>
          <ul className="ml-1 relative z-10">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-center text-xs text-gray-700 dark:text-gray-100 mb-1 last:mb-0">
                {item.checked ? checkIcon() : dotIcon()}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </section>
);

export default ProfileStatusTiles; 