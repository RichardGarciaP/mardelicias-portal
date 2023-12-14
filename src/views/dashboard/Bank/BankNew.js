import React from 'react';
import MainCard from '../../../ui-component/cards/MainCard';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { insertEntity } from '../../../services/methods';
import { mutate } from 'swr';
import BankDetailForm from 'views/pages/banks/BankDetailForm';

const ENTITY_NAME = 'bank_accounts';

const BankNew = () => {
  const navigation = useNavigate();

  const onSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    setSubmitting(true);

    const { error } = await insertEntity(ENTITY_NAME, { ...values });
    if (error) {
      setErrors({ submit: 'Ha ocurrido un error, vuelva a intentarlo' });
      setStatus({ success: false });
      setSubmitting(false);
      toast.error('Error al crear el banco');
      return;
    }

    setStatus({ success: true });
    setSubmitting(false);

    toast.success('Banco creado correctamente');
    mutate(`/bank_accounts`);
    navigation('/banks');
  };

  return (
    <MainCard title="Añadir Nuevo Banco">
      <BankDetailForm onSubmit={onSubmit} />
    </MainCard>
  );
};

export default BankNew;
