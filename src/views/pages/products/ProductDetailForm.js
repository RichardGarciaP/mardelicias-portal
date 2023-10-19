import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, OutlinedInput } from '@mui/material';
import AnimateButton from '../../../ui-component/extended/AnimateButton';

import { Formik } from 'formik';
import * as Yup from 'yup';

const Container = styled('div')({});

const ProductDetailForm = ({ initialValues, onSubmit }) => {
  const theme = useTheme();

  const validations = Yup.object().shape({
    name: Yup.string().min(3).required('El nombre es requerido'),
    description: Yup.string().min(3).required('La descripción es requerida'),
    price: Yup.number().required('El precio es requerido'),
    stock: Yup.number().required('El stock es requerido'),
    imageUrl: Yup.string().required('La contraseña es requerida')
  });

  return (
    <Container>
      <Formik
        initialValues={
          initialValues ?? {
            name: '',
            description: '',
            price: 0,
            stock: 0,
            imageUrl: ''
          }
        }
        validationSchema={validations}
        onSubmit={onSubmit}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-name">Nombre</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-name"
                    type="text"
                    value={values.name}
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Nombre"
                  />
                  {touched.name && errors.name && (
                    <FormHelperText error id="standard-weight-helper-text-name">
                      {errors.name}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={Boolean(touched.imageUrl && errors.imageUrl)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-imageUrl">Imagen</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-imageUrl"
                    type="text"
                    value={values.imageUrl}
                    name="imageUrl"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Imagen"
                  />
                  {touched.imageUrl && errors.imageUrl && (
                    <FormHelperText error id="standard-weight-helper-text-imageUrl">
                      {errors.imageUrl}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={Boolean(touched.price && errors.price)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-price">Precio</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-price"
                    type="number"
                    value={values.price}
                    name="price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Descripción"
                  />
                  {touched.price && errors.price && (
                    <FormHelperText error id="standard-weight-helper-text-price">
                      {errors.price}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={Boolean(touched.stock && errors.stock)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-stock">Inventario</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-stock"
                    type="number"
                    value={values.stock}
                    name="stock"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Descripción"
                  />
                  {touched.stock && errors.stock && (
                    <FormHelperText error id="standard-weight-helper-text-stock">
                      {errors.stock}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth error={Boolean(touched.description && errors.description)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-description">Descripción</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-description"
                    type="text"
                    value={values.description}
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Descripción"
                    multiline
                    minRows={5}
                  />
                  {touched.description && errors.description && (
                    <FormHelperText error id="standard-weight-helper-text-description">
                      {errors.description}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {errors.submit && (
                  <Box sx={{ mt: 3 }}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box sx={{ mt: 2 }}>
                  <AnimateButton>
                    <Button
                      disableElevation
                      fullWidth
                      disabled={isSubmitting}
                      size="large"
                      type="submit"
                      variant="contained"
                      color="secondary"
                      sx={{ display: 'block' }}
                    >
                      Enviar
                    </Button>
                  </AnimateButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default ProductDetailForm;
