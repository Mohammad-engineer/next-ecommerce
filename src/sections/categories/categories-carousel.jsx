import { m } from "framer-motion";
import { varFade, MotionViewport } from "src/components/animate";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { _socials, _categoriesMembers } from "src/_mock";
import { Image } from "src/components/image";

import {
  Carousel,
  useCarousel,
  CarouselArrowFloatButtons,
} from "src/components/carousel";

export const CategoriesCarousel = () => {
  const carousel = useCarousel({
    align: "start",
    slideSpacing: "24px",
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: 8 },
  });

  return (
    <Stack
      //maxWidth="xl"
      component={MotionViewport}
      sx={{ textAlign: "center", py: { xs: 8, md: 1 } }}
    >
      <Stack sx={{ position: "relative" }}>
        <CarouselArrowFloatButtons
          {...carousel.arrows}
          options={carousel.options}
          slotProps={{
            prevBtn: { sx: { top: { xs: -8, md: -40 }, left: { md: "92%" } } },
            nextBtn: { sx: { top: { xs: -8, md: -40 }, right: { md: 50 } } },
          }}
        />
        <Container maxWidth=''>
          <Carousel carousel={carousel} sx={{ px: 0.5 }}>
            {_categoriesMembers.map((member) => (
              <Box
                key={member.id}
                component={m.div}
                variants={varFade().in}
                sx={{ py: { xs: 8, md: 10 } }}
              >
                <MemberCard member={member} />
              </Box>
            ))}
          </Carousel>
        </Container>
      </Stack>
    </Stack>
  );
};

// ----------------------------------------------------------------------

function MemberCard({ member }) {
  return (
    <Box >
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {member.name}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: "text.secondary" }}>
        {member.role}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image
      
          //sx={{width:'80px',height:'80px'}}
          alt={member.name}
          src={member.catImgUrl}
          ratio="1/1"
          sx={{ borderRadius: 2 }}
        />
      </Box>
    </Box>
  );
}
