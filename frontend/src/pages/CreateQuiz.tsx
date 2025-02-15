import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { createQuiz } from "../services/api";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleCreate = async () => {
    await createQuiz(title, description);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 mx-2 rounded-lg shadow-lg w-150">
        <h2 className="text-2xl font-bold">Create New Quiz</h2>
        <div className="my-4">
          <Label htmlFor="title" className="text-gray-600">Quiz Title</Label>
          <Input
            id="title"
            placeholder="Enter quiz title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="description" className="text-gray-600">Quiz Description</Label>
          <Textarea
            rows={3}
            id="description"
            placeholder="Write a short description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1"
          />
        </div>
        <Button onClick={handleCreate} className="mt-4 cursor-pointer">Create Quiz</Button>
      </div>
    </div>
  );
};

export default CreateQuiz;
