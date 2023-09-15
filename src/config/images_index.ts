import CATS from "app/config/portfolio_data/cats";
import CIRCUITS from "app/config/portfolio_data/circuits";
import EYES from "app/config/portfolio_data/eyes";
import HUPPAH from "app/config/portfolio_data/huppah";
import KNIT_GRID from "app/config/portfolio_data/knit_grid";
import KNIT_PARADE from "app/config/portfolio_data/knit_parade";
import LANDSCAPE from "app/config/portfolio_data/landscape";
import PARADE from "app/config/portfolio_data/parade";
import PLEATS_STUDY from "app/config/portfolio_data/pleats_study";
import SKETCHBOOK from "app/config/portfolio_data/sketchbook";

export interface PortfolioEntry {
  additionalImages: string[];
  blurredIndex: string;
  categories: string[];
  description: string;
  indexAltText: string;
  inFocusIndex: string;
  largeAsset: string;
  medium: string;
  size: string;
  slug: string;
  tags: string[];
  title: string;
  year: string;
}

const PORTFOLIO: PortfolioEntry[] = [
  EYES,
  KNIT_PARADE,
  PLEATS_STUDY,
  KNIT_GRID,
  CIRCUITS,
  CATS,
  LANDSCAPE,
  {
    additionalImages: [],
    blurredIndex: require("app/assets/images/portfolio_index/knitpaint.png"),
    categories: ["PAINTING", "2D"],
    description: "",
    indexAltText: "Detail of Knit Paint, Oil Painting",
    inFocusIndex: require("app/assets/images/portfolio_index/knitpaint_focus.png"),
    largeAsset: require("app/assets/images/show/knitpaint.png"),
    medium: "Oil paint on panel",
    size: "3ft x 5ft",
    slug: "knit-paint",
    tags: [],
    title: "Knit Paint",
    year: "2007",
  },
  {
    additionalImages: [],
    blurredIndex: require("app/assets/images/portfolio_index/drawer1.png"),
    categories: ["PAINTING", "2D"],
    description: "",
    indexAltText: "Detail of Found Object Still Life, Guoache",
    inFocusIndex: require("app/assets/images/portfolio_index/drawer1_focus.png"),
    largeAsset: require("app/assets/images/show/drawer1.png"),
    medium: "Guoache on paper",
    size: "8in x 10in",
    slug: "drawer-1",
    tags: [],
    title: "Drawer of Found Objects",
    year: "2006",
  },
  {
    additionalImages: [],
    blurredIndex: require("app/assets/images/portfolio_index/screenprint.png"),
    categories: ["SCREENPRINTING", "2D"],
    description: "",
    indexAltText: "Detail of Scene from The Woods, Screenprint",
    inFocusIndex: require("app/assets/images/portfolio_index/screenprint_focus.png"),
    largeAsset: require("app/assets/images/show/screenprint.png"),
    medium: "Screenprint, gold ink on paper",
    size: "22in x 30in",
    slug: "screenprint",
    tags: [],
    title: "Scene from the Woods",
    year: "2007",
  },
  {
    additionalImages: [],
    blurredIndex: require("app/assets/images/portfolio_index/brainmoth.png"),
    categories: ["DIGITAL REPEAT", "2D"],
    description: "",
    indexAltText: "Detail of Abstract Brain-like Pattern, Digital Repeat",
    inFocusIndex: require("app/assets/images/portfolio_index/brainmoth_focus.png"),
    largeAsset: require("app/assets/images/show/brainmoth.png"),
    medium: "",
    size: "",
    slug: "brain-moth",
    tags: [],
    title: "Brain Moth",
    year: "2009",
  },
  // {
  //   title: 'Collected Stones',
  //   blurredIndex: require('Images/portfolio_index/stones.png'),
  //   indexAltText: 'Detail of Painting of Collected Stones, Guoache',
  //   inFocusIndex: require('Images/portfolio_index/stones_focus.png'),
  //   largeAsset: require('Images/show/stones.png'),
  //   additionalImages: [],
  //   year: '2006',
  //   description: '',
  //   tags: [],
  //   medium: 'Guoache on paper',
  //   categories: ['PAINTING', '2D'],
  //   size: '6in x 7in',
  //   slug: 'stones'
  // },
  {
    additionalImages: [],
    blurredIndex: require("app/assets/images/portfolio_index/skull.png"),
    categories: ["INSTALLATION", "3D"],
    description: "",
    indexAltText:
      "Detail of Balloon Skull Installation, Mixed Media Installation",
    inFocusIndex: require("app/assets/images/portfolio_index/skull_focus.png"),
    largeAsset: require("app/assets/images/show/skull.jpg"),
    medium: "Balloons, mixed media",
    size: "12ft x 12ft",
    slug: "skull",
    tags: ["installation"],
    title: "Balloon Skull Installation",
    year: "2015",
  },
  // {
  //   title: 'Lolita',
  //   blurredIndex: require('Images/portfolio_index/lolita.png'),
  //   indexAltText: 'Detail of Lolita, Oil painting',
  //   inFocusIndex: '',
  //   largeAsset: require('Images/show/lolita.png'),
  //   additionalImages: [],
  //   year: '2007',
  //   description: '',
  //   tags: ['oil', 'painting'],
  //   medium: 'Oil on linen',
  //   categories: ['PAINTING', '2D'],
  //   size: '11in x 14in',
  //   slug: 'lolita'
  // },
  PARADE,
  HUPPAH,
  SKETCHBOOK,
];

export default PORTFOLIO;
