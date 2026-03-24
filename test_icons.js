import * as si from 'react-icons/si';
const required = ['SiJavascript', 'SiTypescript', 'SiPython', 'SiCplusplus', 'SiReact', 'SiNextdotjs', 'SiTailwindcss', 'SiRedux', 'SiNodedotjs', 'SiExpress', 'SiMongodb', 'SiPostgresql', 'SiDocker', 'SiFirebase', 'SiVercel', 'SiNetlify'];
required.forEach(req => {
  if (!si[req]) {
    console.log("Missing:", req);
  }
});
