import {
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiMaterialui,
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiAngular,
  SiMicrosoftsqlserver,
  SiDotnet
} from 'react-icons/si'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { ImHtmlFive, ImCss3, ImGit } from 'react-icons/im'

export const icons = [
  {
    icon: <ImHtmlFive size={50} color="rgb(229,76,33)" />
  },
  {
    icon: <ImCss3 size={50} color="rgb(33,76,229)" />
  },
  {
    icon: <SiJavascript size={50} color="rgb(252,220,0)" className="bg-black" />
  },
  {
    icon: <SiJquery size={50} color="rgb(0,187,255)" />
  },
  {
    icon: <SiAngular size={50} color="rgb(204,0,0)" />
  },
  {
    icon: <SiReact size={50} color="rgb(65,224,253)" />
  },

  {
    icon: <SiRedux size={50} color="rgb(175,135,239)" />
  },

  {
    icon: <SiNextdotjs size={50} color="rgb(0,0,0)" />
  },

  {
    icon: <SiBootstrap size={50} color={'rgb(117, 50, 249)'} />
  },

  {
    icon: <SiMaterialui size={50} color={'rgb(0,127,255)'} />
  },

  {
    icon: <SiTailwindcss size={50} color="rgb(56,189,248)" />
  },

  {
    icon: (
      <>
        <FaLessThan size={15} color="#000" />
        <h4 className="fs-3">💅</h4>
        <FaGreaterThan size={15} color="#000" />
      </>
    )
  },
  {
    icon: <SiDotnet size={50} color="rgb(0,99,177)" />
  },
  {
    icon: <SiMicrosoftsqlserver size={50} color="rgb(0,120,215)" />
  },
  {
    icon: <ImGit size={50} color="rgb(240,80,48)" />
  }
]
