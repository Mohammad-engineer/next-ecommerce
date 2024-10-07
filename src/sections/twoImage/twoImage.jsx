import { Card, Container } from "@mui/material";
import { Image } from "src/components/image";

const TwoImage = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Card>
        <Image
          src="./assets/images/category/banner-1.webp"
          alt=""
          ratio="2/1"
          sx={{ borderRadius: 2 }}
        />
      </Card>
      <Card>
        <Image
          src="./assets/images/category/banner-3.webp"
          alt=""
          ratio="2/1"
          sx={{ borderRadius: 2 }}
        />
      </Card>
      <Card>
        <Image
          src="./assets/images/category/banner-2.webp"
          alt=""
          ratio="2/1"
          sx={{ borderRadius: 2 }}
        />
      </Card>
      
    </div>
  );
};

export default TwoImage;
