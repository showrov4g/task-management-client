import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const InputForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast.success("this is success maeeage"),
      console.log(data)
      
  };
  console.log(errors?.Title?.message);
  toast.error(errors?.Title?.message);

  return (
    <div className="mx-auto flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-start justify-center items-start"
      >
        <label className="" htmlFor="">Title</label>
        <input
          type="text"
          placeholder="Title"
          {...register("Title", {
            required: {
                value: true,
                message: "Title is required"
            },
            maxLength: {
              value: 50,
              message: "Title not more than 50 character",
            },
          })}
          aria-invalid={errors.Title ? "true" : "false"}
        />
        {/* -----error message------ */}
        {errors.Title?.type === "required" && (
          <p role="alert">{errors?.Title?.message}</p>
        )}
         {errors.Title?.type === "maxLength" && (
          <p role="alert">{errors?.Title?.message}</p>
        )}
        {/* description  */}
        <label htmlFor="">Description</label>
        <textarea
          {...register("Description", {
            required: {
                value: true,
                message: "Description is required"
            },
            max: 199,
            maxLength: {
                value: 200,
                message: "Description not more than 200 character"
            },
          })}
          aria-invalid={errors.Description ? "true" : "false"}
        />
        {errors.Description?.type === "required" && (
          <p role="alert">{errors?.Description?.message}</p>
        )}
         {errors.Description?.type === "maxLength" && (
          <p role="alert">{errors?.Description?.message}</p>
        )}

        {/* time input  */}
        <label htmlFor="">Set Time</label>
        <input
          type="time"
          placeholder="Timestamp"
          {...register("Timestamp", { required: {
            value: true,
            message: "You need have to select task time"
          } })}
          aria-invalid={errors.Timestamp? "true" : "false"}
        />
        {errors.Timestamp?.type === "required" && (
          <p role="alert">{errors?.Timestamp?.message}</p>
        )}
        {/* category section  */}
        <label htmlFor="">Select a Category</label>
        <select
          {...register("Category", { required: true })}
          aria-invalid={errors.Category ? "true" : "false"}
        >
          <option value="">select one</option>
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        {errors.Category?.type === "required" && (
          <p role="alert">Category is required</p>
        )}

        <input type="submit" />
      </form>
    </div>
  );
};

export default InputForm;
