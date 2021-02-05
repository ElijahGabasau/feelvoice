import { useState } from 'react';
import { Link } from 'react-router-dom';

function ButtonErr(props) {
  const plain = (
    <svg className="btn__content" viewBox="0 0 486 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8V6H214V3H281V1H323.5V3V6H376.5V1H415V4H424H457.5V6H480.5V8" stroke="#CF4F46"/>
      <path d="M4 58.5V45.5H1V22.5H4V6.5H33V8.5" stroke="#CF4F46"/>
      <path d="M382 59H411V62H449V59H454.5H485V35H483V14.5H480.5" stroke="#CF4F46"/>
      <path d="M45 59H158.5V62H198V59H235H246.5V57" stroke="#CF4F46"/>
      <path d="M246 57H287.5H323.5V60.5H373V57H381.5V59" stroke="#CF4F46"/>
    </svg>
  );
  
  const dur = "3000ms"

  const onHover = (
    <svg className="btn__content"  viewBox="0 0 486 63" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 8V6H214V3H281V1H323.5V3V6H376.5V1H415V4H424H457.5V6H480.5V8" stroke="#CF4F46"/>
      <path d="M4 58.5V45.5H1V22.5H4V6.5H33V8.5" stroke="#CF4F46"/>
      <path d="M382 59H411V62H449V59H454.5H485V35H483V14.5H480.5" stroke="#CF4F46"/>
      <path d="M45 59H158.5V62H198V59H235H246.5V57" stroke="#CF4F46"/>
      <g clipPath="url(#clip0)">
        <rect width="476" height="50" transform="translate(5.5 8)" fill="white">
        <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="white; #D73B30; white"
          />
        </rect>
        <path d="M33 8H50" stroke="#CF4F46" />
        <path d="M480.5 6.5V14.5" stroke="#CF4F46"/>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 247.788 -3.69092)" >
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 244.788 -9.53809)" fill="#D73B30">
          <animate
              attributeName="fill" 
              dur = { dur } 
              repeatCount="indefinite"
              values="#D73B30; white; #D73B30;"
            />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 286.788 -0.76709)" fill="#D73B30">
          <animate
              attributeName="fill" 
              dur = { dur } 
              repeatCount="indefinite"
              values="#D73B30; white; #D73B30;"
            />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 354.788 -0.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 292.788 -2.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 453.788 -2.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 469.788 -0.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 476.788 -2.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 448.788 -0.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 367.788 -0.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="10.4063" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 378.788 -5.15259)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 276.788 -9.53809)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 298.788 -11)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 303.788 -11)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 325.788 -9.53809)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 321.788 -9.53809)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 257.788 -9.53809)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 399.788 -5.15259)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 357.788 -5.15259)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 331.788 -3.69092)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 407.788 -5.15259)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 266.788 -2.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 339.788 -6.6145)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 339.788 -6.6145)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 461.788 -2.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 411.788 -3.69092)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 432.788 -5.15259)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.21255" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 483.788 0.694702)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 15.7882 -8.69092)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 12.788 -14.5381)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 54.7882 -5.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 122.788 -5.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 60.7882 -7.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 221.788 -7.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 237.788 -5.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 244.788 -7.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 216.788 -5.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 135.788 -5.76709)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="10.4063" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 146.788 -10.1526)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 44.7882 -14.5381)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 66.7882 -16)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 71.7882 -16)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 93.7882 -14.5381)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 89.7882 -14.5381)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 25.7882 -14.5381)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 167.788 -10.1526)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 125.788 -10.1526)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.11215" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 99.7882 -8.69092)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="1.11256" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 175.788 -10.1526)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 34.7882 -7.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 107.788 -11.6145)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 107.788 -11.6145)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 229.788 -7.229)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 179.788 -8.69092)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="6.56406" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 200.788 -10.1526)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
        <rect width="3.21255" height="87.5686" transform="matrix(0.931118 0.364717 -0.180292 0.983613 251.788 -4.3053)" fill="#D73B30">
          <animate
            attributeName="fill" 
            dur = { dur } 
            repeatCount="indefinite"
            values="#D73B30; white; #D73B30;"
          />
        </rect>
      </g>
      <path d="M246 57H287.5H323.5V60.5H373V57H381.5V59" stroke="#CF4F46"/>
      <defs>
        <clipPath id="clip0">
          <rect width="476" height="50" fill="white" transform="translate(5.5 8)"/>
        </clipPath>
      </defs>
    </svg>
  );
  
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} 
      className={`btn ${props.className}`}
    >
      {hover ? onHover : plain }
      {
        props.to?
        <button className="btn__btn btn__btn--hover-dark">
          <Link className="a" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "inherit", height: "inherit"}} to={props.to}>
            {props.children}
          </Link>
        </button>
        :
        <button className="btn__btn btn__btn--hover-dark">
          {props.children}
        </button>
      }
    </div>
  );
}

export default ButtonErr;