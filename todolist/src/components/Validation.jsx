import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "./valid";

const Validation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Input placeholder="email" {...register("email")} />
      {errors && <p>{errors.email?.message}</p>}
      <S.Input placeholder="nickname" {...register("nickname")} />
      {errors && <p>{errors.nickname?.message}</p>}
      <S.Input
        placeholder="password"
        type="password"
        {...register("password")}
      />
      {errors && <p>{errors.password?.message}</p>}
      <S.Input
        placeholder="passwordConfirm"
        type="password"
        {...register("passwordConfirm")}
      />
      {errors && <p>{errors.passwordConfirm?.message}</p>}
      <button type="submit">click</button>
    </S.Form>
  );
};

export default Validation;

const S = {};

S.Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

S.Input = styled.input`
  width: 500px;
  height: 50px;
`;
