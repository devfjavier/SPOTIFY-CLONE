const svgPaths = {
  index: <path d="m8 0.55078c-0.24445 0-0.48818 0.093174-0.67188 0.27734l-6.089 6.0882c-0.088964 0.090166-0.18884 0.33169-0.18838 0.58366v6.998c0 0.51934 0.42988 0.95117 0.94922 0.95117h4.2012c0.51934 0 0.94922-0.43183 0.94922-0.95117v-3.5488h1.6992v3.5488c0 0.51934 0.42988 0.95117 0.94922 0.95117h4.2012c0.51934 0 0.94922-0.43183 0.94922-0.95117v-7c-4.9e-5 -0.25129-0.09986-0.49199-0.1886-0.58193l-1.4423-1.4415-4.6465-4.6465c-0.1837-0.18417-0.42742-0.27734-0.67188-0.27734zm0 2.1504 5.1836 5.0605v5.9199h-2.5664v-3.6836c0-0.18725-0.02762-0.41824-0.21289-0.60352-0.18527-0.18527-0.41822-0.21289-0.60547-0.21289h-3.5977c-0.18729 0-0.41788 0.024064-0.60547 0.20898-0.18759 0.18492-0.21754 0.42715-0.21289 0.61914v3.6719h-2.5664v-5.9199z" />,
  search: <path d="m6.9147 13.329a6.3762 6.3759 0 0 0 3.9266-1.3534l3.5249 3.5247 1.1338-1.1337-3.5249-3.5247a6.3762 6.3759 0 0 0 1.3543-3.9272c0-3.5367-2.8778-6.4144-6.4147-6.4144-3.5369 0-6.4147 2.8776-6.4147 6.4144 0 3.5367 2.8778 6.4144 6.4147 6.4144zm0-11.225c2.6533 0 4.811 2.1576 4.811 4.8108 0 2.6531-2.1577 4.8108-4.811 4.8108-2.6533 0-4.811-2.1576-4.811-4.8108 0-2.6531 2.1577-4.8108 4.811-4.8108z" />,
  library: <path d="m9.75 1.0938a0.7 0.69998 0 0 1 0.7 0l4.2 2.4247a0.7 0.69998 0 0 1 0.35 0.60618v10.175a0.7 0.69998 0 0 1-0.7 0.69998h-4.2a0.7 0.69998 0 0 1-0.7-0.69998v-12.6a0.7 0.69998 0 0 1 0.35-0.60618zm1.05 1.8186v10.688h2.8v-9.071zm-9.1 12.088a0.7 0.69998 0 0 1-0.7-0.69998v-12.6a0.7 0.69998 0 0 1 1.4 0v12.6a0.7 0.69998 0 0 1-0.7 0.69998zm4.2 0a0.7 0.69998 0 0 1-0.7-0.69998v-12.6a0.7 0.69998 0 0 1 1.4 0v12.6a0.7 0.69998 0 0 1-0.7 0.69998z" />,
  createPlaylist: <>
    <path d="m0.06639 16h15.934v-16h-16z" fill="#fff" />
    <path d="m8 4v8m-4-4h8" fill="none" stroke="#000" strokeWidth="1.0079" />
  </>,
  x: <>
    <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
    <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
  </>,
  chevronLeft: <path strokeWidth=".72" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />,
  chevronRight: <path strokeWidth=".72" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />,
  tracks: <>
    <defs>
      <linearGradient id="linearGradient5016" x2="16" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3f12b8" offset="0" />
        <stop stopColor="#fff" offset="1" />
      </linearGradient>
    </defs>
    <path d="m0 16h16v-16h-16z" fill="url(#linearGradient5016)" strokeWidth="1.0079" />
    <path d="m5.7845 4.3979c-0.44804-0.00725-0.90754 0.24375-1.3188 0.95601-1.4621 2.5325 3.5345 6.2626 3.5345 6.2626s4.9963-3.73 3.534-6.2626c-0.4192-0.72608-0.88852-0.95168-1.3448-0.96927-1.1351-0.043767-2.1892 1.137-2.1892 1.137s-1.0709-1.1052-2.2159-1.1237z" fill="#fff" stroke="#fff" strokeWidth=".265" />
  </>,
  spotify: <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" />,
  tracks2: <path d="m8 2.9312-0.717-0.78613c-1.683-1.8453-4.769-1.2085-5.883 1.1115-0.523 1.0912-0.641 2.6667 0.314 4.6773 0.92 1.936 2.834 4.2549 6.286 6.7808 3.452-2.5259 5.365-4.8448 6.286-6.7808 0.955-2.0117 0.838-3.5861 0.314-4.6773-1.114-2.32-4.2-2.9579-5.883-1.1125zm0 13.069c-15.333-10.807-4.721-19.243-0.176-14.781 0.06 0.058666 0.119 0.11947 0.176 0.1824a3.12 3.328 0 0 1 0.176-0.18133c4.544-4.4651 15.157 3.9712-0.176 14.78z" />,
  play: <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />,
  pause: <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />,
  plus: <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />,
  listUl: <path d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />,
  grid: <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />,
  bell: <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />,
  clock: <>
    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
  </>,
  gear: <>
    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
  </>,
  user: <path d="m8 0.4795c-0.83991-8.035e-5 -1.6845 0.28343-2.3325 0.87906-0.64799 0.59563-1.0797 1.501-1.1179 2.6482-0.029322 0.86233 0.038334 1.4574 0.27902 2.0639 0.22348 0.56319 0.60533 1.1666 1.1288 2.0493-0.0036696 0.10312-0.031021 0.21061-0.19513 0.39191-0.18405 0.20333-0.49584 0.44658-0.88265 0.70874-0.77363 0.52432-1.8427 1.1377-2.8413 1.9742l-0.02006 0.01648-0.018236 0.02014c-0.62627 0.65818-1.0431 1.788-1.0431 4.2891h0.93372c0-2.3846 0.37471-3.2001 0.77871-3.6298 0.9098-0.7559 1.921-1.3441 2.7319-1.8936 0.41036-0.27812 0.77113-0.54485 1.0504-0.85342 0.2793-0.30856 0.49085-0.69896 0.45956-1.1391l-0.0072946-0.10988-0.056534-0.095231c-0.59988-1.0179-0.96107-1.5988-1.1507-2.0768-0.18966-0.47798-0.24075-0.87764-0.21337-1.683v-0.00183c0.03111-0.93487 0.35662-1.5655 0.81518-1.987 0.45856-0.42151 1.071-0.63371 1.7015-0.63365 0.63054 6.03e-5 1.2429 0.2121 1.7015 0.63365 0.45858 0.42155 0.78407 1.054 0.81518 1.9889 0.02739 0.80539-0.02371 1.205-0.21337 1.683-0.18966 0.47798-0.55085 1.0589-1.1507 2.0768l-0.056534 0.095231-0.00729 0.11171c-0.031283 0.44015 0.18026 0.82872 0.45956 1.1373 0.2793 0.30856 0.64008 0.5753 1.0504 0.85342 0.81046 0.54929 1.8205 1.1382 2.73 1.8936 0.40447 0.42933 0.78053 1.2428 0.78053 3.6298h0.93372c0-2.501-0.41687-3.6309-1.0431-4.2891l-0.01823-0.02014-0.02006-0.01648c-0.99856-0.83656-2.0677-1.4499-2.8413-1.9742-0.38681-0.26216-0.6986-0.50358-0.88265-0.70691-0.16418-0.18137-0.1915-0.29059-0.19513-0.39374 0.52352-0.8827 0.90538-1.4861 1.1288-2.0493 0.24068-0.60657 0.30834-1.2016 0.27902-2.0639-0.038172-1.1471-0.46993-2.0525-1.1179-2.6482-0.64797-0.59566-1.4926-0.87897-2.3325-0.87906z" />
}

export default svgPaths