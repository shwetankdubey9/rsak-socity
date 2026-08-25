export interface GisMap {
  id: string;
  title: string;
  description: string;
  image?: string;
  alt: string;
}

export const gisMaps: GisMap[] = [
  {
    id: "geomorphology",
    title: "Geomorphology Map",
    description: "Geomorphological analysis and spatial classification for the Jhansi district area.",
    image: "https://res.cloudinary.com/sb6zkuxk/image/upload/v1787679873/Gemini_Generated_Image_wu4ss0wu4ss0wu4s.png",
    alt: "Geomorphology map of Jhansi district from RSAK Society's GIS services profile.",
  },
  {
    id: "topography",
    title: "Topography Map",
    description: "Terrain elevation, drainage, and administrative-area mapping for planning studies.",
    image: "https://res.cloudinary.com/sb6zkuxk/image/upload/v1787678931/1.png",
    alt: "Topography map from RSAK Society's GIS services profile.",
  },
  {
    id: "water-level",
    title: "Water Level Map",
    description: "Groundwater-level classification to support water-resource assessment and planning.",
    image: "https://res.cloudinary.com/sb6zkuxk/image/upload/v1787680205/image_8e5cab1f.png",
    alt: "Water level map from RSAK Society's GIS services profile.",
  },
  {
    id: "3d-map",
    title: "3D Map",
    description: "Three-dimensional terrain visualization for spatial interpretation and project planning.",
    image: "https://res.cloudinary.com/sb6zkuxk/image/upload/v1787680737/image_34f3ff8c.png",
    alt: "Three-dimensional terrain map from RSAK Society's GIS services profile.",
  },
  {
    id: "allahabad-topography",
    title: "Allahabad District Topography Map",
    description: "District-level topographic reference map for terrain and drainage assessment.",
    image: "https://res.cloudinary.com/sb6zkuxk/image/upload/v1787680852/image_15f57514.png",
    alt: "Allahabad district topography map from RSAK Society's GIS services profile.",
  },
  {
    id: "dem",
    title: "Digital Elevation Model (DEM)",
    description: "High-resolution elevation modelling for slope, drainage, and watershed analysis.",
    // Add the client's map file at public/images/maps/dem-map.jpg, then set image to that path.
    alt: "Digital Elevation Model map asset awaiting upload.",
  },
];
