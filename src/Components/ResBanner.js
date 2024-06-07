import { banner_url } from "../Constants/Constant";

const ResBanner = (props) => {
  const { resban } = props;
  const { imageId, text } = resban?.info1;

  return (
    <>
      <div className="rest_banner">
        <img src={banner_url + imageId} />
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default ResBanner;
