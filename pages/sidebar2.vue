<template>
  <div class="full-screen">
    <nav class="navbar">
    <div class="logo"><a href="#">logo</a></div>
    <div class="con">
      <a href="#">Home</a>
      <a href="#">News</a>
      <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">item 1</a>
        <a href="#">item 2</a>
        <a href="#">item 3</a>
      </div>
    </div>
    </div>
</nav>
    <div class="flex-centered">
      <aside>
        <menu role="menu" id="side-menu">
          <ul>
            <li class="side-menu-item">
              <div class="side-menu-item-wrapper">
                <div class="side-menu-icon">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
                    ></path>
                  </svg>
                </div>
                <div class="side-menu-text">
                  <a href="#"> Account </a>
                </div>
              </div>
            </li>
            <li class="side-menu-item">
              <div class="side-menu-item-wrapper">
                <div class="side-menu-icon">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"
                    ></path>
                  </svg>
                </div>
                <div class="side-menu-text">
                  <a href="#">Favourites </a>
                </div>
              </div>
            </li>
            <li class="side-menu-item">
              <div class="side-menu-item-wrapper">
                <div class="side-menu-icon">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z"
                    ></path>
                  </svg>
                </div>
                <div class="side-menu-text">
                  <a href="#"> Messages </a>
                </div>
              </div>
            </li>
            <li class="side-menu-item">
              <div class="side-menu-item-wrapper">
                <div class="side-menu-icon">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"
                    ></path>
                  </svg>
                </div>
                <div class="side-menu-text">
                  <a href="#"> Files </a>
                </div>
              </div>
            </li>
            <li class="side-menu-item">
              <div class="side-menu-item-wrapper">
                <div class="side-menu-icon">
                  <svg class="svg-icon" viewBox="0 0 20 20">
                    <path
                      d="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"
                    ></path>
                  </svg>
                </div>
                <div class="side-menu-text">
                  <a href="#"> Settings </a>
                </div>
              </div>
            </li>
          </ul>
        </menu>
      </aside>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.full-screen {
  display: block;
  position: fixed;
  width: 800px;
  height: 800px;
  background-color: lightblue !important;
}
.sidebar-panel {
  background-color: #130f40;
  position: fixed;
  top: 100px;
  height: 70vh;
  width: 150px;
}
/* .flex-centered {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 300px;
  margin: 0 auto;
} */

/* ----- Menu ----- */
menu#side-menu {
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  padding: 0;
  margin: 0;
  max-width: 250px;
  border-radius: 10px;
  left: -16em;
}

menu#side-menu ul {
  padding: 0;
  margin: 0;
}

menu#side-menu ul li.side-menu-item {
  list-style-type: none;
  display: block;
}

menu#side-menu ul li.side-menu-item .side-menu-item-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

menu#side-menu ul li.side-menu-item .side-menu-icon {
  padding: 1rem 1.15rem;
  font-size: 1.5rem;
  cursor: pointer;
}

menu#side-menu ul li.side-menu-item .side-menu-icon svg {
  position: relative;
  top: 0.1rem;
}

menu#side-menu ul li.side-menu-item .side-menu-text {
  padding: 1rem 0;
  width: 0;
  opacity: 0;
  cursor: pointer;
  font-size: 1rem;
}

menu#side-menu ul li.side-menu-item .side-menu-text a {
  color: #cecece;
  text-decoration: none;
}

menu#side-menu ul li.side-menu-item:first-child:hover {
  border-radius: 10px 10px 0 0;
}

menu#side-menu ul li.side-menu-item:last-child:hover {
  border-radius: 0 0 10px 10px;
}

menu#side-menu ul li.side-menu-item:hover {
  background: rgba(0, 0, 0, 0.25);
}

menu#side-menu ul li.side-menu-item:hover .side-menu-icon .svg-icon path,
menu#side-menu ul li.side-menu-item:hover .side-menu-icon .svg-icon polygon,
menu#side-menu ul li.side-menu-item:hover .side-menu-icon .svg-icon rect {
  fill: var(--niceblue);
}

menu#side-menu ul li.side-menu-item:hover .side-menu-text a {
  color: var(--niceblue);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
}

menu#side-menu:hover > ul li.side-menu-item .side-menu-text {
  opacity: 1;
  padding-right: 1.5rem;
  width: 100%;
  min-width: 200px;
  transition: all 0.15s ease-in-out;
}

/* ----- SVG Icons - svgicons.sparkk.fr ----- */

menu#side-menu ul li.side-menu-item .svg-icon {
  width: 1em;
  height: 1em;
}

menu#side-menu ul li.side-menu-item .svg-icon path,
menu#side-menu ul li.side-menu-item .svg-icon polygon,
menu#side-menu ul li.side-menu-item .svg-icon rect {
  fill: #cecece;
}

menu#side-menu ul li.side-menu-item .svg-icon circle {
  stroke: #cecece;
  stroke-width: 1;
}


/****************** navbar *************/
.navbar {
    overflow: hidden;
    background: #442341;
    font-family: Arial;
}

.navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  transition: all .5s ease;
}

.dropdown {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
  cursor: pointer;
}

.navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #fa5545;
    padding-left: 30px;
    color: #fff;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.con {
  float: right;
}

.logo a {
  float: left;
  padding: 7.5px 26px;
  color: #fa5545;
  font-size: 26px;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: -0.1em;
  transition: all 0.5s ease-in-out;
}

.logo a:hover {
  padding-left: 46px;
  transform: scale(1.5,0.7);
  background: none;
}
</style>
