import React, { useEffect, useRef } from 'react';
import PlayButton from '../ui/PlayButton';

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

const AnimatedBg = ({ percentValue, className, children }: { percentValue: number, className: string, children?: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.style.width = '0%';
      setTimeout(() => {
        ref.current && (ref.current.style.width = percentValue + '%');
      }, 950);
    }
  }, [percentValue]);
  return (
    <div
      ref={ref}
      className={className}
      style={{ width: 0, transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)' }}
    >
      {children}
    </div>
  );
};

const ProfileStatusTiles: React.FC = () => (
  <section className="hidden lg:flex bg-white dark:bg-black rounded-2xl shadow p-4 mt-20 w-full max-w-sm flex-col gap-2 m-4">
    <div className="flex justify-between items-center mb-2 flex-row">
      <h3 className="font-semibold text-[13px] text-gray-900 dark:text-white mr-2 whitespace-nowrap ">Complete Your Home Dispo Setup ?</h3>
      <a href="#" className="flex items-center text-xs text-blue-500 font-semibold hover:underline gap-1 whitespace-nowrap">
        <PlayButton width={16} height={16} />
        Learn More
      </a>
    </div>
    {sections.map((section) => (
      <div
        key={section.title}
        className={`rounded-xl p-3 mb-1 last:mb-0 relative overflow-hidden dark:bg-black`}
      >
        {/* Animated dynamic background for percentValue% of each section */}
        <AnimatedBg percentValue={section.percentValue} className={`absolute top-0 left-0 h-full z-0 rounded-xl ${section.bg} dark:bg-black`}>
        </AnimatedBg>
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
    ))}
  </section>
);

export default ProfileStatusTiles; 