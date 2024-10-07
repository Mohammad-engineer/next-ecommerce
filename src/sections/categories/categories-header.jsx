import { m } from "framer-motion";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { varFade, AnimateText, MotionContainer, animateTextClasses } from 'src/components/animate';

export const CategoriesHeader = () => {
  return ( 
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
    
      {/* sx={{
        height: { md: 56 },
        py: { xs: 10, md: 0 },
        overflow: "hidden",
        position: "relative",
        //backgroundSize: "cover",
        //backgroundPosition: "center",
      }} */}
      
      <Container component={MotionContainer}>
        <Box
          sx={{
            bottom: { md: 10 },
            position: { md: "absolute" },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          <AnimateText
            component="h3"
            variant="h3"
            text={["main"," categories"]}
            variants={varFade({ distance: 24 }).inRight}
            sx={{
              color: "text-pinky",
              [`& .${animateTextClasses.line}[data-index="0"]`]: {
                [`& .${animateTextClasses.word}[data-index="0"]`]: {
                  color: "primary.main",
                },
              },
            }}
          />
        </Box>
      </Container>
    </div>
  );
};

