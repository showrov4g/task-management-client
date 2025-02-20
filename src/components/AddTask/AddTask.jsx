import InputForm from "../InputForm/InputForm";

const AddTask = () => {
 
    return (
        <div>
            <div>
                <h1 className="text-[#070e0b] text-4xl font-bold">Add your Task</h1>
            </div>
            {/* input form  */}
            <div>
                <InputForm></InputForm>
            </div>
        </div>
    );
};

export default AddTask;