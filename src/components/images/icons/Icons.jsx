export const ChevronDown = ({ className, ...props }) => (
	<svg
		className={className}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}>
		<path d='M4 8l8 8 8-8' />
	</svg>
);

export const ChevronUp = ({ className, ...props }) => (
	<svg
		className={className}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		{...props}>
		<path d='M20 16l-8-8-8 8' />
	</svg>
);

export const Search = ({ className, ...props }) => (
	<svg
		className={className}
		xmlns='http://www.w3.org/2000/svg'
		{...props}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2.25}
		strokeLinecap='round'
		strokeLinejoin='round'>
		<path d='m21 21-4.34-4.34' />
		<circle
			cx='11'
			cy='11'
			r='8'
		/>
	</svg>
);

export const Sun = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<circle
			cx='12'
			cy='12'
			r='4'
		/>
		<path d='M12 2v2' />
		<path d='M12 20v2' />
		<path d='m4.93 4.93 1.41 1.41' />
		<path d='m17.66 17.66 1.41 1.41' />
		<path d='M2 12h2' />
		<path d='M20 12h2' />
		<path d='m6.34 17.66-1.41 1.41' />
		<path d='m19.07 4.93-1.41 1.41' />
	</svg>
);
export const Grid = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		{...props}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={1.6}>
		<rect
			width='7'
			height='7'
			x='3'
			y='3'
			rx='1'
		/>
		<rect
			width='7'
			height='7'
			x='14'
			y='3'
			rx='1'
		/>
		<rect
			width='7'
			height='7'
			x='14'
			y='14'
			rx='1'
		/>
		<rect
			width='7'
			height='7'
			x='3'
			y='14'
			rx='1'
		/>
	</svg>
);

export const SidebarToggle = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		{...props}>
		<rect
			x='3'
			y='4'
			width='18'
			height='16'
			rx='2'
		/>
		<path d='M9 4v16' />
	</svg>
);

export const Menu = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		{...props}>
		<path d='M3 5h18' />
		<path d='M3 12h18' />
		<path d='M3 19h18' />
	</svg>
);

export const NotesIcon = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		{...props}>
		<rect
			x='4'
			y='4'
			width='16'
			height='18'
			rx='2'
		/>
		<path d='M8 10h8' />
		<path d='M8 14h8' />
		<path d='M8 18h5' />
	</svg>
);

export const Hash = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		{...props}>
		<line
			x1='4'
			y1='9'
			x2='20'
			y2='9'
		/>
		<line
			x1='4'
			y1='15'
			x2='20'
			y2='15'
		/>
		<line
			x1='10'
			y1='3'
			x2='8'
			y2='21'
		/>
		<line
			x1='16'
			y1='3'
			x2='14'
			y2='21'
		/>
	</svg>
);

export const Plus = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<path d='M5 12h14' />
		<path d='M12 5v14' />
	</svg>
);

export const MenuFilter = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<path d='M3 5h18' />
		<path d='M3 12h18' />
		<path d='M3 19h18' />
	</svg>
);

export const SplitScreen = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<title>Vertical split</title>
		<rect
			x='2'
			y='4'
			width='20'
			height='16'
			rx='2'
		/>
		<line
			x1='12'
			y1='4'
			x2='12'
			y2='20'
		/>
	</svg>
);

export const Dots = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<circle
			cx='12'
			cy='12'
			r='1'
		/>
		<circle
			cx='19'
			cy='12'
			r='1'
		/>
		<circle
			cx='5'
			cy='12'
			r='1'
		/>
	</svg>
);

export const Dot = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={className}
		{...props}>
		<circle
			cx='12'
			cy='12'
			r='6'
		/>
	</svg>
);

export const Star = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<path d='M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z' />
	</svg>
);

export const Calendar = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<path d='M11 14h1v4' />
		<path d='M16 2v4' />
		<path d='M3 10h18' />
		<path d='M8 2v4' />
		<rect
			x='3'
			y='4'
			width='18'
			height='18'
			rx='2'
		/>
	</svg>
);

export const CheckboxNotChecked = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={className}
		{...props}>
		<path d='M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z' />
	</svg>
);

export const CheckboxChecked = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={className}
		{...props}>
		<path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17.99 9L16.58 7.58L9.99 14.17L7.41 11.6L5.99 13.01L9.99 17L17.99 9Z' />
	</svg>
);

export const DeleteIcon = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='currentColor'
		className={className}
		{...props}>
		<path d='M14.12 10.47L12 12.59L9.87 10.47L8.46 11.88L10.59 14L8.47 16.12L9.88 17.53L12 15.41L14.12 17.53L15.53 16.12L13.41 14L15.53 11.88L14.12 10.47ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z' />
	</svg>
);

export const Watch = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<path d='M12 6v6H8' />
		<circle
			cx='12'
			cy='12'
			r='10'
		/>
	</svg>
);

export const SlidersIcon = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<line
			x1='4'
			y1='21'
			x2='4'
			y2='14'
		/>
		<line
			x1='4'
			y1='10'
			x2='4'
			y2='3'
		/>
		<line
			x1='12'
			y1='21'
			x2='12'
			y2='12'
		/>
		<line
			x1='12'
			y1='8'
			x2='12'
			y2='3'
		/>
		<line
			x1='20'
			y1='21'
			x2='20'
			y2='16'
		/>
		<line
			x1='20'
			y1='12'
			x2='20'
			y2='3'
		/>
		<line
			x1='1'
			y1='14'
			x2='7'
			y2='14'
		/>
		<line
			x1='9'
			y1='8'
			x2='15'
			y2='8'
		/>
		<line
			x1='17'
			y1='16'
			x2='23'
			y2='16'
		/>
	</svg>
);

export const LightbulbIcon = ({ className, ...props }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
		className={className}
		{...props}>
		<path d='M9 18h6' />
		<path d='M10 22h4' />
		<path d='M12 2a7 7 0 0 0-4 12c.6.6 1 1.4 1 2.3V17h6v-.7c0-.9.4-1.7 1-2.3A7 7 0 0 0 12 2z' />
	</svg>
);
