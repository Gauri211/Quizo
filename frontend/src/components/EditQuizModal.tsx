import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { updateQuiz } from "../services/api";

export default function EditQuizModal({ quiz, onClose, onUpdate }) {
  const [title, setTitle] = useState(quiz.title);
  const [description, setDescription] = useState(quiz.description);

  const handleUpdate = async () => {
    await updateQuiz(quiz.id, title, description);
    onUpdate();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold">Edit Quiz</h2>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2" />
        <Input value={description} onChange={(e) => setDescription(e.target.value)} className="mt-2" />
        <div className="flex justify-between mt-4">
          <Button onClick={handleUpdate} className="bg-green-500 hover:bg-green-600">Save</Button>
          <Button onClick={onClose} variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
