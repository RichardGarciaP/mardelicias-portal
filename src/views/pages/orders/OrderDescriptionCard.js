import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Divider, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { ORDER_STATUS } from '../../../utils/constants';
import { styled, useTheme } from '@mui/material/styles';
import FieldItem from '../../../ui-component/field-item/FieldItem';
import { Lightbox } from 'react-modal-image';
import moment from 'moment/moment';

const VoucherWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const ItemLink = styled(Button)(({ theme }) => ({
  borderBottom: `2px solid #673ab7`,
  cursor: 'pointer',
  padding: 0,
  color: 'black',
  borderRadius: 0,
  fontWeight: 400
}));

const OrderDescriptionCard = ({ data, onSubmit }) => {
  const [openVoucher, setOpenVoucher] = useState(false);

  const theme = useTheme();
  const validations = Yup.object().shape({
    status: Yup.string().required('El estado del pedido es requerido')
  });

  const onOpenVoucher = () => {
    setOpenVoucher(true);
  };

  const onCloseVoucher = () => {
    setOpenVoucher(false);
  };

  return (
    <Formik initialValues={{ ...data }} validationSchema={validations} onSubmit={onSubmit}>
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <FormControl fullWidth error={Boolean(touched.status && errors.status)} sx={{ ...theme.typography.customInput }}>
            <InputLabel htmlFor="outlined-adornment-status">Estado</InputLabel>
            <Select
              labelId="outlined-adornment-status"
              id="demo-simple-select"
              value={values.status}
              name="status"
              onBlur={handleBlur}
              onChange={handleChange}
              sx={{ '& .MuiSelect-select': { padding: '30.5px 14px 11.5px' } }}
            >
              {ORDER_STATUS?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {touched.status && errors.status && (
              <FormHelperText error id="standard-weight-helper-status">
                {errors.status}
              </FormHelperText>
            )}
            <Divider sx={{ marginY: '1rem' }} />
            <FieldItem title={'Cliente'} value={`${data.users.first_name} ${data.users.last_name}`} />
            <FieldItem title={'Creación'} value={moment(data.created_at).format('DD/MM/YYYY')} />
            <VoucherWrapper>
              {data.payment_method && <FieldItem title={'Metodo de pago'} value={data.payment_method} />}
              {data.payment_method && data?.voucher_url && (
                <ItemLink onClick={onOpenVoucher} variant="text">
                  Ver Comprobante
                </ItemLink>
              )}
            </VoucherWrapper>
            <Divider sx={{ marginY: '1rem' }} />
            <FieldItem title={'Dirección de envio'} value={data.users.direction} />
            <FieldItem title={'Detalle'} value={data.users.direction_detail} />
            <Button
              disableElevation
              fullWidth
              disabled={isSubmitting}
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
              sx={{ display: 'block', marginTop: '1rem' }}
            >
              Guardar
            </Button>
            {data?.voucher_url && openVoucher && (
              <Lightbox medium={data?.voucher_url} large={data?.voucher_url} alt="Comprobante de pago" onClose={onCloseVoucher} />
            )}
          </FormControl>
        </form>
      )}
    </Formik>
  );
};

export default OrderDescriptionCard;
