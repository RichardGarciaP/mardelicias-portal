import React, { useEffect } from 'react';
import MainCard from '../../../../ui-component/cards/MainCard';
import UserDetail from '../../../pages/users/UserDetailForm';
import { createUser } from '../../../../services/users/users';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserDescription = () => {
  const navigation = useNavigate();
  const onSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    const { data, error } = await createUser(values);
    if (error) {
      setErrors({ submit: error.message });
      setStatus({ success: false });
      setSubmitting(false);
      return;
    }

    setStatus({ success: true });
    setSubmitting(false);

    toast('Usuario creado correctamente');
    navigation('/users');
    console.log(data);
  };

  return (
    <MainCard title="Test">
      <UserDetail onSubmit={onSubmit} />
    </MainCard>
  );
};

export default UserDescription;
