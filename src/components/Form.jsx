import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Form = () => {
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("The full name is required"),
    email: yup.string().email().required("The email is required"),
    age: yup.number().positive().integer().required().min(18),
    password: yup.string().required().min(4).max(20),
    confirmPassword: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "password do not match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>A simple form </h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          {...register("fullName")}
          placeholder="Full name"
        />{" "}
        <br /> <br />
        {errors.fullName && <p>{errors.fullName?.message}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          {...register("email")}
          placeholder="Email"
        />{" "}
        <br /> <br />
        {errors.email && <p>{errors.email?.message}</p>}
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          {...register("age")}
          placeholder="Age"
        />{" "}
        <br /> <br />
        {errors.age && <p>{errors.age?.message}</p>}
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password")}
          placeholder="password"
        />{" "}
        <br /> <br />
        {errors.password && <p>{errors.password?.message}</p>}
        <label htmlFor="confirmPassword">confirm password:</label>
        <input
          type="confirmPassword"
          name="confirmPassword"
          {...register("confirmPassword")}
          id="confirmPassword"
          placeholder="confirmPassword"
        />{" "}
        <br /> <br />
        {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
        <button type="submit">submit</button>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Form;
