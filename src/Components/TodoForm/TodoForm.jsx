import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const result = await axios.post('http://localhost:5000/task',data)
    if(result.data){
      toast.success("your task successfully add ")
    }
  };
  toast.error(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Title"
          {...register("Title", { required: true, max: 50, maxLength: 50 })}
        />
        <textarea
          {...register("Description", {
            required: true,
            max: 199,
            maxLength: 200,
          })}
        />
        <input
          type="time"
          placeholder="Timestamp "
          {...register("Timestamp ", { required: true })}
        />
        <select {...register("Category", { required: true })}>
          <option value="To-Do:">To-Do:</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
};

export default TodoForm;
