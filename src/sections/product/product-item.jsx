import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import { fCurrency } from "src/utils/format-number";

import { Label } from "src/components/label";
import { Image } from "src/components/image";
import { Iconify } from "src/components/iconify";
import { ColorPreview } from "src/components/color-utils";

import { useCheckoutContext } from "../checkout/context";

// ----------------------------------------------------------------------

export function ProductItem({ product }) {
  const checkout = useCheckoutContext();

  const {
    id,
    name,
    coverUrl,
    price,
    colors,
    available,
    sizes,
    priceSale,
    newLabel,
    saleLabel,
  } = product;

  // const linkTo = paths.product.details(id);

  const handleAddCart = async () => {
    const newProduct = {
      id,
      name,
      coverUrl,
      available,
      price,
      colors: [colors[0]],
      size: sizes[0],
      quantity: 1,
    };
    try {
      checkout.onAddToCart(newProduct);
    } catch (error) {
      console.error(error);
    }
  };

  const renderLabels = (product?.newLabel?.enabled || product?.saleLabel?.enabled) && (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{
        position: "absolute",
        zIndex: 9,
        top: 16,
        right: 16,
      }}
    >
      {product?.newLabel?.enabled && (
        <Label variant="filled" color="info">
          {product?.newLabel.content}
        </Label>
      )}
      {product?.saleLabel?.enabled && (
        <Label variant="filled" color="error">
          {product?.saleLabel?.content}
        </Label>
      )}
    </Stack>
  );

  const renderImg = (
    <Box sx={{ position: "relative", p: 1 }}>
      {!!product?.available && (
        <Fab
          color="warning"
          size="medium"
          className="add-cart-btn"
          onClick={handleAddCart}
          sx={{
            right: 16,
            bottom: 16,
            zIndex: 9,
            opacity: 0,
            position: "absolute",
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
          }}
        >
          <Iconify icon="solar:cart-plus-bold" width={24} />
        </Fab>
      )}

      <Tooltip
        title={!product?.available && "Out of stock"}
        placement="bottom-end"
      >
        <Image
          alt={product?.name}
          src={product?.coverUrl}
          ratio="1/1"
          sx={{
            borderRadius: 1.5,
            ...(!product?.available && {
              opacity: 0.48,
              filter: "grayscale(1)",
            }),
          }}
        />
      </Tooltip>
    </Box>
  );

  const renderContent = (
    <Stack spacing={2.5} sx={{ p: 3, pt: 2 }}>
      <Link
        component={RouterLink}
        href={`./product/${product?.id}`}
        color="inherit"
        variant="subtitle2"
        noWrap
      >
        {product?.name}
      </Link>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <ColorPreview colors={product?.colors} />

        <Stack direction="row" spacing={0.5} sx={{ typography: "subtitle1" }}>
          {product?.priceSale && (
            <Box
              component="span"
              sx={{ color: "text.disabled", textDecoration: "line-through" }}
            >
              {fCurrency(product?.priceSale)}
            </Box>
          )}

          <Box component="span">{fCurrency(product?.price)}</Box>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Card sx={{ "&:hover .add-cart-btn": { opacity: 1 } }}>
      
      {(product?.newLabel?.enabled || product?.saleLabel?.enabled) && (
        <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{
          position: "absolute",
          zIndex: 9,
          top: 16,
          right: 16,
        }}
      >
        {(product?.saleLabel?.enabled) && (
        <p >
          {product?.newLabel.content}
        </p>
      )}

      </Stack>
      )}

      {renderImg}

      {renderContent}

    </Card>
  );
}

// {renderLabels}

// {renderImg}

// {renderContent}
