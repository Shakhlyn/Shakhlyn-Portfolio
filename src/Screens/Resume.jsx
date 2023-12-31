import { resumeLink } from "../constants";

const Resume = () => {
  return (
    <div className="flex justify-center md:w-3/5 md:h-full h-screen mx-auto mt-20">
      <iframe
        // src="https://drive.google.com/file/d/1I9ABvEr57Sn28lFkbwBSTHUd5zCQT9o2/preview"
        src={resumeLink}
        width="640"
        height="600"
        // height="500"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;
